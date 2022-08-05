import React from "react"
import Nav from "../../asset/Nav/Nav"
import products from "../../asset/products.json"
import Book from "../../asset/Book/Book"
import "./Home.scss"
import {useContext} from "react"
import { stateContext } from "../../Context/Context"
import { useSelector , useDispatch} from "react-redux"



export default function Home(){
//   const {state} = useContext(stateContext)
//   console.log(state);
const state = useSelector((state)=>state)
    let item = products.map(product=>{
        return(
            <div key={product.id} className="book-item">
                <Book prod = {product}/>
            </div>
            
        )
    })

    return(
        <div>
            <Nav/>
            <h1>Home</h1>
            <div className="book-cont">
            {item}
            </div>
            
        </div>
    )
} 