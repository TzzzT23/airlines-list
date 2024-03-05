'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Sort from 'components/molecules/sort'
import Filter from 'components/molecules/filter'

import styles from './home.module.scss'

const Flights = dynamic(() => import('components/molecules/flights'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className={styles['home']}>
      <div className={styles['home--bg']}>
        <Image src='/inter-flight.webp' alt='inter-flight-background' fill />
      </div>
      <div className={styles['home__content']}>
        <div data-selector='filter'>
          <Suspense>
            <Filter />
          </Suspense>
        </div>
        <div data-selector='list-with-sort'>
          <Suspense>
            <Sort />
          </Suspense>
          <Flights />
        </div>
      </div>
    </main>
  )
}
