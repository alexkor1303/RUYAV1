import { useState } from 'react'
import style from './Sort.module.scss'
import cn from 'classnames'
export const Sort = () => {
	const sort = ['popular', 'price', 'alphabet']
	const [activeSort, setActiveSort] = useState(0)
	const [open, setOpen] = useState(false)
	const sortName = sort[activeSort]
	const changeSort = index => {
		if (activeSort !== index) {
			setActiveSort(index)
			return
		}
		setOpen(!open)
	}

	return (
		<div className={style.sortWrapper} onClick={() => setOpen(!open)}>
			<p className={style.sortBy}>Sort by :</p>
			<p className={cn(style.activeSort, { [style.activeSortOpen]: open })}>{sortName}</p>
			<div className={cn(style.sortBlock, { [style.openedPopUp]: open })}>
				<ul className={cn(style.sortList, { [style.openedList]: open })}>
					{sort.map((sort, index) => {
						return (
							<li key={index} onClick={() => changeSort(index)}>
								{sort}
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
