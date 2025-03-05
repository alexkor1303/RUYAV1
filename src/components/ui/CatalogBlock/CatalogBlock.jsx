import { useSelector } from 'react-redux'
import { useRef } from 'react'
import { ProductElem } from './ProductElem/ProductElem'
//обратить внимание на размер функции
import style from './CatalogBlock.module.scss'
import cn from 'classnames'
import { ProductSkeleton } from './ProductSkeleton/PorductSkeleton'
import { CatalogOptions } from './CatalogOptions/CatalogOptions'
import { Pagination } from './Pagination/Pagination'
import { useProducts } from '../../../hooks/useProducts'
import { useSyncFiltersUrl } from '../../../hooks/useSyncFiltersUrl'

export const CatalogBlock = () => {
	//filter params coming from url?
	const { items, status } = useSelector(state => state.productSlice)
	const isParamsFromUrl = useRef(false)
	const { categoryId, sortType, searchValue, page } = useSelector(state => state.filterSlice)
	const sortProperty = sortType.sortProperty
	useProducts({
		categoryId,
		sortProperty,
		searchValue,
		page,
		isParamsFromUrl,
	})
	//Url search params
	useSyncFiltersUrl({ sortProperty, categoryId, page, isParamsFromUrl })
	//Products or skeleton render
	const products = items.map(item => <ProductElem key={item.id} {...item} />)
	const productSkeletons = [...new Array(14)].map((_, index) => <ProductSkeleton key={index} />)

	return (
		<div className={style.catalogWrapper}>
			<section className={style.catalogFilters}>
				<CatalogOptions />
			</section>
			<section className={cn(style.catalogProducts, { [style.emptyItems]: status === 'error' })}>
				{status === 'error' ? (
					<div className={style.emptyBlock}>
						<p className={style.emptyText}>Unfortunately we couldnt find anything</p>
					</div>
				) : (
					<>{status === 'loading' ? productSkeletons : products}</>
				)}
			</section>
			<Pagination />
		</div>
	)
}
