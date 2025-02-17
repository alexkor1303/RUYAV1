import style from './Footer.module.scss'
import logo from '../../../assets/img/ruyaLogotype.png'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa'

export const Footer = () => {
	return (
		<footer className={style.wrapper}>
			<div className={style.logoSection}>
				<img src={logo} alt='' width={150} />
				<p>We all were made to bloom</p>
			</div>
			<hr />
			<div className={style.linksSection}>
				<section className={style.upperLinks}>
					<ul>
						<li>Questions and answers</li>
						<li>How to find us</li>
						<li>Delivery and payment</li>
					</ul>
				</section>
				<section className={style.lowerLinks}>
					<ul>
						<li>About us</li>
						<li>Corporate clients</li>
						<li>Feedbacks</li>
					</ul>
				</section>
			</div>
			<div className={style.socialMediaIcons}>
				<FaInstagram color='white' size={25} className={style.icon} />
				<FaWhatsapp color='white' size={25} className={style.icon} />
				<FaFacebook color='white' size={25} className={style.icon} />
			</div>
			<p className={style.copyright}>Copyright © RUYA FLOWER SHOP {new Date().getFullYear()}</p>
		</footer>
	)
}
