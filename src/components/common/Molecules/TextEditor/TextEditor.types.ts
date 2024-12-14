/* eslint-disable no-unused-vars */
export interface TextEditorProps {
  placeholder?: string
  onChange?: (value: string) => void
  value?: string | null
  onChangeAsPlainText?: (value: string) => void
  isEditable?: boolean
  error?: string
  className?: HTMLElement['className']
}
