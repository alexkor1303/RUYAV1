import React from 'react'
import style from './Title.module.scss'

interface TitleProps {
	tag: 'h1' | 'h2' | 'h3'
	text: string
}

export const Title = ({ tag, text }: TitleProps) => {
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
