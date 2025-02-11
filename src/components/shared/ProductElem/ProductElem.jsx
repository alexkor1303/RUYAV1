import { ProductCounter } from './ProductCounter/ProductCounter'
import style from './ProductElem.module.scss'
import { ProductOptions } from './ProductOptions/ProductOptions'
const images = import.meta.glob('/src/assets/img/products/*', { eager: true })

export const ProductElem = ({ imageUrl, name, title, wraps, sizes, price }) => {
	return (
		<div className={style.wrapper}>
			<img
				src={images[`/src/assets/img/products/${imageUrl}`]?.default}
				alt='productPhoto'
				className={style.image}
			/>
			<section className={style.description}>
				<p className={style.title}>{name}</p>
				<p className={style.subTitle}>{title}</p>
				<p className={style.price}>{price} ₹</p>
			</section>
			<div className={style.options}>
				<ProductOptions options={wraps} />
				<ProductOptions options={sizes} />
			</div>
			<section className={style.addBlock}>
				<button className={style.moreInfoButton}>more details</button>
				<ProductCounter />
			</section>
		</div>
	)
}
