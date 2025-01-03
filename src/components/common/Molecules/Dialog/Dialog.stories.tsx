import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import {
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
} from './Dialog'

import { Button, Input, Label } from '../../Atoms'
import { DialogSizeEnum } from './Dialog.types'

// Metadatos del componente
const meta: Meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' }
  }
}
export default meta

// Historia controlada
export const Controlled: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="max-w-48 bg-red-300">
      <Button onClick={() => setIsOpen(true)}>Abrir Diálogo</Button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DialogHeader>
          <DialogTitle>Diálogo Controlado</DialogTitle>
          <DialogDescription>
            Este es el contenido del diálogo controlado11.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <div className="col-span-3 w-full">
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <div className="col-span-3 w-full">
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}
export const Sizes: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [size, setSize] = useState(DialogSizeEnum.MD)

  return (
    <div className="max-w-44 overflow-hidden">
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => (setIsOpen(true), setSize(DialogSizeEnum.SM))}>
          SM
        </Button>
        <Button onClick={() => (setIsOpen(true), setSize(DialogSizeEnum.MD))}>
          MD
        </Button>
        <Button onClick={() => (setIsOpen(true), setSize(DialogSizeEnum.LG))}>
          LG
        </Button>
        <Button onClick={() => (setIsOpen(true), setSize(DialogSizeEnum.XL))}>
          XL
        </Button>
        <Button onClick={() => (setIsOpen(true), setSize(DialogSizeEnum.XXL))}>
          XXL
        </Button>
        <Button
          onClick={() => (setIsOpen(true), setSize(DialogSizeEnum.FULLSCREEN))}
        >
          FULL
        </Button>
      </div>
      <Dialog size={size} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DialogHeader>
          <DialogTitle>Diálogo Controlado</DialogTitle>
          <DialogDescription>
            Este es el contenido del diálogo controlado11.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <div className="col-span-3 w-full">
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <div className="col-span-3 w-full">
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}
