import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { setFilters } from '../redux/slices/filterSlice'
import { sortTypes } from '../components/ui/CatalogBlock/CatalogOptions/Sort/Sort'
import qs from 'qs'
export const useSyncFiltersUrl = ({ sortProperty, categoryId, page, isSearch }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const isMounted = useRef(false)
	// 1. При первом рендере парсим параметры из URL и устанавливаем в redux
	useEffect(() => {
		//ломается если передается неправильная строка после ?
		if (window.location.search) {
			console.log('params reads and past to url')
			const params = qs.parse(window.location.search.substring(1))
			const sort = sortTypes.find(obj => obj.sortProperty === params.sortProperty)
			dispatch(
				setFilters({
					...params,
					sort,
				}),
			)
			isSearch.current = true
		}
	}, [])

	// 2. При изменении фильтров обновляем URL (кроме первого рендера)
	useEffect(() => {
		console.log('params changed on redux and past to url')
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortProperty,
				categoryId,
				page,
			})
			navigate(`?${queryString}`)
		}
		isMounted.current = true
	}, [categoryId, sortProperty, page])
}
