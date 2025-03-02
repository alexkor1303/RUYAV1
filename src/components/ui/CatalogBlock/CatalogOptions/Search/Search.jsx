import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchValue } from '../../../../../redux/slices/filterSlice'
import { CiSearch } from 'react-icons/ci'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import cn from 'classnames'
import style from './Search.module.scss'
export const Search = () => {
	const inputRef = useRef(null)
	const dispatch = useDispatch()
	const searchValue = useSelector(state => state.filterSlice.searchValue)
	const handleChangeSearchValue = value => {
		dispatch(setSearchValue(value))
	}

	const onClickClear = () => {
		handleChangeSearchValue('')
		inputRef.current.focus()
	}
	return (
		<div className={style.searchWrapper}>
			<CiSearch className={`${style.icon} ${style.searchIcon}`} size={20} />
			<input
				ref={inputRef}
				type='text'
				placeholder='Find...'
				className={style.input}
				value={searchValue}
				onChange={event => handleChangeSearchValue(event.target.value)}
			/>
			{searchValue && (
				<IoIosCloseCircleOutline
					className={cn(`${style.icon} ${style.clearIcon}`)}
					size={20}
					onClick={onClickClear}
				/>
			)}
		</div>
	)
}
