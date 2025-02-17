import style from './OrderBlock.module.scss'
export const OrderBlock = () => {
	return (
		<div className={style.orderBlock}>
			<p className={style.orderTitle}>Order Summery</p>
			<div className={style.discountBlock}>
				<input type='text' name='' id='' placeholder='Discount vaucher' />
				<button>Apply</button>
			</div>
			<div className={style.orderInfo}>
				<section className={style.orderOverview}>
					<ul>
						<li>Sub total</li>
						<li>Discount</li>
						<li>Delivery fee</li>
					</ul>
				</section>
				<section className={style.orderPrices}>
					<ul className={style.orderCounts}>
						<li>5000 ₹</li>
						<li>2500 ₹</li>
						<li>500 ₹</li>
					</ul>
				</section>
			</div>
			<div className={style.totalPrice}>
				<span>Total</span>
				<span className={style.totalPriceCount}>3000 ₹</span>
			</div>
			<p className={style.additionalInfo}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati earum expedita adipisci
				eligendi quod
			</p>
			<div className={style.orderBottom}>
				<button className={style.checkoutButton}>Checkout Now</button>
			</div>
		</div>
	)
}
