import { useState, useRef, useEffect } from 'react'
import style from './Sort.module.scss'
import cn from 'classnames'
export const Sort = ({ value, onChangeSort }) => {
	const sortTypes = [
		{ name: 'Popular 🠙', sortProperty: 'rating' },
		{ name: 'Popular 🠛', sortProperty: '-rating' },
		{ name: 'Price 🠙', sortProperty: 'price' },
		{ name: 'Price 🠛', sortProperty: '-price' },
		{ name: 'alphabet', sortProperty: 'name' },
	]
	const [open, setOpen] = useState(false)
	const ref = useRef(null)
	useEffect(() => {
		const handleClickOutside = event => {
			if (ref.current && !ref.current.contains(event.target)) {
				setOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])
	return (
		<div className={style.sortWrapper} onClick={() => setOpen(!open)} ref={ref}>
			<p className={style.sortBy}>Sort by :</p>
			<p className={cn(style.activeSort, { [style.activeSortOpen]: open })}>{value.name}</p>
			<div className={cn(style.sortBlock, { [style.openedPopUp]: open })}>
				<ul className={cn(style.sortList, { [style.openedList]: open })}>
					{sortTypes.map((obj, index) => {
						return (
							<li
								key={index}
								onClick={() => onChangeSort(obj)}
								className={cn({ [style.activeSort]: value.sortProperty === obj.sortProperty })}
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
