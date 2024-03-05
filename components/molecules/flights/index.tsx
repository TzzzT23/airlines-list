'use client'

import { Children, Suspense, useEffect, useState } from 'react'
import Ticket from 'components/atoms/ticket'

import useCreateQueryString from 'utils/hooks/useCreateQueryString'
import { flightItems } from 'utils/statics/flights'
import { filteredFlights, sortedFlights } from 'utils/helpers'
import styles from './flights.module.scss'

export default function Flights() {
  const { searchParams } = useCreateQueryString()
  const [flights, setFlights] = useState(flightItems)

  useEffect(() => {
    if (
      searchParams.has('sort') &&
      !(
        searchParams.has('airline') ||
        searchParams.has('price') ||
        searchParams.has('departureTime')
      )
    ) {
      const sortedValue = sortedFlights(searchParams.get('sort'), flightItems)
      setFlights(sortedValue!)
    }
    if (
      searchParams.has('sort') &&
      (searchParams.has('airline') ||
        searchParams.has('price') ||
        searchParams.has('departureTime'))
    ) {
      const filteredValue = filteredFlights(searchParams, flightItems)
      setFlights(filteredValue!)
    }
  }, [searchParams])

  return (
    <div className={styles['flights']}>
      <Suspense fallback={<div>...Loading</div>}>
        {Children.toArray(flights.map((item) => <Ticket {...item} />))}
      </Suspense>
    </div>
  )
}
