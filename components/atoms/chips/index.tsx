'use client'
import cn from 'classnames'

import type { ChipsProps } from './interface'
import styles from './chips.module.scss'

export default function Chips({ title, isActive, onSelect }: ChipsProps) {
  return (
    <div
      className={cn(styles['chips'], isActive ? styles['chips--active'] : '')}
      role='button'
      tabIndex={0}
      onClick={onSelect}
    >
      {title}
    </div>
  )
}
