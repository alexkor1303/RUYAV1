import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useDebounce } from './useDebounce'
import { fetchProducts } from '../redux/slices/productSlice'
export const useProducts = ({ categoryId, sortProperty, searchValue, page, isParamsFromUrl }) => {
	const dispatch = useDispatch()
	const debouncedValue = useDebounce(searchValue)
	const pageParam = `page=${page}`
	const itemLimitParam = `&limit=14`
	const searchParam = debouncedValue ? `&search=${debouncedValue}` : ''
	const categoryParam = categoryId ? `&category=${categoryId}` : ''
	const sortParam = `&sortBy=${sortProperty.replace('-', '')}`
	const orderParam = `&order=${sortProperty.includes('-') ? 'desc' : 'asc'}`
	const urlString = `flowers?${pageParam}${itemLimitParam}${searchParam}${categoryParam}${sortParam}${orderParam}`
	const getProducts = urlString => {
		dispatch(fetchProducts(urlString))
	}

	useEffect(() => {
		if (!isParamsFromUrl.current) {
			getProducts(urlString)
		}
	}, [urlString])

	useEffect(() => {
		if (isParamsFromUrl.current) {
			isParamsFromUrl.current = false
		}
	}, [urlString])
}
