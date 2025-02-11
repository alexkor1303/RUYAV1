import { MainPageBanner } from '../components/ui/MainPageBanner/MainPageBanner'
import { TitleElem } from '../components/shared/TitleElem/TitleElem'
import { PromotionBlock } from '../components/ui/PromotionBlock/PromotionBlock'
import { CatalogBlock } from '../components/ui/CatalogBlock/CatalogBlock'
import { AboutUsBlock } from '../components/ui/AboutUsBlock/AboutUsBlock'
import { CallbackBlock } from '../components/ui/CallbackBlock/CallbackBlock'
import { ReviewsBlock } from '../components/ui/ReviewsBlock/ReviewsBlock'
import secondBanner from '../assets/img/secondBanner.png'
export const Home = () => {
	return (
		<>
			<MainPageBanner />
			<TitleElem text='Flowers and Gifts for every occasion' tag='h2' />
			<PromotionBlock />
			<img
				src={secondBanner}
				style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}
			/>
			<CatalogBlock />
			<CallbackBlock />
			<AboutUsBlock />
			<ReviewsBlock />
		</>
	)
}
