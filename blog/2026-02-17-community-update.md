---
title: PSADT 2026 Community Update
authors: [sintaxasn]
tags: [psappdeploytoolkit]
description: The latest community update from the PSAppDeployToolkit team.
---

## Community Update

The past year has been an important one for PSADT - not just in terms of features shipped, but in how the toolkit has continued to evolve alongside the people who actually rely on it day to day. As the project matures, the goal hasn't changed: build a dependable, flexible deployment framework shaped by our own real-world experience, and the feedback we receive from our phenomenal, ever-growing and strong community.

This update is a little later than I originally planned. It was important that we take the time to get the website updated - there's been a substantial number of changes and improvements - we wanted to get our Ecosystem section up, and the documentation given some more polish, anod call out our training series! Now that it's all done, I wanted to step back, look at where things have come from since v4.0, where they are now, and where the next phase of PSADT is heading.

<!-- truncate -->

### Built on Real-World Requirements

Depending on the day, I'll give you one of two answers for why PSADT exists. The first is that there were so many gaps left to fill in SCCM & Intune! The second - and probably the more honest one - is that real application deployments are messy.

SYSTEM context versus user sessions. Timing issues. Processes that refuse to close. Installers that behave unpredictably. Environments that never quite match the lab. Inconsistent or broken user interfaces. The toolkit didn't come from abstract design goals; it grew out of the need to ensure our customers (end users) were protected from the latest threats, could do their job relatively uninterrupted, that when software was deployed or updated, it didn't knock them offline, and should the absolute worst happen and the deployment failed - we had all the information we needed to quickly get to the root cause and fix it.

Tooling around application packaging hasn't fundamentally shifted as much as many of us expected. I was sure we'd have no installers at all. Or maybe installers that self-healed, and updated themselves with tiny delta patches, and made me coffee - truly lived up to the title, Install Wizard... Instead, we still tend to see vendors offload complexity onto customers and the same problems crop up. PSADT is still very relevant.

What has changed though, is how PSADT is being used. It's no longer just a helper script. For many organizations it's become a consistent execution layer that sits between your deployment platform and the harsh reality of managing a Windows endpoint environment. Whether that's Intune, ConfigMgr, Autopilot, hybrid environments, or other endpoint management platforms like Tanium, NinjaOne and PDQ. PSADT just keeps being used as the "glue" that makes deployments behave.

The broader ecosystem has evolved alongside that. Tools in patch management, packaging, and lifecycle management - including platforms like Patch My PC, Devicie, Robopack, Master Packager and Advanced Installer - are integrating or building around PSADT to give customers a more reliable execution experience. Seeing the toolkit become part of a larger ecosystem has been one of the most interesting developments over the last couple of years.

And people continue to use it in ways none of us initially predicted. PSADT is now being used by many organizations as general-purpose process orchestration and user interaction framework - not just for app installs, but for broader automation scenarios.

### PSADT v4.1 - The Foundation for the Future

In August of last year we released PSADT v4.1. This was an even more important release than v4.0 in terms of ambition. There were several long-standing roadmap challenges / goals that we wanted to solve, and one of the biggest was moving away from ServiceUI.

For years, displaying a User Interface during an SCCM or Intune deployment required you to leverage an unsupported Microsoft component called ServiceUI. It worked, and it helped solve a real problem, but it was never ideal from a security or maintainability standpoint. With 4.1, the toolkit moved to a proper client / server interaction model - separating execution from user interaction so the UI runs directly in the user session where it belongs.

That architectural shift unlocked a number of things:

- ADMX-backed configuration, allowing organizations to enforce behaviour through policy rather than maintaining custom toolkit builds.
- Restoration of UI feature parity with v3 while modernizing the experience.
- The ability to request user input directly within dialogs.
- Support for richer dialog content, including formatting and hyperlinks.
- Expanded environment variable and INI management functions.
- Smarter DeployMode detection so behaviour adapts automatically to OOBE, ESP, and session state.

Since its release, we've focused heavily on stability and refinement, and at this stage, 4.1.8 has proven extremely solid in real-world environments, even though adoption naturally lags behind the broader 4.x line. That's normal, and it's a good problem to have - it means organizations are transitioning deliberately rather than rushing upgrades.

Download numbers continue to reflect that momentum. 4.1.x alone has crossed the half a million downloads mark, and overall 4.x adoption has surpassed two million. More importantly, the transition away from v3.x is well underway.

## What's Coming in 4.2

If 4.1 was about proving the new architecture in the real world, 4.2 is about making the good parts feel effortless.

The direction hasn't changed: keep hardening the engine, keep smoothing sharp edges, and keep giving packagers more control without turning PSADT into a pile of one-off special cases.

Some of the themes shaping 4.2 include:

- **Reduction in dependencies reliance**. Not every improvement is visible as a feature. Some of the most important work happens behind the scenes. One important aspect is reducing our reliance on components that aren't always, well.. reliable - maybe it's another project which may not be well maintained, or even OS features that are notorious for breaking (I'm looking at you, WMI).

- **Ground-up redesign of the build system**. The build time had creeped up to about 15 minutes. The majority of the build tooling have been replaced by a single custom purpose-built PSADT ModuleBuilder, optimized for caching and to avoid repeating tasks. Our builds are down to 7 minutes.

- **Increased flexibility around User Experience**. Organizations want built-in dialogs that still allow them to define what happens next. We're adding new dialog types, as well as looking at ways to make deferral anuling logic more composable without increasing complexity. We're also adding the ability to break out of the Windows ESP to display per-application installation progress - so you aren't left wondering whether an installation has hung, and to help you troubleshoot if it is.

As always, deprecations are approached carefully. We communicate early where changes could impact existing workflows and automations - and community feedback will continue to drive final decisions. Look out for this shipping within the next two or three months.

## On Project Stewardship

Open source projects evolve, and so do the people behind them. With this update, I'm stepping away from the day-to-day Project Lead role.

Thank you to the good folks at Patch My PC for their support and for stewarding PSADT over the last two years - Justin, Marie, Djam, and Derek, thank you. I'm confident it's in good hands.

I'm also incredibly grateful to Mitch and Dan G for the countless hours they've put into coding, testing, and helping users across Discourse and the wider community. Mitch, especially, has raised the bar both for the work replacing ServiceUI, and the sheer volume of code written / features added / issues addressed. If it came down to choosing a developer or LLM, my money is on Mitch every time.

## Looking Forward

PSADT has grown from a personal project into something far bigger than any one person. It's more stable, more refined, and more widely used than ever before, and that's entirely because of the community that continues to build on top of it, challenge it, and push it forward.

That's the direction we'll keep moving in: practical, real-world tooling shaped by the people who use it every day - with just enough stubbornness to keep solving problems that never seem to go away.

As for me - I'm not stepping away, just stepping back. I'll still be here, contributing and helping shape what comes next. Some problems are too stubborn to walk away from.
