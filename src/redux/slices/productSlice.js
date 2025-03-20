import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
	items: [],
	status: 'loading',
}

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async (urlString, thunkApi) => {
		const res = await fetch(`https://66e418b2d2405277ed130e46.mockapi.io/api/v1/${urlString}`)
		const products = await res.json()
		//мокапи костыль
		if (products === 'Not found') {
			console.log('products not found')
			return thunkApi.rejectWithValue([])
		}
		return thunkApi.fulfillWithValue(products)
	},
)

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchProducts.pending, state => {
			state.status = 'loading'
		})
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.items = action.payload
			state.status = 'success'
		})
		builder.addCase(fetchProducts.rejected, state => {
			state.items = []
			state.status = 'error'
		})
	},
})

export const selectProducts = state => state.productSlice
export const { setItems } = productSlice.actions
export default productSlice.reducer
