import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDebounce } from './useDebounce'

export const useProducts = ({ categoryId, sortProperty, searchValue, page, isSearch }) => {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [emptyCatalog, setEmptyCatalog] = useState(false)
	const debouncedValue = useDebounce(searchValue)
	useEffect(() => {
		const search = debouncedValue ? `&search=${debouncedValue}` : ''
		const category = categoryId ? `&category=${categoryId}` : ''
		const sortBy = sortProperty.replace('-', '')
		const order = sortProperty.includes('-') ? 'desc' : 'asc'
		setIsLoading(true)
		if (!isSearch.current) {
			console.log('get products request')
			axios
				.get(
					`https://66e418b2d2405277ed130e46.mockapi.io/api/v1/flowers?page=${page}&limit=14${search}${category}&sortBy=${sortBy}&order=${order}`,
				)
				.then(res => {
					setIsLoading(false)
					setItems(res.data)
					setEmptyCatalog(res.data.length === 0)
				})
		}
	}, [categoryId, sortProperty, debouncedValue, page])

	useEffect(() => {
		if (isSearch.current) {
			isSearch.current = false
		}
	}, [categoryId, sortProperty, debouncedValue, page])

	return { items, isLoading, emptyCatalog }
}
