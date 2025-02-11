import './App.css'
import { Header } from './components/ui/Header/Header'
import { Footer } from './components/ui/Footer/Footer'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Cart } from './pages/Cart'
import { Route, Routes } from 'react-router'

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App
