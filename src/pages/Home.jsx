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
export const Home = () => {
	return (
		<main>
			<MainPageBanner />
			<TitleElem text='Flowers and Gifts for every occasion' tag='h2' />
			<PromotionBlock />
			{/*Перенести блоки и стили в  компоненты*/}
			<div>
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
			<AboutUsBlock />
			<CallbackBlock />
			<ReviewsBlock />
		</main>
	)
}
