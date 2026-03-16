import ProductCard from "./ProductCard"

const Product = () => {

    const card = [
        {id:1,product:"laptop",price:50000},
        {id:2,product:"keyboard",price:2000},
        {id:3,product:"mouse",price:1000}
    ]
    return(<>
    <div>
        <h1 className="text-2xl font-bold">Product cards</h1>
       <ProductCard cards = {card}/>
    </div>
    </>)
}

export default Product