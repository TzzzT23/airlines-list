'use client'

import CheckBox from 'components/atoms/checkbox'
import Select from 'components/atoms/select'
import RangeSlider from 'components/atoms/range-slider'

import useCreateQueryString from 'utils/hooks/useCreateQueryString'
import { flightItems } from 'utils/statics/flights'
import { flightTimes } from 'utils/statics/times'
import styles from './filter.module.scss'

export default function Filter() {
  const { searchParams, push, pathname } = useCreateQueryString()
  const range = flightItems
    .toSorted((a, b) => a.price - b.price)
    .map(({ price }) => price)

  function clearFilters() {
    const params = new URLSearchParams(searchParams.toString())
    ;['airline', 'departureTime', 'price'].forEach((item) =>
      params.delete(item)
    )
    push(pathname + '?' + params.toString(), { scroll: false })
  }

  return (
    <div className={styles['filter']}>
      <div className={styles['filter__header']}>
        <div className={styles['filter__header--title']}>فیلترها</div>
        {(searchParams.has('airline') ||
          searchParams.has('price') ||
          searchParams.has('departureTime')) && (
          <div className={styles['filter__header--action']}>
            <button onClick={clearFilters}>حذف فیلترها</button>
          </div>
        )}
      </div>
      <div className={styles['filter--divider']} />
      <div className={styles['filter--title']}>ایرلاین</div>
      <CheckBox
        items={[...new Set(flightItems.map(({ airline }) => airline))]}
      />
      <div className={styles['filter--divider']} />
      <div className={styles['filter--title']}>
        قیمت{' '}
        {searchParams.has('price') && `(${searchParams.get('price')} تومان)`}
      </div>
      <RangeSlider range={[range.at(0)!, range.at(-1)!]} />
      <div className={styles['filter--divider']} />
      <div className={styles['filter--title']}>ساعت پرواز</div>
      <Select options={flightTimes} />
    </div>
  )
}
