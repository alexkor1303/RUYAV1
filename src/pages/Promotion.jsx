import style from './pages.module.scss'
import { useEffect } from 'react'
import { WeedingBlock } from '../components/ui'

export const Promotion = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className={style.wrapper}>
			<WeedingBlock />
			<div className={style.commonBLock}>
				<h2>We in ruya do something for u!</h2>
			</div>
		</div>
	)
}
