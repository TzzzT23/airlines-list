type SortValue = 'recentTime' | 'earliestTime' | 'lowPrice' | 'highPrice'

export interface SortItem {
  title: string
  value: SortValue
}

export const sortItems: SortItem[] = [
  { title: 'ارزان ترین', value: 'lowPrice' },
  { title: 'گران ترین', value: 'highPrice' },
  { title: 'زودترین', value: 'earliestTime' },
  { title: 'دیرترین', value: 'recentTime' },
]
