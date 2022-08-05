import React from "react"
import Nav from "../../asset/Nav/Nav"
import { stateContext } from "../../Context/Context"
import {useContext} from "react"
import products from "../../asset/products.json"
import { useSelector, useDispatch } from "react-redux"
import { removeItem ,qntyAdd, qntySub} from "../../Context/cartSlice"
import "./Cart.scss"



export default function Cart(){

    

    // const {state, dispatch} = useContext(stateContext)
    const state = useSelector((state)=>state)
    console.log("cart",state);
    const dispatch = useDispatch()

    function qtyAdd(id){
        let res = Object.assign([],(state.cart.qty))
        
          res[id] = res[id] + 1
        console.log(res);
        dispatch(qntyAdd(res))
    }

    function qtySub(id){
        let res = Object.assign([],(state.cart.qty))
        res[id] = res[id] - 1
        if(res[id] < 1){
             rmvItem(id)
        }
        dispatch(qntySub(res))
    }



    function rmvItem(id){
        let res = state.cart.CartArr.filter(el=> el !== id)
        dispatch(removeItem([...res]))
    }


    let item = products.map(product=>{
        return(
            state.cart.CartArr?.map(cart=>{
                if(cart == product.id){
                    
                    return(
                        <div key={product.id} className= "cart-item">
                             <img src={product.img} alt="" />
                             <h4>{product.name}</h4>
                             <p><button onClick={()=>rmvItem(product.id)}>(-)</button></p>
                             <button onClick={()=>qtyAdd(product.id)}>+</button>
                             <span>{state.cart.qty[product.id]}</span>
                             <button onClick={()=>qtySub(product.id)}>-</button>
                        </div>
                    )
                }
            })
        )
    })
    return(
        <div>
            <Nav/>
            <h1>Cart</h1>
            <div className="cart-cont">
             {item}
            </div>
            
        </div>
    )
}

