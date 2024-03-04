import type { SortItem } from 'utils/statics/sort'

export interface ChipsProps extends Pick<SortItem, 'title'> {
  isActive: boolean
  onSelect: () => void
}
