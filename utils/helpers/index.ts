import type { ReadonlyURLSearchParams } from 'next/navigation'
import type { FlightItem } from 'utils/statics/flights'

export function isEmpty<Obj>(value: Obj) {
  if (value == null) return true
  return !(Object.keys(value).length > 0)
}

export function sortedFlights(sortValue: string | null, flights: FlightItem[]) {
  return flights.toSorted((a, b) => {
    if (sortValue === 'lowPrice') return a.price - b.price
    if (sortValue === 'highPrice') return b.price - a.price
    if (sortValue === 'earliestTime')
      return new Date(a.flightTime).getTime() - new Date(b.flightTime).getTime()
    return new Date(b.flightTime).getTime() - new Date(a.flightTime).getTime()
  })
}

export function filteredFlights(
  filterValues: ReadonlyURLSearchParams,
  flights: FlightItem[]
) {
  let result: FlightItem[] = flights
  const airlineFilters = filterValues.getAll('airline')
  const priceFilter = filterValues.get('price')
  const departureTimeFilter = filterValues.get('departureTime')
  const hasSort = filterValues.has('sort')

  if (airlineFilters.length) {
    result = result.filter(
      (el) => airlineFilters?.[0]?.split(',').indexOf(el.airline) >= 0
    )
  }
  if (priceFilter) {
    result = result.filter((el) => el.price <= parseInt(priceFilter))
  }
  if (departureTimeFilter) {
    result = result.filter((el) => {
      const hour = new Date(el.flightTime)
        .toLocaleTimeString('fa-IR-u-nu-latn', {
          hour: '2-digit',
          minute: '2-digit',
        })
        .split(':')?.[0]
      const departureRange = departureTimeFilter.split('-')

      return departureRange?.[1] > hour && departureRange?.[0] < hour
    })
  }
  if (hasSort) result = sortedFlights(filterValues.get('sort'), result)

  return result
}
