'use client'

import useCreateQueryString from 'utils/hooks/useCreateQueryString'
import type { ChangeEvent } from 'react'
import type { CheckBoxProps } from './interface'
import styles from './checkbox.module.scss'

export default function CheckBox({ items }: CheckBoxProps) {
  const { createQueryString, searchParams, pathname, push } =
    useCreateQueryString()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    const url = pathname + '?' + createQueryString('airline', value)
    push(url, { scroll: false })
  }

  return (
    <div className={styles['checkbox']}>
      {items.map((item) => (
        <div className={styles['checkbox--item']} key={item}>
          <input
            key={searchParams.get('airline')}
            type='checkbox'
            id={item}
            value={item}
            name='airlines'
            defaultChecked={searchParams
              .getAll('airline')?.[0]
              ?.split(',')
              .includes(item)}
            onChange={handleChange}
          />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}
    </div>
  )
}
