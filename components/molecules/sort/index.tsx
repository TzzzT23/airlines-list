'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Chips from 'components/atoms/chips'

import { createParams } from 'utils/helpers'
import { type SortItem, sortItems } from 'utils/statics/sort'
import styles from './sort.module.scss'

export default function Sort() {
  const { push } = useRouter()
  const pathname = usePathname()
  const query = useSearchParams()
  const activeSort = query.get('sort')

  function sorting(sortValue: SortItem['value']) {
    const url = pathname + createParams({ sort: sortValue })
    if (activeSort === sortValue) return
    push(url)
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
