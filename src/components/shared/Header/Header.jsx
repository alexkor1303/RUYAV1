import style from './Header.module.scss'
import logo from '../../../assets/img/U-Logo.png'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import { Link } from 'react-router'
import { BsCart4 } from 'react-icons/bs'

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
		<header className={cn(style.wrapper, { [style.scrolledHeader]: scrolled })}>
			<Link to='/'>
				<div className={style.leftSide}>
					<img src={logo} alt='logo' className={style.logo} />
					<div className={style.title}>
						<h1>RUYA</h1>
						<span className={style.subTitle}>FLOWERS STUDIO</span>
					</div>
				</div>
			</Link>
			<nav className={style.navigation}>
				<ul>
					<li>create</li>
					<li>catalog</li>
					<li>about us</li>
				</ul>
			</nav>
			<div className={style.headerRightSide}>
				<Link to='/cart'>
					<div className={style.headerCart}>
						<div className={style.cartSumCount}>
							<p>5</p>
							<BsCart4 />
						</div>
						<hr className={style.splitLine} />
						<div className={style.cartProductCount}>5000 ₹</div>
					</div>
				</Link>
			</div>
		</header>
	)
}
