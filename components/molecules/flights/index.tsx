'use client'

import { Children, useState } from 'react'
import Ticket from 'components/atoms/ticket'

import { flightItems } from 'utils/statics/flights'
import styles from './flights.module.scss'

export default function Flights() {
  const [flights] = useState(flightItems)

  return (
    <div className={styles['flights']}>
      {Children.toArray(flights.map((item) => <Ticket {...item} />))}
    </div>
  )
}
