import { CartProduct } from './CartProduct/CartProduct'
import { useSelector, useDispatch } from 'react-redux'
import { clearItems } from '../../../../redux/slices/cartSlice'
import { EmptyCart } from './emptyCart/emptyCart'
import style from './CartProductBlock.module.scss'

export const CartProductBlock = () => {
	const products = useSelector(state => state.cartSlice.items)
	const dispatch = useDispatch()
	const headerTitles = ['Product', 'Quantity', 'Total', 'Action']
	const handleClearCart = () => {
		if (window.confirm('Do you really want to empty the entire basket?')) {
			dispatch(clearItems())
		}
	}
	if (products.length === 0) {
		return (
			<div className={style.cartBlock}>
				<EmptyCart />
			</div>
		)
	}

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
				{products.map(product => (
					<CartProduct key={product.id} {...product} />
				))}
				{products.length > 0 && (
					<button onClick={handleClearCart} className={style.clearCart}>
						Clear cart
					</button>
				)}
			</section>
		</div>
	)
}
