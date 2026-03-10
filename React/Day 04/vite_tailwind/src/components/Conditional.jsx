//  Ternary opeator rendering

const Conditional = () => {

    const studenIs = true
  return (
    <>
    {studenIs ? <hi>"I'm a student"</hi>:<h1> "I'm not a student"</h1>}
    </>
  )
}

export default Conditional

// Logical && Rendering 

export const Logical = () => {
 
const loggedIn = true
    
    return(<>
        { loggedIn && <h1>User log in</h1>}  {/* its only rendering when it is true */}
    </>)
}

// nullish coalescing

export const Nullish = () =>{
  const name = null;
  const batch = undefined;
  const fees = 10000

  return(<>
      <div>Hello I'm { name ?? "React" }</div>
      <div>Batch: { batch ?? 2023 }</div>
      <div>Fees = { fees??15000 }</div>
    </>)
}



