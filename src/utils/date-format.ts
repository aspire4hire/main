import { format, parse, isValid, Locale } from 'date-fns'

type DateInput = Date | string | number

type FormatDateOptions = {
  inputFormat?: string // Format to interpret date strings (if necessary)
  outputFormat?: string // Desired output format
  locale?: Locale // Localization for custom formats (optional)
}

/**
 * Formats a date based on the provided parameters.
 *
 * @param date - The date to format (can be Date, string, or timestamp).
 * @param options - Options to customize the input format, output format, and localization.
 * @returns The formatted date as a string.
 * @throws Error if the date is invalid.
 */
export const formatDate = (
  date: DateInput,
  options: FormatDateOptions = {}
): string => {
  const { inputFormat, outputFormat = 'yyyy-MM-dd', locale } = options

  let parsedDate: Date

  if (typeof date === 'string' && inputFormat) {
    parsedDate = parse(date, inputFormat, new Date(), { locale })
  } else {
    parsedDate = new Date(date)
  }

  if (!isValid(parsedDate)) {
    throw new Error('Invalid date provided')
  }

  return format(parsedDate, outputFormat, { locale })
}
