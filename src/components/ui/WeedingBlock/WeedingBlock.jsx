import style from './WeedingBlock.module.scss'
import weedingMainPhoto from '../../../assets/img/promotions/weeding/weddingMain.png'
import floristsHall from '../../../assets/img/promotions/florists/floristHall.png'
import floristsBeach from '../../../assets/img/promotions/florists/floristOnBeach.png'
import floristsTable from '../../../assets/img/promotions/florists/floristsTable.png'
import { useState } from 'react'

const handleSubmit = event => {
	event.preventDefault()
	alert('see you soon!')
}

export const WeedingBlock = () => {
	const [name, setName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [weddingDate, setWeddingDate] = useState('')
	const [wishes, setWishes] = useState('')
	console.log(weddingDate)
	return (
		<div className={style.weedingBlockWrapper}>
			<div className={style.mainBlock}>
				<img src={weedingMainPhoto} alt='' className={`${style.image} ${style.mainBlockImage}`} />
				<div className={style.mainBlockText}>
					<p className={style.mainBlockTitle}>Floral decoration for your wedding in Goa</p>
					<p className={style.mainBlockSubTitle}>
						Personalized approach, the best flowers and the magic of the moment
					</p>
					<button onClick={() => alert('provisionally form')} className={style.mainBlockButton}>
						discuss decoration
					</button>
				</div>
			</div>
			<div className={style.aboutUsBlock}>
				<div className={style.aboutUsUpperSide}>
					<p className={style.blockTitle}>
						RUYA its a team of florists with years of experience creating magical floral
						arrangements for weddings in Goa.
						<br />
					</p>
				</div>
				<div className={style.aboutUsBottomSide}>
					<div className={style.floristCard}>
						<p className={style.floristCardTitle}>Hall decoration</p>
						<img src={floristsHall} alt='' className={`${style.image} ${style.floristImage}`} />
					</div>
					<div className={style.floristCard}>
						<p className={style.floristCardTitle}>Oceanfront decorating</p>
						<img src={floristsBeach} alt='' className={`${style.image} ${style.floristImage}`} />
					</div>
					<div className={style.floristCard}>
						<p className={style.floristCardTitle}>Decorating with accessories</p>
						<img src={floristsTable} alt='' className={`${style.image} ${style.floristImage}`} />
					</div>
				</div>
				<div className={style.aboutUsSubTitle}>
					<p className={style.blockTitle}>
						Our works fill the atmosphere with tenderness and harmony, emphasizing the importance,
						beauty and tenderness of your day.
					</p>
				</div>
			</div>
			<div className={style.servicesBlock}>
				<p className={style.blockTitle}>Our services</p>
				<div className={style.servicesList}>
					<div
						className={`${style.service} ${style.allInclusive}`}
						onClick={() => console.log('primeri')}
					>
						<p>All inclusive</p>
					</div>
					<div
						className={`${style.service} ${style.weddingArch}`}
						onClick={() => console.log('primeri')}
					>
						<p>Weedings archs</p>
					</div>
					<div
						className={`${style.service} ${style.boutonniere}`}
						onClick={() => console.log('primeri')}
					>
						<p>boutonniere</p>
					</div>
					<div
						className={`${style.service} ${style.banquetDecor}`}
						onClick={() => console.log('primeri')}
					>
						<p>banquet decor</p>
					</div>
					<div
						className={`${style.service} ${style.photoZone}`}
						onClick={() => console.log('primeri')}
					>
						<p>photo zone&rsquo;s</p>
					</div>
				</div>
			</div>
			<div className={style.howWeWorkBlock}>
				<p className={style.blockTitle}>How we work?</p>
				<div className={style.works}>
					<div className={style.workBlock}>
						<div className={`${style.iconBackground} ${style.consultation}`}>
							<p className={style.step}>STEP 1</p>
							<p className={style.stepName}>Consultation</p>
							<p className={style.stepInform}>discussion of ideas and wishes</p>
						</div>
					</div>
					<div className={style.workBlock}>
						<div className={`${style.iconBackground} ${style.concept}`}>
							<p className={style.step}>STEP 2</p>
							<p className={style.stepName}>Creating a concept</p>
							<p className={style.stepInform}>selection of color scheme and style</p>
						</div>
					</div>
					<div className={style.workBlock}>
						<div className={`${style.iconBackground} ${style.delivery}`}>
							<p className={style.step}>STEP 3</p>
							<p className={style.stepName}>Preparation and delivery</p>
							<p className={style.stepInform}>all flowers are fresh, delivered on time.</p>
						</div>
					</div>
					<div className={style.workBlock}>
						<div className={`${style.iconBackground} ${style.decoration}`}>
							<p className={style.step}>STEP 4</p>
							<p className={style.stepName}>Mounting and decoration</p>
							<p className={style.stepInform}>the florists gather everything on the grounds</p>
						</div>
					</div>
				</div>
			</div>
			<div className={style.contactBlock}>
				<p className={style.blockTitle}>Ready to discuss the design of your wedding?</p>
				<p className={style.blockSubTitle}>
					Leave a request and we will create unforgettable floral decor for you!
				</p>
				<div className={style.formBlock}>
					<form onSubmit={handleSubmit} className={style.contactForm}>
						<input
							type='text'
							value={name}
							onChange={e => setName(e.target.value)}
							placeholder='Your name'
							required
						/>
						<input
							type='tel'
							value={phoneNumber}
							onChange={e => setPhoneNumber(e.target.value)}
							placeholder='Your phone number'
							required
						/>
						<input
							type='date'
							value={weddingDate}
							onChange={e => setWeddingDate(e.target.value)}
							placeholder='choice your date'
							required
						/>
						<textarea
							name='message'
							value={wishes}
							onChange={e => setWishes(e.target.value)}
							placeholder='Your wishes'
							rows={5}
							required
						/>
						<button className={style.formButton} type='submit'>
							get counseling
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
