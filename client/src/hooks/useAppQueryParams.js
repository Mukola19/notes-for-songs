import React from "react"
import { useLocation, useHistory } from "react-router-dom"
import { useQueryParam } from "use-query-params"

export const useAppQueryParam = (queryName, queryType, pathname = '*') => {
  const [queryParam, setQueryParam] = useQueryParam(queryName, queryType)
  const location = useLocation()
  const { push } = useHistory()

  const parameterChange = (...arg) => {
    if (pathname !== location.pathname) {
      push(pathname)
      setQueryParam(...arg)
    } else {
      setQueryParam(...arg)
    }
  }

  return [queryParam, parameterChange]
}
