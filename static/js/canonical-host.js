(function () {
  try {
    const allowedDomainRoots = [
      'gregframework.eu',
      'gregframework',
      'datacentermods.com',
      'datacentermods',
      'frikadellental.de',
    ];

    const currentHost = globalThis.window.location.hostname.toLowerCase();
    const currentOrigin = globalThis.window.location.origin;
    const path = globalThis.window.location.pathname + globalThis.window.location.search;
    const currentPathname = globalThis.window.location.pathname.toLowerCase();

    const isDataCenterModsHost =
      currentHost === 'datacentermods.com' ||
      currentHost === 'www.datacentermods.com' ||
      currentHost.endsWith('.datacentermods.com');

    if (isDataCenterModsHost) {
      document.documentElement.classList.add('host-datacentermods');
    }

    const isLegalRoute =
      currentPathname.includes('/imprint') ||
      currentPathname.includes('/impressum') ||
      currentPathname.includes('/privacy') ||
      currentPathname.includes('/privacy-policy') ||
      currentPathname.includes('/datenschutz');

    if (isLegalRoute) {
      document.documentElement.classList.add('route-legal');
    }

    function isAllowedHost(host, root) {
      return host === root || host.endsWith('.' + root);
    }

    const hostAllowed = allowedDomainRoots.some(function (root) {
      return isAllowedHost(currentHost, root);
    });

    let fallbackOrigin = 'https://frikadellental.de';
    const canonicalNode = document.querySelector('link[rel="canonical"]');
    if (canonicalNode) {
      try {
        fallbackOrigin = new URL(canonicalNode.getAttribute('href')).origin;
      } catch (error) {
        console.warn('[canonical-host] Failed to parse canonical URL, using fallback origin.', error);
      }
    }

    const chosenOrigin = hostAllowed ? currentOrigin : fallbackOrigin;
    const currentUrl = chosenOrigin + path;

    if (canonicalNode) {
      canonicalNode.setAttribute('href', currentUrl);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', currentUrl);
    }

    const alternates = document.querySelectorAll('link[rel="alternate"]');
    alternates.forEach(function (node) {
      const href = node.getAttribute('href');
      if (!href) {
        return;
      }

      try {
        const parsed = new URL(href);
        const normalized = chosenOrigin + parsed.pathname + parsed.search;
        node.setAttribute('href', normalized);
      } catch (error) {
        console.warn('[canonical-host] Ignoring malformed alternate URL.', error);
      }
    });
  } catch (error) {
    console.warn('[canonical-host] Host normalization failed.', error);
  }
})();
