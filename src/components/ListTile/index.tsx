import React, { ReactNode } from 'react'
import { COLORS, ListTileContainer } from './styles'

interface ListTileProps {
  icon: ReactNode
  title: string
  subtitle: string
  color: keyof typeof COLORS
}

export function ListTile({ icon, subtitle, title, color }: ListTileProps) {
  return (
    <ListTileContainer color={color}>
      {icon}
      <div>
        <span>{title}</span>
        <p>{subtitle}</p>
      </div>
    </ListTileContainer>
  )
}
