import style from './Header.module.scss'
import logo from '../../../assets/img/U-Logo.png'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import { Link } from 'react-router'

export const Header = () => {
	const [scrolled, setScrolled] = useState(false)
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	})
	return (
		<div className={cn(style.headerWrapper, { [style.scrolledHeader]: scrolled })}>
			<Link to='/'>
				<div className={style.headerLeftSide}>
					<img src={logo} alt='logo' className={style.headerLogo} />
					<div className={style.headerTitle}>
						<h1>RUYA</h1>
						<span className={style.titleSlogan}>FLOWERS STUDIO</span>
					</div>
				</div>
			</Link>
			<nav className={style.headerNavigation}>
				<ul>
					<li>create</li>
					<li>catalog</li>
					<li>about us</li>
				</ul>
			</nav>
			<div className={style.headerRightSide}>
				<Link to='/cart'>
					<div className={style.headerCart}>
						<div className={style.cartSumCount}>5</div>
						<div className={style.cartProductCount}>500</div>
					</div>
				</Link>
			</div>
		</div>
	)
}
