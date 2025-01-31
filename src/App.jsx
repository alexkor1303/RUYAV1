import './App.css'
import { Header } from './components/ui/Header/Header'
import { MainPageBanner } from './components/ui/MainPageBanner/MainPageBanner'
import { TitleElem } from './components/shared/TitleElem/TitleElem'
import { PromotionBlock } from './components/ui/PromotionBlock/PromotionBlock'
import { CatalogBlock } from './components/ui/CatalogBlock/CatalogBlock'
import { AboutUsBlock } from './components/ui/AboutUsBlock/AboutUsBlock'
import { CallbackBlock } from './components/ui/CallbackBlock/CallbackBlock'
import { ReviewsBlock } from './components/ui/ReviewsBlock/ReviewsBlock'
import { Footer } from './components/ui/Footer/Footer'
function App() {
	return (
		<>
			<Header />
			<MainPageBanner />
			<TitleElem text='Flowers and Gifts for every occasion' tag='h2' />
			<PromotionBlock />
			<CatalogBlock />
			<CallbackBlock />
			<AboutUsBlock />
			<ReviewsBlock />
			<Footer />
		</>
	)
}

export default App
