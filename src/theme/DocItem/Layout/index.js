/**
 * Swizzled DocItem/Layout — wraps breadcrumbs + version selector in a flex row
 * and removes DocVersionBadge (replaced by DocsVersionSelector).
 *
 * Based on @docusaurus/theme-classic DocItem/Layout.
 */
import React from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import ContentVisibility from '@theme/ContentVisibility';
import DocsVersionSelector from '@site/src/components/DocsVersionSelector';
import styles from './styles.module.css';

function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}

export default function DocItemLayout({children}) {
  const docTOC = useDocTOC();
  const {metadata} = useDoc();
  const articleRef = React.useRef(null);

  React.useEffect(() => {
    const article = articleRef.current;
    if (!article) {
      return;
    }

    const banner = article.querySelector('[data-doc-version-banner]');
    if (!banner) {
      return;
    }

    const firstHeading = article.querySelector('.theme-doc-markdown h1, article h1');
    if (firstHeading) {
      firstHeading.insertAdjacentElement('afterend', banner);
    }
  }, []);

  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <ContentVisibility metadata={metadata} />
        <div className={styles.docItemContainer}>
          <article ref={articleRef}>
            <div className={styles.breadcrumbRow}>
              <DocBreadcrumbs />
              <DocsVersionSelector />
            </div>
            <div
              className={styles.docVersionBannerOffset}
              data-doc-version-banner
            >
              <DocVersionBanner />
            </div>
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
