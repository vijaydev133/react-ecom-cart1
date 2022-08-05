import React,{useContext, useEffect, useState} from "react"
import { stateContext } from "../../Context/Context"
import { useSelector , useDispatch} from "react-redux"
import { addToCart,qntyAdd } from "../../Context/cartSlice"
import {addToFav, removeItem } from "../../Context/favSlice"



export default function Book(props){

    const [bgclr,setBgclr] = useState("")

    // const {state,dispatch} = useContext(stateContext)
    const state = useSelector((state)=> state)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(state.fav.FavArr.includes(props.prod.id)){
          setBgclr("red")
          
        }else{
            // console.log("calling else");
        //   setBgclr("b")
        }
    },[])

    
    


    function addItemToCart(){
        let id = props.prod.id
        if(state.cart.CartArr.includes(id)){
           
                // let res = Object.assign([],state.qty)
                // res[id] = res[id] + 1
                // dispatch(qntyAdd(res))
                let res = Object.assign([],(state.cart.qty))
        
                res[id] = res[id] + 1
                dispatch(qntyAdd(res))
            
        }
        else{
            dispatch(addToCart([...state.cart.CartArr,id]))

        }
        
    }

    function addItemToFav(){
        let id = props.prod.id
        if(state.fav.FavArr.includes(id)){
           
            let res = state.fav.FavArr.filter(el=> el !== id)
           
            dispatch(removeItem(res))
            setBgclr("white")

        }
        else{
            setBgclr("red")
            dispatch(addToFav([...state.fav.FavArr, id]))
            
        }
       
    }

    return(
        <div >
            <img src={props.prod.img} alt="" />
            <h4>{props.prod.name}</h4>
            <span onClick={addItemToCart}>+</span>
            <span onClick={addItemToFav} style = {{backgroundColor : bgclr}}>0</span>
        </div>
    )
}