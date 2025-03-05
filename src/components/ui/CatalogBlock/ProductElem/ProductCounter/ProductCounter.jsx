import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

import cn from 'classnames'
import style from './ProductCounter.module.scss'

export const ProductCounter = ({ onClickPlus, onClickMinus }) => {
	const [productCount, setProductCount] = useState(0)
	const handleClickPlus = () => {
		setProductCount(productCount + 1)
		onClickPlus()
	}
	const handleClickMinus = () => {
		setProductCount(productCount - 1)
		onClickMinus()
	}
	return (
		<div className={cn(style.wrapper)}>
			<button
				onClick={handleClickPlus}
				className={cn(style.plusButton, { [style.activePlusBtn]: productCount > 0 })}
			>
				<FaPlus size={12} className={style.icon} />
			</button>
			<div className={cn(style.block, { [style.opened]: productCount > 0 })}>
				<button
					disabled={productCount === 0}
					className={cn(style.minusBtn, { [style.hiddenBtn]: productCount <= 0 })}
					onClick={handleClickMinus}
				>
					<FaMinus size={12} className={style.icon} />
				</button>
				<span className={cn(style.counter, { [style.hiddenCount]: productCount <= 0 })}>
					{productCount}
				</span>
			</div>
		</div>
	)
}
