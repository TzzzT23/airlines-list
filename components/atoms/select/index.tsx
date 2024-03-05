'use client'

import type { ChangeEvent } from 'react'
import type { SelectProps } from './interface'
import styles from './select.module.scss'
import useCreateQueryString from 'utils/hooks/useCreateQueryString'

export default function Select({ options }: SelectProps) {
  const { createQueryString, pathname, push, searchParams } =
    useCreateQueryString(false)

  function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target
    const url = pathname + '?' + createQueryString('departureTime', value)
    push(url, { scroll: false })
  }

  return (
    <div className={styles['select']}>
      <select
        key={searchParams.get('departureTime')}
        onChange={handleSelect}
        defaultValue={searchParams.get('departureTime') || ''}
      >
        <option value='' hidden>
          انتخاب زمان پرواز
        </option>
        {options.map(({ title, value }) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </select>
    </div>
  )
}
