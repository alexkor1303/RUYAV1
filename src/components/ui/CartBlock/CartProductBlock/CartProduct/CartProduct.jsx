import style from './CartProduct.module.scss'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
export const CartProduct = () => {
	return (
		<div className={style.product}>
			<div className={style.productInfo}>
				<section className={style.productPhoto}></section>
				<section className={style.productSettings}>
					<p className={style.productName}>Rose Bouquet</p>
					<p className={style.productPack}>Pack : BOX</p>
					<p className={style.productSize}>Size : M</p>
				</section>
			</div>
			<section className={style.productQuantity}>
				<button>
					<FaMinus />
				</button>
				<p>5</p>
				<button>
					<FaPlus />
				</button>
			</section>
			<p className={style.productPrice}>150 ₹</p>
			<button className={style.productDelete}>
				<MdDelete size={20} />
			</button>
		</div>
	)
}
