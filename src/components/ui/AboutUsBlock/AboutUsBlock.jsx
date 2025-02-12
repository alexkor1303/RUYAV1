import style from './AboutUsBlock.module.scss'
import ShopPhoto from '../../../assets/img/ShopPhoto.png'
import { GiFlowerPot } from 'react-icons/gi'
import { RiUserHeartLine } from 'react-icons/ri'
import { LuPartyPopper } from 'react-icons/lu'
import { IoRestaurantOutline } from 'react-icons/io5'
import { GrValidate } from 'react-icons/gr'
import { MdOutlineDeliveryDining } from 'react-icons/md'

export const AboutUsBlock = () => {
	const statistic = {
		'Bouquets made': {
			value: 658,
			icon: <GiFlowerPot size={40} className={style.icon} />,
		},
		'Joyful customers': { value: 1200, icon: <RiUserHeartLine size={40} className={style.icon} /> },
		'Events decorated': { value: 50, icon: <LuPartyPopper size={40} className={style.icon} /> },
		'Decorated restaurants': {
			value: 7,
			icon: <IoRestaurantOutline size={40} className={style.icon} />,
		},
		'Years on market': { value: 2, icon: <GrValidate size={40} className={style.icon} /> },
		'Delivers per day': {
			value: 15,
			icon: <MdOutlineDeliveryDining size={40} className={style.icon} />,
		},
	}
	return (
		<div className={style.wrapper}>
			<div className={style.leftSide}>
				<section className={style.textBlock}>
					<p className={style.title}>
						We are a flower studio <br />
						from GOA.
					</p>
					<p className={style.subTitle}>Flowers that make your special moments even brighter.</p>
				</section>
				<section className={style.statisticBlock}>
					{Object.entries(statistic).map(([key, { value, icon }], index) => (
						<div key={index} className={style.statItem}>
							<section className={style.iconSection}>{icon}</section>
							<section className={style.statInfo}>
								<p className={style.statValue}>{value}+</p>
								<p className={style.statLabel}>{key}</p>
							</section>
						</div>
					))}
				</section>
			</div>
			<div className={style.rightSide}>
				<img src={ShopPhoto} alt='' className={style.shopPhoto} />
			</div>
		</div>
	)
}
