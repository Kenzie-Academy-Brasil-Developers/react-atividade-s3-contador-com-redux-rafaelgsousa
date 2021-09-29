import {addCount,subCount} from "./../../store/modules/counter/actions"
import {useDispatch} from "react-redux"
import "./style.css"

function Botoes(){

    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=>dispatch(addCount(1))}>+</button>
            <button onClick={()=>dispatch(subCount(1))}>-</button>
        </div>
    )
}

export default Botoes