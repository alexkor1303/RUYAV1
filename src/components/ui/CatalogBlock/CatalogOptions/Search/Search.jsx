import { CiSearch } from 'react-icons/ci'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import cn from 'classnames'
import style from './Search.module.scss'
export const Search = ({ searchValue, setSearchValue }) => {
	return (
		<div className={style.searchWrapper}>
			<CiSearch className={`${style.icon} ${style.searchIcon}`} size={20} />
			<input
				type='text'
				placeholder='Find...'
				className={style.input}
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
			/>
			{searchValue && (
				<IoIosCloseCircleOutline
					className={cn(`${style.icon} ${style.clearIcon}`)}
					size={20}
					onClick={() => setSearchValue('')}
				/>
			)}
		</div>
	)
}
