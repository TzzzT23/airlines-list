import { useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function useCreateQueryString(append: boolean = true) {
  const { push } = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (params.has(name) && append) {
        if (searchParams.getAll(name)?.[0].split(',').includes(value)) {
          if (searchParams.getAll(name)?.[0].split(',').length <= 1) {
            params.delete(name)
          } else {
            params.set(
              name,
              searchParams
                .getAll(name)?.[0]
                .split(',')
                .filter((q) => q !== value)
                .join(',')
            )
          }
        } else params.set(name, `${value},${params.getAll(name)}`)
      } else params.set(name, value)

      return params.toString()
    },
    [append, searchParams]
  )

  return { createQueryString, searchParams, pathname, push }
}
