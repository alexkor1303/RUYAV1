import style from './CatalogOptions.module.scss'
import cn from 'classnames'
import { GiFlowerPot } from 'react-icons/gi' //box
import { GiFlowers } from 'react-icons/gi' //bouqet
import { RiFlowerFill } from 'react-icons/ri' //flower
import { Category } from './Category/Category'
import { Sort } from './Sort/Sort'
import { Search } from './Search/Search'

export const CatalogOptions = ({
	category,
	onClickCategory,
	sortType,
	onChangeSort,
	searchValue,
	setSearchValue,
}) => {
	console.log(category, sortType)
	const categories = ['All', 'Bouquets', 'Boxes', 'Flowers']

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
				<section className={cn(style.categoryIcon, { [style.visibleIcon]: category })}>
					{getIcon(category)}
				</section>
				{categories.map((categoryName, index) => {
					return (
						<Category
							key={index}
							currentIndex={index}
							activeIndex={category}
							category={categoryName}
							handleChangeCategory={() => onClickCategory(index)}
						/>
					)
				})}
			</div>
			<Search searchValue={searchValue} setSearchValue={setSearchValue} />
			<Sort value={sortType} onChangeSort={onChangeSort} />
		</div>
	)
}
