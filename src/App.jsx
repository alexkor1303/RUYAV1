import { Route, Routes } from 'react-router'
import { MainLayout } from './layouts/MainLayout'
import { Home, Weeding, Cart, NotFound } from './pages'
import './App.css'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='' element={<Home />} />
					<Route path='promotion/wedding' element={<Weeding />} />
					<Route path='cart' element={<Cart />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
