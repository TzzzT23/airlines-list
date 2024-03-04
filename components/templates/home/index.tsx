import { Suspense } from 'react'
import Image from 'next/image'
import Sort from 'components/molecules/sort'
import Filter from 'components/molecules/filter'

import styles from './home.module.scss'

export default function Home() {
  return (
    <main className={styles['home']}>
      <div className={styles['home--bg']}>
        <Image src='/inter-flight.webp' alt='inter-flight-background' fill />
      </div>
      <div className={styles['home__content']}>
        <div data-selector='filter'>
          <Filter />
        </div>
        <div data-selector='list-with-sort'>
          <Suspense>
            <Sort />
          </Suspense>
          <div>Airlines</div>
        </div>
      </div>
    </main>
  )
}
