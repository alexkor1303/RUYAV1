import { useEffect } from 'react'
import { CartBlock } from '../components/ui'

export const Cart = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<CartBlock />
		</>
	)
}
