import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { NotFound } from './pages/NotFound'
import { Header, Footer } from './components/shared/index'
import './App.css'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
