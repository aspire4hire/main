export function getPreviewUrl(input: File | string): string {
  if (input instanceof File) {
    return URL.createObjectURL(input)
  } else if (typeof input === 'string') {
    try {
      new URL(input)
      return input
    } catch {
      return ''
    }
  }
  throw new Error('El valor proporcionado no es un archivo ni una URL válida.')
}
