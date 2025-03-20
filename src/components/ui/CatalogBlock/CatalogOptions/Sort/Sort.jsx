import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilters, setSortType } from '../../../../../redux/slices/filterSlice'
import style from './Sort.module.scss'
import cn from 'classnames'

export const sortTypes = [
	{ name: 'Popular 🠙', sortProperty: 'rating' },
	{ name: 'Popular 🠛', sortProperty: '-rating' },
	{ name: 'Price 🠙', sortProperty: 'price' },
	{ name: 'Price 🠛', sortProperty: '-price' },
	{ name: 'Alphabet', sortProperty: 'name' },
]
export const Sort = () => {
	const dispatch = useDispatch()
	const activeSortType = useSelector(selectFilters).sortType
	const handleChangeSortType = obj => {
		dispatch(setSortType(obj))
	}
	const ref = useRef(null)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const handleClickOutside = event => {
			if (ref.current && !ref.current.contains(event.target)) {
				setOpen(false)
			}
		}
		document.body.addEventListener('click', handleClickOutside)
		return () => document.body.removeEventListener('click', handleClickOutside)
	}, [])

	return (
		<div className={style.sortWrapper} onClick={() => setOpen(!open)} ref={ref}>
			<p className={style.sortBy}>Sort by :</p>
			<p className={cn(style.activeSort, { [style.activeSortOpen]: open })}>
				{activeSortType.name}
			</p>
			<div className={cn(style.sortBlock, { [style.openedPopUp]: open })}>
				<ul className={cn(style.sortList, { [style.openedList]: open })}>
					{sortTypes.map((obj, index) => {
						return (
							<li
								key={index}
								onClick={() => handleChangeSortType(obj)}
								className={cn({
									[style.activeSort]: activeSortType.sortProperty === obj.sortProperty,
								})}
							>
								{obj.name}
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
