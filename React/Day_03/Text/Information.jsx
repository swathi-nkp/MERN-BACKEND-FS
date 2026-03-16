// 1.what is class components?

// A Class Component in React is a type of component written using an ES6 JavaScript class.
//  It extends React.Component and must include a render() method that returns JSX (the UI).

// 2.How to create Class Component?

// import {component} from 'react'

// class App extends component{
// render(){
// returns(
// <> 
//  <div></div>
// </>)}
// }

// 3.what is state?
// In React, State is an object that stores data for a component and controls how the component behaves and renders.
// When the state changes, the component automatically re-renders (updates the UI).

// 4.setstate() process

// import {components} from 'react'

// class Information extends components{
//     constructor(){
//         super()
//         this.state = {count:0}
//     }
//     increase = () =>{
//        this.setState = this.state.count + 1
//     }
// render(){
//     return(
//         <>
//         <div>
//             <p>{this.state.count}</p>
//             <button onClick={this.increase}>Increase</button>
//         </div>
//         </>
//     )
// }


// }

// export default Information

// Lifecycle methods (Mount / Update / Unmount)

// Mount 
// Mounting happens when the component is created and inserted into the DOM for the first time.
// Methods in Mounting Phase

// constructor()
// Initializes state and variables.

// render()
// Returns the UI.

// componentDidMount()
// Runs after the component appears on the screen.

// DidUpdate()

// Updating happens when state or props change.
// React updates the component and re-renders the UI.

// Unmounting()

// Unmounting happens when the component is removed from the DOM.

// why we use constructor?

// In React class components, the constructor() is a special method that runs first when the component is created.
// We mainly use constructor() for two reasons.
//To Initialize State
// constructor() is used to set the initial state of the component.
//To Bind Event Methods (Old Method)
// Before arrow functions, we used constructor() to bind functions with this.

// what is constructor() in react class components

//In React class components, a constructor is a special method that runs first when the component is created.
//It is mainly used to initialize the component’s state and set up initial values.