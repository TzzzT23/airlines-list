'use client'

import useCreateQueryString from 'utils/hooks/useCreateQueryString'
import useDebounce from 'utils/hooks/useDebounce'
import type { ChangeEvent } from 'react'
import type { RangeSliderProps } from './interface'
import styles from './range-slider.module.scss'

export default function RangeSlider({ range }: RangeSliderProps) {
  const { createQueryString, pathname, push, searchParams } =
    useCreateQueryString(false)
  const debouncedSlide = useDebounce((e) => {
    const event = e as ChangeEvent<HTMLInputElement>
    const { value } = event.target
    const url = pathname + '?' + createQueryString('price', value)
    push(url, { scroll: false })
  }, 300)

  const middleRange = (range[1] - range[0]) / 2 + range[0]

  return (
    <div className={styles['range']}>
      <input
        key={searchParams.get('price')}
        type='range'
        name='price'
        defaultValue={searchParams.get('price') || middleRange}
        min={range[0]}
        max={range[1]}
        step={100000}
        onChange={debouncedSlide}
      />
      <div className={styles['range__placeholders']}>
        <div>از {range[0].toLocaleString()} تومان</div>
        <div>تا {range[1].toLocaleString()} تومان</div>
      </div>
    </div>
  )
}
