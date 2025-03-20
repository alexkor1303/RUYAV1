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
import { selectProducts } from '../../../redux/slices/productSlice'
import { selectFilters } from '../../../redux/slices/filterSlice'

export const CatalogBlock = () => {
	//filter params coming from url?
	const { items, status } = useSelector(selectProducts)
	const isParamsFromUrl = useRef(false)
	const { categoryId, sortType, searchValue, page } = useSelector(selectFilters)
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
			<div className={style.catalogFilters}>
				<CatalogOptions />
			</div>
			<div className={cn(style.catalogProducts, { [style.emptyItems]: status === 'error' })}>
				{status === 'error' ? (
					<div className={style.emptyBlock}>
						<p className={style.emptyText}>Unfortunately we couldnt find anything</p>
					</div>
				) : (
					<>{status === 'loading' ? productSkeletons : products}</>
				)}
			</div>
			<Pagination />
		</div>
	)
}
