function cleanHtml(input: string): string {
  return input?.replace(/<[^>]+>/g, '')
}

export { cleanHtml }
