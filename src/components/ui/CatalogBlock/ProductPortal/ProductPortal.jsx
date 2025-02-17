import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import style from './ProductPortal.module.scss'
import cn from 'classnames'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { ProductOptions } from '../ProductElem/ProductOptions/ProductOptions'
export const ProductPortal = ({ status, product, onClose }) => {
	const [isMounted, setIsMounted] = useState(false)
	useEffect(() => {
		if (status) {
			setTimeout(() => setIsMounted(true), 200)
		}
	}, [status])

	const handleClosePortal = () => {
		setIsMounted(false)
		setTimeout(() => {
			onClose()
		}, 200)
	}
	return createPortal(
		<div className={cn(style.portalWrapper, { [style.visible]: isMounted })}>
			<div className={cn(style.portalContent, { [style.visibleContent]: isMounted })}>
				<section className={style.imageSection}>
					<img src={product.imageUrl} alt={product.name} className={style.image} />
				</section>
				<section className={style.optionSection}>
					<h2 className={style.name}>{product.name}</h2>
					<p className={style.title}>{product.title}</p>
					<p className={style.price}>Price: {product.price} ₹</p>
					<section className={style.productOptions}>
						<ProductOptions options={product.wraps} />
						<ProductOptions options={product.sizes} />
					</section>
					<button className={style.addButton} onClick={() => console.log('add on cart')}>
						add on cart
					</button>
					<button onClick={handleClosePortal} className={style.closeButton}>
						<IoIosCloseCircleOutline size={40} />
					</button>
				</section>
			</div>
		</div>,
		document.body,
	)
}
