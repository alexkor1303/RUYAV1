import style from './PromotionBlock.module.scss'
import firstPoromoImage from '../../../assets/img/promo1.png'
import secondPoromoImage from '../../../assets/img/promo2.png'
import thirdPoromoImage from '../../../assets/img/promo3.png'
import { Link } from 'react-router'
export const PromotionBlock = () => {
	return (
		<div className={style.promotionWrapper}>
			<div className={style.promotionSections}>
				<Link to='/promotion/diwali'>
					<section className={style.promotionSection}>
						<p className={style.promoText}>Diwali decoration</p>
						<img src={firstPoromoImage} alt='' className={style.promotionPhoto} />
					</section>
				</Link>
				<Link to='/promotion/wedding'>
					<section className={style.promotionSection}>
						<p className={style.promoText}>Wedding decoration</p>
						<img src={secondPoromoImage} alt='' className={style.promotionPhoto} />
					</section>
				</Link>
				<Link to='/promotion/holiday'>
					<section className={style.promotionSection}>
						<p className={style.promoText}>Holiday decoration</p>
						<img src={thirdPoromoImage} alt='' className={style.promotionPhoto} />
					</section>
				</Link>
			</div>
		</div>
	)
}
