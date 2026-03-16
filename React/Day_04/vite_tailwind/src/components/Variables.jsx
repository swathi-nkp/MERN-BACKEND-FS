import Conditional from "./Conditional"
import { Logical , Nullish} from "./Conditional"


const Variables = () => {

const user = "Swathi"
const age = 21

  return (<>
  <div>
      Name : {user}
    </div>
    <p> Age : {age}</p>
    <div><Conditional/>
    </div>
    <div>
      <Logical/>
      <Nullish/>
    </div>
  </> 
  )
}

export default Variables
