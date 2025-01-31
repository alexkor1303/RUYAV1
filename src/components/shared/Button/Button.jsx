import { useState } from 'react'
import { LuPlus, LuMinus } from 'react-icons/lu'
import cn from 'classnames'

import style from './Button.module.scss'

export const Button = () => {
	const [count, setCount] = useState(0)

	return (
		<div className={cn(style.wrapper)}>
			<div className={cn(style.hiddenPart, { [style.showHiddenPart]: count > 0 })}>
				<button className={style.button} onClick={() => setCount(count - 1)}>
					<LuMinus />
				</button>
				<span className={style.counter}>{count}</span>
			</div>
			<button
				onClick={() => setCount(count + 1)}
				className={cn(style.button, { [style.active]: count > 0 })}
			>
				<LuPlus />
			</button>
		</div>
	)
}
