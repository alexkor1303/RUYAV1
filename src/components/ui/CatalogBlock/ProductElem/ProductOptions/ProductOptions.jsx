import { useState } from 'react'
import style from './ProductOptions.module.scss'
import cn from 'classnames'
export const ProductOptions = ({ options, activeOption, setActiveOption }) => {
	return (
		<div className={style.optionsBlock}>
			{options &&
				options.map((option, index) => {
					return (
						<button
							onClick={() => {
								setActiveOption(index)
							}}
							key={index}
							className={cn(style.optionElem, { [style.activeOption]: activeOption === index })}
						>
							{option}
						</button>
					)
				})}
		</div>
	)
}
