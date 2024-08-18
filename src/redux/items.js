import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  price: 0
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
        state.items = [...state.items, action.payload]

        console.log("items", state.items)

        state.items.forEach((item) => {
            console.log(item)
            state.price += item.rate.original_rate
        })
    },
    incrementQuantity: (state, action) => {
        state.items[action.payload].quantity += 1

        state.items.forEach(item=>{
            state.price += item.rate.originxal_rate *  item.quantity
        })

    },
    decrementQuantity: (state, action) => {
        state.items[action.payload].quantity -= 1

        state.items.forEach(item=>{
            state.price -= item.rate.originxal_rate *  item.quantity
        })
    },


  },
})

// Action creators are generated for each case reducer function
export const { addItem, incrementQuantity, decrementQuantity } = itemsSlice.actions

export default itemsSlice.reducer