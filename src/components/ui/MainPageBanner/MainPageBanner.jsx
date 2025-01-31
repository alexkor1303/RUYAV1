import style from './MainPageBanner.module.scss'

export const MainPageBanner = () => {
	return (
		<div className={style.wrapper}>
			<section className={style.titleBlock}>
				<p className={style.title}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore
				</p>
				<p className={style.subTitle}>veritatis temporibus id?</p>
				<button className={style.button}>Order Now</button>
			</section>
		</div>
	)
}
