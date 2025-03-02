import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	categoryId: 0,
	sortType: { name: 'Popular', sortProperty: 'rating' },
	searchValue: '',
	page: 1,
}

export const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload
		},
		setSortType(state, action) {
			state.sortType = action.payload
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload
		},
		setPageCount(state, action) {
			state.page = action.payload
		},
		setFilters(state, action) {
			state.sortType = action.payload.sort
			state.categoryId = Number(action.payload.categoryId)
			state.page = Number(action.payload.page)
		},
	},
})

export const { setCategoryId, setSortType, setSearchValue, setPageCount, setFilters } =
	filterSlice.actions //методы из reducers
export default filterSlice.reducer // сам слайс
