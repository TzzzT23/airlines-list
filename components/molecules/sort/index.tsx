'use client'

import Chips from 'components/atoms/chips'

import useCreateQueryString from 'utils/hooks/useCreateQueryString'
import { type SortItem, sortItems } from 'utils/statics/sort'
import styles from './sort.module.scss'

export default function Sort() {
  const { createQueryString, searchParams, pathname, push } =
    useCreateQueryString(false)
  const activeSort = searchParams.get('sort')

  function sorting(sortValue: SortItem['value']) {
    const url = pathname + '?' + createQueryString('sort', sortValue)
    if (activeSort === sortValue) return
    push(url, { scroll: false })
  }

  return (
    <div className={styles['sort']}>
      <div className={styles['sort--title']}>مرتب سازی:</div>
      <div className={styles['sort--items']}>
        {sortItems.map(({ title, value }) => (
          <Chips
            key={value}
            title={title}
            isActive={activeSort === value}
            onSelect={() => sorting(value)}
          />
        ))}
      </div>
    </div>
  )
}
