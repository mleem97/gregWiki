/**
 * Swizzled: community footer links use react-icons instead of emoji/CSS pseudo-elements.
 */
import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type {Props} from '@theme/Footer/LinkItem';
import {FaDiscord, FaGithub, FaLifeRing} from 'react-icons/fa6';

const footerIconProps = {
  className: 'footer-icon-svg',
  'aria-hidden': true as const,
  size: 14,
};

function getFooterIcon(className?: string): ReactNode | null {
  if (!className) {
    return null;
  }
  if (className.includes('footer-link-github')) {
    return <FaGithub {...footerIconProps} />;
  }
  if (className.includes('footer-link-discord')) {
    return <FaDiscord {...footerIconProps} />;
  }
  if (className.includes('footer-link-support')) {
    return <FaLifeRing {...footerIconProps} />;
  }
  return null;
}

export default function FooterLinkItem({item}: Props): ReactNode {
  const {to, href, label, prependBaseUrlToHref, className, ...props} = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});
  const icon = getFooterIcon(className);

  return (
    <Link
      className={clsx('footer__link-item', className)}
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {icon ? (
        <span className="footer-link-with-icon">
          {icon}
          <span>{label}</span>
        </span>
      ) : (
        label
      )}
      {href && !isInternalUrl(href) && <IconExternalLink />}
    </Link>
  );
}
