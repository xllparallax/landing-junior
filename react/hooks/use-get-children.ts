/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-restricted-imports */
import { pathOr } from 'ramda'
import { useMemo } from 'react'

export const useGetChildren = ({
  children,
  position,
}: {
  children: any
  position: number
}) => {
  const component: any = useMemo(() => pathOr({}, [position], children), [
    children,
  ])

  return {
    component,
  }
}