import style from './CartProduct.module.scss'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { addItem, removeItem, removeGroupItems } from '../../../../../redux/slices/cartSlice'
export const CartProduct = ({ id, count, imageUrl, name, price, size, wrap, position }) => {
	const dispatch = useDispatch()
	return (
		<div className={style.product}>
			<div className={style.productInfo}>
				<section className={style.productPhoto} style={{ background: imageUrl }}></section>
				<section className={style.productSettings}>
					<p className={style.productName}>{name}</p>
					<p className={style.productPack}>Pack : {wrap}</p>
					<p className={style.productSize}>Size : {size}</p>
				</section>
			</div>
			<section className={style.productQuantity}>
				<button onClick={() => dispatch(removeItem({ id, size, wrap }))}>
					<FaMinus />
				</button>
				<p>{count}</p>
				<button onClick={() => dispatch(addItem({ id, size, wrap }))}>
					<FaPlus />
				</button>
			</section>
			<p className={style.productPrice}>{Number(count) * Number(price)} ₹</p>
			<button
				className={style.productDelete}
				onClick={() => dispatch(removeGroupItems({ position }))}
			>
				<MdDelete size={20} />
			</button>
		</div>
	)
}
