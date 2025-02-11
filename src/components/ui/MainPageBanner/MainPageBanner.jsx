import style from './MainPageBanner.module.scss'

export const MainPageBanner = () => {
	return (
		<div className={style.wrapper}>
			<section className={style.titleBlock}>
				<p className={style.title}>Let's bloom together</p>
				<button className={style.button}>Order Now</button>
			</section>
		</div>
	)
}
