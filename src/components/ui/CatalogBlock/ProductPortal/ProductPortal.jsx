import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../../../redux/slices/cartSlice'
import { createPortal } from 'react-dom'
import style from './ProductPortal.module.scss'
import cn from 'classnames'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { ProductOptions } from '../ProductElem/ProductOptions/ProductOptions'
export const ProductPortal = ({
	status,
	product,
	activeSize,
	activeWrap,
	setActiveWrap,
	setActiveSize,
	onClose,
	isBouquet,
}) => {
	const dispatch = useDispatch()
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
	const handleAddItem = obj => {
		dispatch(addItem(obj))
		handleClosePortal()
	}
	return createPortal(
		<div className={cn(style.portalWrapper, { [style.visible]: isMounted })}>
			<div className={cn(style.portalContent, { [style.visibleContent]: isMounted })}>
				<section className={style.imageSection}>
					<img src={product.imageUrl} alt={product.name} className={style.image} />
				</section>
				<section className={style.optionSection}>
					<div className={style.productDescription}>
						<h2 className={style.name}>{product.name}</h2>
						<p className={style.title}>{product.title}</p>
						<p className={style.title}>{product.details}</p>
						<p className={style.price}>Price: {product.price} ₹</p>
						{isBouquet && (
							<section className={style.productOptions}>
								<ProductOptions
									options={product.wraps}
									setActiveOption={i => setActiveWrap(i)}
									activeOption={activeWrap}
								/>
								<ProductOptions
									options={product.sizes}
									setActiveOption={i => setActiveSize(i)}
									activeOption={activeSize}
								/>
							</section>
						)}
					</div>
					<button className={style.addButton} onClick={() => handleAddItem(product)}>
						add on cart
					</button>
				</section>
				<button onClick={handleClosePortal} className={style.closeButton}>
					<IoIosCloseCircleOutline size={40} />
				</button>
			</div>
		</div>,
		document.body,
	)
}
