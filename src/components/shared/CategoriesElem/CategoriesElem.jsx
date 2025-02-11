import { useState } from 'react'
import style from './Categories.module.scss'
import cn from 'classnames'
import { GiFlowerPot } from 'react-icons/gi' //box
import { GiFlowers } from 'react-icons/gi' //bouqet
import { RiFlowerFill } from 'react-icons/ri' //flower
import { Category } from './Category/Category'
import { Sort } from './Sort/Sort'

export const CategoriesElem = () => {
	const [activeCategory, setActiveCategory] = useState(0)
	const categories = ['All', 'Boxes', 'Bouquets', 'Flowers']

	const getIcon = index => {
		switch (index) {
			case 1:
				return <GiFlowerPot size={22} />
			case 2:
				return <GiFlowers size={22} />
			case 3:
				return <RiFlowerFill size={22} />
			default:
				return null
		}
	}
	return (
		<div className={style.categoriesWrapper}>
			<div className={style.categories}>
				<section className={cn(style.categoryIcon, { [style.visibleIcon]: activeCategory })}>
					{getIcon(activeCategory)}
				</section>
				{categories.map((category, index) => {
					return (
						<Category
							key={index}
							currentIndex={index}
							activeIndex={activeCategory}
							category={category}
							handleChangeCategory={() => setActiveCategory(index)}
						/>
					)
				})}
			</div>
			<Sort />
		</div>
	)
}
