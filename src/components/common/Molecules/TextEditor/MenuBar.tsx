import { useCurrentEditor } from '@tiptap/react'
import { Bold, Italic, List, Redo, Undo } from 'lucide-react'
import { Tooltip } from '../../Atoms'

export const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <div className="control-group">
      <div className="flex flex-wrap gap-2">
        <Tooltip content={'Bold'}>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={`rounded p-2 ${editor.isActive('bold') ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'} h-fit`}
          >
            <Bold className="h-4 w-4" />
          </button>
        </Tooltip>
        <Tooltip content={'Italic'}>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={`rounded p-2 ${editor.isActive('italic') ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'} h-fit`}
          >
            <Italic className="h-4 w-4" />
          </button>
        </Tooltip>
        {/* <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={`rounded p-2 ${editor.isActive('paragraph') ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'} h-fit`}
          >
            <p className="w-6 text-xl font-medium">P</p>
          </button> */}
        <Tooltip content={'Bullet List'}>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`rounded p-2 ${editor.isActive('bulletList') ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'} h-fit`}
          >
            <List className="h-4 w-4" />
          </button>
        </Tooltip>
        <Tooltip content={'Undo'}>
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
            className={`h-fit rounded bg-gray-200 p-2 hover:bg-gray-300`}
          >
            <Undo className="h-4 w-4" />
          </button>
        </Tooltip>
        <Tooltip content={'Redo'}>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
            className={`h-fit rounded bg-gray-200 p-2 hover:bg-gray-300`}
          >
            <Redo className="h-4 w-4" />
          </button>
        </Tooltip>
      </div>
    </div>
  )
}
