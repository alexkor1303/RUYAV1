import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import cn from 'classnames'
import logo from '../../../assets/img/U-Logo.png'
import style from './Header.module.scss'
import { BsCart4 } from 'react-icons/bs'
import { selectCart } from '../../../redux/slices/cartSlice'

export const Header = () => {
	const { pathname } = useLocation()
	const { totalItemsCount, totalPrice } = useSelector(selectCart)
	const [scrolled, setScrolled] = useState(false)
	const totalCount = totalItemsCount

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

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
				{pathname === '/' && (
					<Link to='/cart'>
						<div className={style.headerCart}>
							<div className={style.cartSumCount}>
								<p>{totalCount}</p>
								<BsCart4 />
							</div>
							<hr className={style.splitLine} />
							<div className={style.cartProductCount}>{totalPrice} ₹</div>
						</div>
					</Link>
				)}
			</div>
		</header>
	)
}
