import style from './PromotionBlock.module.scss'
export const PromotionBlock = () => {
	return (
		<div className={style.promotionWrapper}>
			<div className={style.promotionSections}>
				<section className={style.promotionSection}>PROMO_ONE</section>
				<section className={style.promotionSection}>PROMO_TWO</section>
				<section className={style.promotionSection}>PROMO_THREE</section>
			</div>
		</div>
	)
}
