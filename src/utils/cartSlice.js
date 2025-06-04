import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //here addItem is reducer function which modify the state in store and that function map to action
      //mutating the state here or state is modified based on action
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //for example
    //originalState={items:["pizza"]};
    clearCart: (state, action) => {
      state.items.length = 0; //bascially empty the array(suppose there is 10 items in card it's make this 0)
      //or
    //  return{items:[]}; //this new object replace inside originalState={items:[]}
     // (because RTK says either you can mutate the original state or return new state that why we are using the this return [](return new empty array))
      //but we cann't do this below(because state is local variable)
      //console.log(state)//["pizza"]
      //state=[];//this make state local variable empty state=[] not originalState=["pizza"]; so  originalState remain same it just changes local copy but
      //but if we do this state.items.length = 0; it actually modifies the actual copy
    },
  },
});

//here we have createSlice() function which gives kind of big object having actions and reducers in it
/*{
    actions:{
    },
    reducers:{
    }
}*/

//exports action
export const { addItem, removeItem, clearCart } = cartSlice.actions; //try to understand

//here we have to exports
export default cartSlice.reducer;

//------------------------------------------------practise below--------------------------------------

// import {createSlice} from "@toolkitjs/toolkit";

// const cartSlice=createSlice({
//     name:"cartSlice",
//     initialState:{
//         items:[]
//     },
//     reducer:{
//         addCart:(state,action)=>{
//             state.items.push(action.payload);
//         },
//         removeCart:(state,action)=>{
//             state.items.pop();

//         },
//         clearCart:(state,action)=>{
//             state.item.length=0;
//         }
//     }

// })

// export const {addCart,removeCart,clearCart}=cartSlice.actions;

// export default cartSlice.reducer;
