/**
 * Creates a URL object with a url and label.
 * Returns empty strings if no URL is provided.
 */
export function createUrl(url?: string, label?: string): { url: string; label: string } {
  if (!url) return { url: "", label: "" };
  return { url, label: label || url };
}

/**
 * Ensures a URL string has an absolute protocol prefix (http:// or https://).
 *
 * When Puppeteer renders the resume for PDF export, it navigates to an internal
 * Docker URL (e.g. http://reactive-resume:3000). Any <a href> that lacks a
 * protocol is resolved as a relative path against that base, producing broken
 * links like "http://reactive-resume:3000/github.com/user".
 *
 * This function prepends "https://" to any URL that is non-empty but missing a
 * protocol, so all anchor hrefs are always absolute.
 */
export function ensureAbsoluteUrl(url: string): string {
  if (!url) return url;
  if (/^https?:\/\//i.test(url)) return url;
  return `https://${url}`;
}
