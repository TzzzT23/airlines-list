'use client'

import type { FlightItem } from 'utils/statics/flights'
import styles from './ticket.module.scss'

export default function Ticket({ airline, flightTime, price }: FlightItem) {
  return (
    <div className={styles['ticket']}>
      <div data-selector='airline'>{airline}</div>
      <div data-selector='date'>
        {new Date(flightTime).toLocaleTimeString('fa-IR', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </div>
      <div data-selector='price'>{price.toLocaleString()} تومان</div>
    </div>
  )
}
