export const initialState = {
    CartArr : [],
    FavArr : [],
    qty : [0,1,1,1,1,1,1]
}


export function reducerFunct(state,action){

    
    switch(action?.type){
        case "addToCart" : 
        return{
            ...state,
             qty : [0,1,1,1,1,1,1],
            CartArr : [...state.CartArr,...action.payLoad]
        }
        case "qtyAdd":
            return{
                ...state,
                qty : [...action.payLoad]
            }
        case "qtySub":
            return{
                ...state,
               qty : [...action.payLoad]
            }
         case "rmvItem":
          return{
                ...state,
                CartArr :[...action.payLoad]
             }
    }
}