import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {
  useActiveDocContext,
  useActivePlugin,
  useDocVersionSuggestions,
  useDocsPreferredVersion,
  useDocsVersion,
} from '@docusaurus/plugin-content-docs/client';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {findVersionDocMapping} from '@site/src/components/DocsVersionSelector/versionDocMappings';

function BannerLabel({siteTitle, versionMetadata}) {
  if (versionMetadata.banner === 'unreleased') {
    return (
      <Translate
        id="theme.docs.versions.unreleasedVersionLabel"
        description="The label used to tell the user that they're browsing an unreleased doc version"
        values={{siteTitle, versionLabel: <b>{versionMetadata.label}</b>}}>
        {'This is unreleased documentation for {siteTitle} {versionLabel} version.'}
      </Translate>
    );
  }

  return (
    <Translate
      id="theme.docs.versions.unmaintainedVersionLabel"
      description="The label used to tell the user that they're browsing an unmaintained doc version"
      values={{siteTitle, versionLabel: <b>{versionMetadata.label}</b>}}>
      {'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.'}
    </Translate>
  );
}

function LatestVersionSuggestionLabel({versionLabel, to, onClick}) {
  return (
    <Translate
      id="theme.docs.versions.latestVersionSuggestionLabel"
      description="The label used to tell the user to check the latest version"
      values={{
        versionLabel,
        latestVersionLink: (
          <b>
            <Link to={to} onClick={onClick}>
              <Translate
                id="theme.docs.versions.latestVersionLinkLabel"
                description="The label used for the latest version suggestion link label">
                latest version
              </Translate>
            </Link>
          </b>
        ),
      }}>
      {'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).'}
    </Translate>
  );
}

function getVersionMainDoc(version) {
  return version.docs.find((doc) => doc.id === version.mainDocId);
}

export default function DocVersionBanner({className}) {
  const versionMetadata = useDocsVersion();
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {pluginId} = useActivePlugin({failfast: true});
  const {savePreferredVersionName} = useDocsPreferredVersion(pluginId);
  const {latestDocSuggestion, latestVersionSuggestion} =
    useDocVersionSuggestions(pluginId);
  const {activeDoc} = useActiveDocContext(pluginId);
  const mapping = findVersionDocMapping(activeDoc?.id);
  const mappedDocId = mapping?.[latestVersionSuggestion.name];
  const mappedDoc = mappedDocId
    ? latestVersionSuggestion.docs.find((doc) => doc.id === mappedDocId)
    : undefined;
  const suggestedDoc = mappedDoc ?? latestDocSuggestion;

  if (!versionMetadata.banner) {
    return null;
  }

  if (versionMetadata.banner === 'unreleased' && !suggestedDoc) {
    return null;
  }

  const targetDoc = suggestedDoc ?? getVersionMainDoc(latestVersionSuggestion);

  return (
    <div
      className={clsx(
        className,
        ThemeClassNames.docs.docVersionBanner,
        'alert alert--warning margin-bottom--md',
      )}
      role="alert">
      <div>
        <BannerLabel siteTitle={siteTitle} versionMetadata={versionMetadata} />
      </div>
      <div className="margin-top--md">
        <LatestVersionSuggestionLabel
          versionLabel={latestVersionSuggestion.label}
          to={targetDoc.path}
          onClick={() => savePreferredVersionName(latestVersionSuggestion.name)}
        />
      </div>
    </div>
  );
}