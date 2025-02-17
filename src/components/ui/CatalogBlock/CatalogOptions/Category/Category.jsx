import cn from 'classnames'
import style from './Category.module.scss'
export const Category = ({ category, handleChangeCategory, currentIndex, activeIndex }) => {
	return (
		<button
			className={cn(style.categoryButton, {
				[style.activeCategory]: currentIndex === activeIndex,
			})}
			onClick={() => handleChangeCategory()}
		>
			{category}
		</button>
	)
}
