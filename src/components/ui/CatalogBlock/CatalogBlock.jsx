import style from './CatalogBlock.module.scss'
import { ProductElem } from '../../shared/ProductElem/ProductElem'
import { CategoriesElem } from '../../shared/CategoriesElem/CategoriesElem'
import { useEffect, useState } from 'react'
import ProductSkeleton from '../../shared/ProductSkeleton/PorductSkeleton'
export const CatalogBlock = () => {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		fetch('https://66e418b2d2405277ed130e46.mockapi.io/api/v1/flowers')
			.then(res => res.json())
			.then(arr => {
				setItems(arr)
				setIsLoading(false)
			})
	}, [])
	return (
		<div className={style.catalogWrapper}>
			<section className={style.catalogFilters}>
				<CategoriesElem />
			</section>
			<section className={style.catalogProducts}>
				{isLoading
					? [...new Array(10)].map((_, index) => <ProductSkeleton key={index} />)
					: items.map(item => <ProductElem key={item.id} {...item} />)}
			</section>
		</div>
	)
}
