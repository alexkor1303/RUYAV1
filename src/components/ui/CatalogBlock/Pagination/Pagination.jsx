import { useSelector, useDispatch } from 'react-redux'
import { setPageCount } from '../../../../redux/slices/filterSlice'
import style from './Pagination.module.scss'
import cn from 'classnames'
export const Pagination = () => {
	const buttons = Array.from({ length: 4 }, (_, i) => i + 1)
	const dispatch = useDispatch()
	const currentPage = useSelector(state => state.filterSlice.page)
	const handleChangePage = pageNum => {
		dispatch(setPageCount(pageNum))
	}
	return (
		<div className={style.paginationWrapper}>
			{buttons.map(num => (
				<button
					key={num}
					className={cn(style.pageButton, { [style.activePage]: currentPage === num })}
					onClick={() => handleChangePage(num)}
				>
					{num}
				</button>
			))}
		</div>
	)
}
