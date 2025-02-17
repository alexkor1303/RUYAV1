import { useState } from 'react'
import { ProductCounter } from './ProductCounter/ProductCounter'
import { ProductOptions } from './ProductOptions/ProductOptions'
import { ProductPortal } from '../ProductPortal/ProductPortal'
import style from './ProductElem.module.scss'

const images = import.meta.glob('/src/assets/img/products/*', { eager: true })

export const ProductElem = ({ imageUrl, name, title, wraps, sizes, price }) => {
	const [isPortalOpen, setIsPortalOpen] = useState(false)

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
			<section className={style.options}>
				<ProductOptions options={wraps} />
				<ProductOptions options={sizes} />
			</section>
			<section className={style.addBlock}>
				<button className={style.moreInfoButton} onClick={() => setIsPortalOpen(!isPortalOpen)}>
					more details
				</button>
				<ProductCounter />
			</section>
			{isPortalOpen && (
				<ProductPortal
					product={{
						name,
						title,
						price,
						wraps,
						sizes,
						imageUrl: images[`/src/assets/img/products/${imageUrl}`]?.default,
					}}
					status={isPortalOpen}
					onClose={() => setIsPortalOpen(false)}
				/>
			)}
		</div>
	)
}
