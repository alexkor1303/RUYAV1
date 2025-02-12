import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
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
	{ id: 1, img: reviewFifth, text: 'Amazing flowers! Thank you!' },
	{ id: 2, img: reviewSixth, text: 'Beautiful bouquets, fast delivery!' },
]

export const ReviewsBlock = () => {
	return (
		<div className={style.wrapper}>
			<h2 className={style.title}>What Our Customers Say</h2>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={20}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 4000 }}
				breakpoints={{
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				}}
			>
				{reviews.map(({ id, img, text }) => (
					<SwiperSlide key={id}>
						<div className={style.reviewCard}>
							<img src={img} alt='Review' className={style.photo} />
							<p className={style.text}>"{text}"</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
