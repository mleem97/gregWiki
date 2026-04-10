/**
 * Swizzled: icon-only navbar links use react-icons instead of CSS/emoji pseudo-elements.
 */
import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {isRegexpStringMatch} from '@docusaurus/theme-common';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type {Props} from '@theme/NavbarItem/NavbarNavLink';
import clsx from 'clsx';
import {FaDiscord, FaGithub, FaLifeRing, FaPuzzlePiece} from 'react-icons/fa6';

const navIconProps = {
  className: 'nav-icon-svg',
  'aria-hidden': true as const,
  size: 18,
};

function getNavIcon(className?: string): ReactNode | null {
  if (!className) {
    return null;
  }
  if (className.includes('nav-link-mods')) {
    return <FaPuzzlePiece {...navIconProps} />;
  }
  if (className.includes('nav-link-discord')) {
    return <FaDiscord {...navIconProps} />;
  }
  if (className.includes('nav-link-support')) {
    return <FaLifeRing {...navIconProps} />;
  }
  if (className.includes('nav-link-github')) {
    return <FaGithub {...navIconProps} />;
  }
  return null;
}

function isIconOnlyClass(className?: string) {
  return Boolean(className?.includes('nav-icon-only'));
}

export default function NavbarNavLink({
  activeBasePath,
  activeBaseRegex,
  to,
  href,
  label,
  html,
  isDropdownLink,
  prependBaseUrlToHref,
  className,
  ...props
}: Props): ReactNode {
  const toUrl = useBaseUrl(to);
  const activeBaseUrl = useBaseUrl(activeBasePath);
  const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});
  const cls = clsx(className);
  const navIcon = getNavIcon(cls);
  const iconOnly = isIconOnlyClass(cls) && Boolean(navIcon);
  const isExternalLink = Boolean(label && href && !isInternalUrl(href));

  const linkContentProps = html
    ? {dangerouslySetInnerHTML: {__html: html}}
    : iconOnly && navIcon
      ? {
          children: (
            <>
              {navIcon}
              {typeof label === 'string' || typeof label === 'number' ? (
                <span className="nav-icon-sr-only">{label}</span>
              ) : (
                label
              )}
            </>
          ),
        }
      : {
          children: (
            <>
              {label}
              {isExternalLink && (
                <IconExternalLink
                  {...(isDropdownLink && {width: 12, height: 12})}
                />
              )}
            </>
          ),
        };

  if (href) {
    return (
      <Link
        href={prependBaseUrlToHref ? normalizedHref : href}
        className={className}
        {...props}
        {...linkContentProps}
      />
    );
  }

  return (
    <Link
      to={toUrl}
      isNavLink
      className={className}
      {...((activeBasePath || activeBaseRegex) && {
        isActive: (_match, location) =>
          activeBaseRegex
            ? isRegexpStringMatch(activeBaseRegex, location.pathname)
            : location.pathname.startsWith(activeBaseUrl),
      })}
      {...props}
      {...linkContentProps}
    />
  );
}
