import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	totalPrice: 0,
	totalItemsCount: 0,
	discount: 0,
	deliveryFee: 0,
	items: [],
}

//поиск обьекта
const findItem = (items, payload) => {
	return items.find(
		obj => obj.id === payload.id && obj.size === payload.size && obj.wrap === payload.wrap,
	)
}
//перерасчет
const recalculateTotals = state => {
	state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
	state.totalItemsCount = state.items.reduce((sum, obj) => obj.count + sum, 0)
	state.deliveryFee =
		state.totalPrice === 0 ? 0 : state.totalPrice > 500 && state.totalPrice < 3000 ? 500 : 750
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		//добавеление в корзину
		addItem(state, action) {
			const findSameItem = findItem(state.items, action.payload)
			if (findSameItem) {
				findSameItem.count++
			} else {
				state.items.push({ ...action.payload, count: 1, position: `${state.items.length}` })
			}
			recalculateTotals(state)
		},

		//удаление из корзины 1 товара
		removeItem(state, action) {
			const findSameItem = findItem(state.items, action.payload)
			if (findSameItem) {
				// Уменьшаем количество товара, если оно больше 1
				if (findSameItem.count > 1) {
					findSameItem.count--
				} else {
					// Если количество 1, то удаляем товар из корзины
					state.items = state.items.filter(obj => obj !== findSameItem)
				}
			}
			recalculateTotals(state)
		},
		//удаление из корзины группы товаров
		removeGroupItems(state, action) {
			state.items = state.items.filter(obj => obj.position !== action.payload.position)
			recalculateTotals(state)
		},
		//очистка корзины
		clearItems(state) {
			state.items = []
			recalculateTotals(state)
		},
	},
})

export const { addItem, removeItem, clearItems, removeGroupItems } = cartSlice.actions
export default cartSlice.reducer
