import './App.css'
import { Header } from './components/Header/Header'
import { MainPageBanner } from './components/MainPageBanner/MainPageBanner'
import { Title } from './components/Title/Title'
function App() {
	return (
		<>
			<Header />
			<MainPageBanner />
			<Title text='Flowers and Gifts for every occasion' tag='h2' />
		</>
	)
}

export default App
