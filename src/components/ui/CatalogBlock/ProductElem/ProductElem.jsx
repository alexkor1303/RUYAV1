import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../../../../redux/slices/cartSlice'
import { ProductCounter } from './ProductCounter/ProductCounter'
import { ProductOptions } from './ProductOptions/ProductOptions'
import { ProductPortal } from '../ProductPortal/ProductPortal'
import style from './ProductElem.module.scss'

const images = import.meta.glob('/src/assets/img/products/*', { eager: true })

// eslint-disable-next-line react/prop-types
export const ProductElem = ({ id, imageUrl, name, title, wraps, sizes, price, details }) => {
	const isBouquet = Boolean(sizes)
	const dispatch = useDispatch()
	const item = { id, imageUrl, name, title, price }
	const [activeWrap, setActiveWrap] = useState(0)
	const [activeSize, setActiveSize] = useState(0)
	const [isPortalOpen, setIsPortalOpen] = useState(false)

	const handleMoveItem = cb => {
		if (!isBouquet) {
			dispatch(cb(item))
		} else {
			dispatch(
				cb({
					...item,
					wrap: `${activeWrap === 0 ? 'Package' : 'Box'}`,
					size: `${activeSize === 0 ? 'S' : activeSize === 1 ? 'M' : 'L'}`,
				}),
			)
		}
	}

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
			{!isBouquet && <div className={`${style.additionalBlock} ${style.details}`}>{details}</div>}
			{isBouquet && (
				<section className={`${style.additionalBlock} ${style.options}`}>
					<ProductOptions
						options={wraps}
						setActiveOption={i => setActiveWrap(i)}
						activeOption={activeWrap}
					/>
					<ProductOptions
						options={sizes}
						setActiveOption={i => setActiveSize(i)}
						activeOption={activeSize}
					/>
				</section>
			)}
			<section className={style.addBlock}>
				<button className={style.moreInfoButton} onClick={() => setIsPortalOpen(!isPortalOpen)}>
					more details
				</button>
				<ProductCounter
					onClickPlus={() => handleMoveItem(addItem)}
					onClickMinus={() => handleMoveItem(removeItem)}
				/>
			</section>
			{isPortalOpen && (
				//Порефакторить,хуйня какая-то
				//сделать через отправку одного id и внутреннего fetch запроса.
				<ProductPortal
					product={{
						id,
						name,
						title,
						price,
						wraps,
						sizes,
						details,
						imageUrl: images[`/src/assets/img/products/${imageUrl}`]?.default,
					}}
					isBouquet={isBouquet}
					status={isPortalOpen}
					activeWrap={activeWrap}
					setActiveWrap={i => setActiveWrap(i)}
					activeSize={activeSize}
					setActiveSize={i => setActiveSize(i)}
					onClose={() => setIsPortalOpen(false)}
				/>
			)}
		</div>
	)
}
