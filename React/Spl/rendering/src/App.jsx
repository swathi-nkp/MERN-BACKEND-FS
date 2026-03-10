import Array from "./components/Array"
import ArrayOfObject from "./components/ArrayOfObject"
import Conditional from "./components/Conditional"
import Logics from "./components/Logics"
import NestedArray from "./components/NestedArray"
import Nullish from "./components/Nullish"
import Object from "./components/Object"
import Optional from "./components/Optional"
import TerinaryOperator from "./components/TerinaryOperator"
import Variables from "./components/Variables"

const App = () => {
  return (
    <>
   <div>
        <Variables/>
   <br/>
   
         <Object/>
   <br />
        <Array/> 
   <br />
    <ArrayOfObject/> 
   <br />
     <NestedArray/>
   <br />
    <Conditional/>
   <br />
   <TerinaryOperator/>
   <br />
   <Logics/>
   <br />
   <Optional/><br />
   <Nullish/>
</div>
    </>
  )
}

export default App
