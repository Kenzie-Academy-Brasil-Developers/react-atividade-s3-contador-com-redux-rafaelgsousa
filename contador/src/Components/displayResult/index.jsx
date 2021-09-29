import "./style.css"

import {useSelector} from "react-redux"


function DisplayResult(){
    
    const result = useSelector(store=>store.result)

    return (
        <div>
            <p>{result}</p>
            
        </div>
    )
}

export default DisplayResult