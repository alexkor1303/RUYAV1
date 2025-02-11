import style from './NotFound.module.scss'
export const NotFoundBlock = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.content}>
				<p className={style.errorNumber}>404</p>
				<span>Oops...sorry page not found</span>
			</div>
		</div>
	)
}
