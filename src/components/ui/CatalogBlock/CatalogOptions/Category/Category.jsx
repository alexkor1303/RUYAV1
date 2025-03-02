import { useDispatch } from 'react-redux'
import { setCategoryId } from '../../../../../redux/slices/filterSlice'
import cn from 'classnames'
import style from './Category.module.scss'
export const Category = ({ categoryName, currentIndex, activeIndex }) => {
	const dispatch = useDispatch()
	const handleChangeCategory = id => {
		dispatch(setCategoryId(id))
	}
	return (
		<button
			className={cn(style.categoryButton, {
				[style.activeCategory]: currentIndex === activeIndex,
			})}
			onClick={() => handleChangeCategory(currentIndex)}
		>
			{categoryName}
		</button>
	)
}
