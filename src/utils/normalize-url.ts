export function normalizeUrl(url: string | null): string | null {
  if (!url) return null
  url = url.trim()

  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`
  }

  const urlObj = new URL(url)
  if (
    !urlObj.hostname.startsWith('www.') &&
    urlObj.hostname.split('.').length === 2
  ) {
    urlObj.hostname = `www.${urlObj.hostname}`
  }

  return urlObj.toString()
}
