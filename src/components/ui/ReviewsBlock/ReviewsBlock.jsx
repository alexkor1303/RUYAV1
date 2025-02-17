import { useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import style from './ReviewsBlock.module.scss'

import reviewOne from '../../../assets/img/feedbacks/1.png'
import reviewTwo from '../../../assets/img/feedbacks/2.png'
import reviewThree from '../../../assets/img/feedbacks/3.png'
import reviewFourth from '../../../assets/img/feedbacks/4.png'
import reviewFifth from '../../../assets/img/feedbacks/5.png'
import reviewSixth from '../../../assets/img/feedbacks/6.png'

const reviews = [
	{ id: 1, img: reviewOne, text: 'Amazing flowers! Thank you!' },
	{ id: 2, img: reviewTwo, text: 'Beautiful bouquets, fast delivery!' },
	{ id: 3, img: reviewThree, text: 'My wife loved it, great service!' },
	{ id: 4, img: reviewFourth, text: 'Perfect flowers for any occasion!' },
	{ id: 5, img: reviewFifth, text: 'Amazing flowers! Thank you!' },
	{ id: 6, img: reviewSixth, text: 'Beautiful bouquets, fast delivery!' },
]

export const ReviewsBlock = () => {
	const containerRef = useRef(null)
	const [isAnimating, setIsAnimating] = useState(false)

	const scroll = direction => {
		if (!containerRef.current || isAnimating) return
		setIsAnimating(true)
		const container = containerRef.current
		const cardWidth = container.firstChild.clientWidth + 20 // ширина + gap
		const maxScroll = -(cardWidth * (reviews.length - 3))
		container.style.transition = 'transform 0.4s ease-in-out'
		let newTranslateX =
			direction === 'left'
				? Math.min(
						parseInt(container.style.transform.replace('translateX(', '').replace('px)', '')) +
							cardWidth,
						0,
					)
				: Math.max(
						parseInt(container.style.transform.replace('translateX(', '').replace('px)', '')) -
							cardWidth,
						maxScroll,
					)

		container.style.transform = `translateX(${newTranslateX}px)`

		setTimeout(() => setIsAnimating(false), 400) // Разблокировка кнопок после анимации
	}

	return (
		<div className={style.wrapper}>
			<h2 className={style.title}>What Our Customers Say</h2>
			<div className={style.carousel}>
				<FaChevronLeft className={style.arrow} onClick={() => scroll('left')} size={40} />
				<div className={style.window}>
					<div
						className={style.reviewsContainer}
						ref={containerRef}
						style={{ transform: 'translateX(0px)' }}
					>
						{reviews.map(({ id, img, text }) => (
							<div key={id} className={style.reviewCard}>
								<img src={img} alt='Review' className={style.photo} />
								<p className={style.text}>"{text}"</p>
							</div>
						))}
					</div>
				</div>
				<FaChevronRight className={style.arrow} onClick={() => scroll('right')} size={40} />
			</div>
		</div>
	)
}
