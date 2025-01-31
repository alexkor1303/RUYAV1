import style from './TitleElem.module.scss'

export const TitleElem = ({ tag, text }) => {
	switch (tag) {
		case 'h1':
			return <h1 className={style.h1}>{text}</h1>
		case 'h2':
			return <h2 className={style.h2}>{text}</h2>
		case 'h3':
			return <h3 className={style.h3}>{text}</h3>
		default:
			return <></>
	}
}
