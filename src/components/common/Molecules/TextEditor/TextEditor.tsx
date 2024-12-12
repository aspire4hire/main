'use client'

import './styles.css'

import { EditorProvider } from '@tiptap/react'
import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import { MenuBar } from './MenuBar'
import { TextEditorProps } from './TextEditor.types'
import { cn } from '@/utils'
import { ErrorField } from '../../Atoms/ErrorField'

export const TextEditor = ({
  isEditable = true,
  onChange,
  onChangeAsPlainText,
  placeholder,
  value = '',
  error,
  className
}: TextEditorProps) => {
  const extensions = [
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false
      }
    }),
    Placeholder.configure({
      emptyEditorClass: 'is-editor-empty',
      placeholder: placeholder
    })
  ]

  return (
    <EditorProvider
      slotBefore={isEditable && <MenuBar />}
      extensions={extensions}
      content={value}
      editable={isEditable}
      slotAfter={error && <ErrorField error={error} />}
      onUpdate={({ editor }) => {
        if (onChange) {
          onChange(editor.getHTML())
        }
        if (onChangeAsPlainText) {
          onChangeAsPlainText(editor.getText())
        }
      }}
      editorContainerProps={{
        className: cn(
          '!mt-4 border rounded-md p-3 focus-within:border-primary transition-colors',
          !isEditable && 'border-primary',
          error && 'border-destructive focus-within:border-destructive',
          className
        )
      }}
    ></EditorProvider>
  )
}
