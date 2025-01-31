import style from './Header.module.scss'
import logo from '../../../assets/img/U-Logo.png'
import { TitleElem } from '../../shared/TitleElem/TitleElem'
export const Header = () => {
	return (
		<div className={style.headerWrapper}>
			<div className={style.headerLeftSide}>
				<img src={logo} alt='ruyaLogo' className={style.headerLogo} />
				<div className={style.headerTitle}>
					<TitleElem tag='h1' text='RUYA' />
					<span className={style.titleSlogan}>FLOWERS STUDIO</span>
				</div>
			</div>
			<nav className={style.headerNavigation}>
				<ul>
					<li>create</li>
					<li>catalog</li>
					<li>about us</li>
				</ul>
			</nav>
			<div className={style.headerRightSide}>
				<div className={style.headerCart}>
					<div className={style.cartSumCount}>5</div>
					<div className={style.cartProductCount}>500</div>
				</div>
			</div>
		</div>
	)
}
