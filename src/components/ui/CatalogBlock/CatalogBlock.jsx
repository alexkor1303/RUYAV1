import style from './CatalogBlock.module.scss'
import { ProductElem } from './ProductElem/ProductElem'
import { CatalogOptions } from './CatalogOptions/CatalogOptions'
import { useEffect, useState } from 'react'
import { ProductSkeleton } from './ProductSkeleton/PorductSkeleton'
import { FaRegFaceSadCry } from 'react-icons/fa6'
import cn from 'classnames'
export const CatalogBlock = () => {
	const [searchValue, setSearchValue] = useState('')
	const [categoryId, setCategoryId] = useState(0)
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [sortType, setSortType] = useState({
		name: 'Popular',
		sortProperty: 'rating',
	})
	const [emptyCatalog, setEmptyCatalog] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const search = searchValue ? `&search=${searchValue}` : ''
	const category = categoryId ? `&category=${categoryId}` : ''
	const sortBy = sortType.sortProperty.replace('-', '')
	const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc'

	useEffect(() => {
		setIsLoading(true)
		fetch(
			`https://66e418b2d2405277ed130e46.mockapi.io/api/v1/flowers?page=${currentPage}&limit=14${search}${category}&sortBy=${sortBy}&order=${order}`,
		)
			.then(res => {
				if (!res.ok) {
					setEmptyCatalog(true)
					throw new Error('Ошибка загрузки данных с сервера')
				}
				return res.json()
			})
			.then(arr => {
				if (Array.isArray(arr)) {
					console.log(arr)
					setItems(arr)
					setEmptyCatalog(false)
				} else {
					throw new Error('Некорректный формат данных')
				}
				setIsLoading(false)
			})
			.catch(error => {
				console.error(error)
				setItems(new Array(10))
				setIsLoading(false)
			})
	}, [categoryId, sortType, searchValue])

	const products = items.map(item => <ProductElem key={item.id} {...item} />)
	const productSkeletons = [...new Array(10)].map((_, index) => <ProductSkeleton key={index} />)

	return (
		<div className={style.catalogWrapper}>
			<section className={style.catalogFilters}>
				<CatalogOptions
					category={categoryId}
					onClickCategory={i => setCategoryId(i)}
					sortType={sortType}
					onChangeSort={i => setSortType(i)}
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
			</section>
			<section className={cn(style.catalogProducts, { [style.emptyCatalog]: emptyCatalog })}>
				{isLoading ? productSkeletons : products}
				{emptyCatalog && (
					<div className={style.emptyBlock}>
						<p className={style.emptyText}>Unfortunately we couldn't find anything</p>
						<FaRegFaceSadCry size={90} className={style.emptyIcon} />
					</div>
				)}
			</section>
		</div>
	)
}
