import { useSelector } from 'react-redux'
import { useRef } from 'react'
import { ProductElem } from './ProductElem/ProductElem'
//обратить внимание на размер функции
import style from './CatalogBlock.module.scss'
import cn from 'classnames'
import { ProductSkeleton } from './ProductSkeleton/PorductSkeleton'
import { CatalogOptions } from './CatalogOptions/CatalogOptions'
import { FaRegFaceSadCry } from 'react-icons/fa6'
import { Pagination } from './Pagination/Pagination'
import { useProducts } from '../../../hooks/useProducts'
import { useSyncFiltersUrl } from '../../../hooks/useSyncFiltersUrl'

export const CatalogBlock = () => {
	//filter params coming from url?
	const isSearch = useRef(false)
	//Filters,sorts,searchInput properties
	const { categoryId, sortType, searchValue, page } = useSelector(state => state.filterSlice)
	const sortProperty = sortType.sortProperty
	//GetProducts from backend
	const { items, isLoading, emptyCatalog } = useProducts({
		categoryId,
		sortProperty,
		searchValue,
		page,
		isSearch,
	})
	//Url search params
	useSyncFiltersUrl({ sortProperty, categoryId, page, isSearch })
	//Products or skeleton render
	const products = items.map(item => <ProductElem key={item.id} {...item} />)
	const productSkeletons = [...new Array(14)].map((_, index) => <ProductSkeleton key={index} />)

	return (
		<div className={style.catalogWrapper}>
			<section className={style.catalogFilters}>
				<CatalogOptions />
			</section>
			<section className={cn(style.catalogProducts, { [style.emptyCatalog]: emptyCatalog })}>
				{isLoading ? productSkeletons : products}
				{emptyCatalog && (
					<div className={style.emptyBlock}>
						<p className={style.emptyText}>Unfortunately we couldnt find anything</p>
						<FaRegFaceSadCry size={90} className={style.emptyIcon} />
					</div>
				)}
			</section>
			<Pagination />
		</div>
	)
}
