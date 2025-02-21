import style from './CartBlock.module.scss'
import { CartProductBlock } from './CartProductBlock/CartProductBlock'
import { OrderBlock } from './OrderBlock/OrderBlock'
import { FaChevronLeft } from 'react-icons/fa'

export const CartBlock = () => {
	return (
		<div className={style.cartWrapper}>
			<h2 className='cartTitle'>Shopping Cart</h2>
			<div className={style.cartBlocks}>
				<CartProductBlock />
				<OrderBlock />
			</div>
			<a href='/'>
				<button className={style.backButton}>
					<span>
						<FaChevronLeft className={style.leftArrow} />
					</span>
					<span>Go back</span>
				</button>
			</a>
		</div>
	)
}
