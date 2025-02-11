import { useState } from 'react'
import { LuPlus, LuMinus } from 'react-icons/lu'
import { FaPlus, FaMinus } from 'react-icons/fa'

import cn from 'classnames'
import style from './ProductCounter.module.scss'

export const ProductCounter = () => {
	const [productCount, setProductCount] = useState(0)

	return (
		<div className={cn(style.wrapper)}>
			<button
				onClick={() => setProductCount(productCount + 1)}
				className={cn(style.plusButton, { [style.activePlusBtn]: productCount > 0 })}
			>
				<FaPlus size={12} className={style.icon} />
			</button>
			<div className={cn(style.block, { [style.opened]: productCount > 0 })}>
				<button
					disabled={productCount === 0}
					className={cn(style.minusBtn, { [style.hiddenBtn]: productCount <= 0 })}
					onClick={() => setProductCount(productCount - 1)}
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
