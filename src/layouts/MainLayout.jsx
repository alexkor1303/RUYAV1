import { Outlet } from 'react-router'
import { Header, Footer } from '../components/shared'
import style from './MainLayout.module.scss'
export const MainLayout = () => {
	return (
		<>
			<Header />
			<div className={style.mainContent}>
				<Outlet />
			</div>
			<Footer />
		</>
	)
}
