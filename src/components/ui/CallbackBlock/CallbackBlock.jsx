import { useState } from 'react'
import style from './CallbackBlock.module.scss'
export const CallbackBlock = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})
	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		alert('Submitted data:', formData)
	}
	return (
		<div className={style.wrapper}>
			<section className={style.leftSide}>
				<form className={style.form} onSubmit={handleSubmit}>
					<input
						type='text'
						name='name'
						value={formData.name}
						onChange={handleChange}
						placeholder='Your name'
						required
					/>
					<input
						type='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						placeholder='Your email'
						required
					/>

					<textarea
						name='message'
						value={formData.message}
						onChange={handleChange}
						placeholder='Share your thoughts'
						rows={5}
						required
					/>
					<button className={style.formButton} type='submit'>
						Send Message
					</button>
				</form>
			</section>
			<section className={style.rightSide}>
				<section className={style.backgroundTitle}>
					CONTACT
					<section className={style.bottomTitle}>
						<hr className={style.line} />
						US
					</section>
					<p>
						We value every customer!
						<br />
						Email us with your thoughts, <br />
						suggestions or questions - we are always in touch.
					</p>
				</section>
			</section>
		</div>
	)
}
