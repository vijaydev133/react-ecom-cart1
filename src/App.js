import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Favourite from "./Pages/Favourite/Favourite"
import Cart from "./Pages/Cart/Cart"
import Login from "./Pages/Login/Login"
import { stateContext } from './Context/Context';
import {useReducer} from "react"
import {reducerFunct, initialState} from "./Context/reducer"


function App() {

  const [state,dispatch] = useReducer(reducerFunct,initialState)

  return (
    // <stateContext.Provider value={{state,dispatch}}>
    <div className="App">
      <Routes>
        <Route path='/' element= {<Login/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='favourite' element={<Favourite/>}></Route>
      </Routes>
    </div>
    // </stateContext.Provider>
  );
}

export default App;
