import { TitleElem } from '../components/shared/index'
import secondBanner from '../assets/img/secondBanner.png'
import {
	MainPageBanner,
	AboutUsBlock,
	CallbackBlock,
	PromotionBlock,
	ReviewsBlock,
	CatalogBlock,
} from '../components/ui/index'
import style from './pages.module.scss'

export const Home = () => {
	return (
		<>
			<MainPageBanner />
			<TitleElem text='Flowers and Gifts for every occasion' tag='h2' />
			<PromotionBlock />
			<div className={style.block}>
				<img
					src={secondBanner}
					style={{
						display: 'block',
						margin: '0 auto',
						maxWidth: '100%',
						height: 'auto',
						marginBottom: '50px',
					}}
				/>
			</div>
			<CatalogBlock />
			<div className={style.block}>
				<AboutUsBlock />
			</div>
			<div className={style.block}>
				<CallbackBlock />
			</div>
			<div className={style.block}>
				<ReviewsBlock />
			</div>
		</>
	)
}
