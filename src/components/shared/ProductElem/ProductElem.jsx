import { Button } from '../Button/Button'
import style from './ProductElem.module.scss'
import cn from 'classnames'
export const ProductElem = ({
	image,
	title,
	price,
	subtitle,
	activeWrap = true,
	activeSize = 'S',
}) => {
	return (
		<div className={style.wrapper}>
			<img
				src={'https://i.pinimg.com/736x/17/a5/59/17a5591ef4a2c13c868d8977f6b17fd2.jpg'}
				alt='productPhoto'
				className={style.image}
			/>
			<div className={style.discription}>
				<p className={style.title}>{title}</p>
				<p className={style.subTitle}>{subtitle}</p>
			</div>
			<div className={style.options}>
				<section className={style.wrapping}>
					<span className={cn(style.wrapElem, { [style.active]: activeWrap === true })}>
						PACKAGE
					</span>
					<span className={style.wrapElem}>BOX</span>
				</section>
				<section className={style.sizes}>
					<span className={cn(style.sizeElem, { [style.active]: activeSize === 'S' })}>S</span>
					<span className={style.sizeElem}>M</span>
					<span className={style.sizeElem}>L</span>
				</section>
			</div>
			<div className={style.priceBlock}>
				<p className={style.price}>{price} rupi</p>
				<Button />
			</div>
		</div>
	)
}
