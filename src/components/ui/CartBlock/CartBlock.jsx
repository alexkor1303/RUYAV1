import style from './CartBlock.module.scss'
import { CartProductBlock } from './CartProductBlock/CartProductBlock'
import { OrderBlock } from './OrderBlock/OrderBlock'

export const CartBlock = () => {
	return (
		<div className={style.cartWrapper}>
			<h2 className='cartTitle'>Shopping Cart</h2>
			<div className={style.cartBlocks}>
				<CartProductBlock />
				<OrderBlock />
			</div>
		</div>
	)
}
