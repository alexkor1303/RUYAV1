import style from './CatalogBlock.module.scss'
import { ProductElem } from '../../shared/ProductElem/ProductElem'
export const CatalogBlock = () => {
	return (
		<div className={style.catalogWrapper}>
			<section className={style.catalogFilters}>
				<button>All</button>
				<button>Boxes</button>
				<button>Bouquets</button>
			</section>
			<section className={style.catalogProducts}>
				<ProductElem
					image={'ProductOne.jpg'}
					title={'TULIPS BOUQUET'}
					price={500}
					subtitle={'The most spring bouquet'}
					activeWrap={true}
					activeSize='S'
				/>
			</section>
		</div>
	)
}
