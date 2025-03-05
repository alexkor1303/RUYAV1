import { FaRegSadCry } from 'react-icons/fa'
import style from './EmptyCart.module.scss'
export const EmptyCart = () => {
	return (
		<div className={style.emptyCart}>
			<p className={style.upperParagraph}>
				Your flower cart is currently empty <FaRegSadCry size={60} />
			</p>
			<p className={style.lowerParagraph}>Add products to it.</p>
		</div>
	)
}
