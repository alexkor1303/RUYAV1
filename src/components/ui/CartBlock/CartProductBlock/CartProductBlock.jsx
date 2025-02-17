import { CartProduct } from './CartProduct/CartProduct'
import style from './CartProductBlock.module.scss'
export const CartProductBlock = () => {
	const headerTitles = ['Product', 'Quantity', 'Total', 'Action']
	return (
		<div className={style.cartBlock}>
			<section className={style.cartBlockHeader}>
				<ul className={style.headerTitles}>
					{headerTitles.map((title, index) => (
						<li key={index}>{title}</li>
					))}
				</ul>
			</section>
			<section className={style.products}>
				<CartProduct />
				<CartProduct />
				<CartProduct />
				<CartProduct />
				<CartProduct />
				<CartProduct />
				<CartProduct />
				<CartProduct />
				<CartProduct />
			</section>
		</div>
	)
}
