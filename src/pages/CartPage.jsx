import React , {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap';
import CartEmpty from '../components/CartEmpty';
import CartItem from '../components/CartItem';

function CartPage(props) {
    
    const [data, setData] = useState([])
    
    useEffect(() => {
        const cart = localStorage.getItem("weebeans-cart") || [];
        if (cart.length > 0) setData(JSON.parse(cart))
    }, [setData])

    if(data.length > 0){
        function deleteItem(idx){
            let newData = data.filter((item, index) => index !== idx)
            let newDataJSON = JSON.stringify(newData)
            localStorage.setItem("weebeans-cart" , newDataJSON)
            props.setCount(props.count-1)
            setData(newData)
        }
        return(
            <Container>
               <h3 className='text-center my-5 pb-4 cst-cart-title'>Cart List</h3>
                {data.map((item, index)=>{
                    return <CartItem
                        key={index}
                        index={index}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        weight={item.weight}
                        price={item.price}
                        deleteItem={deleteItem}
                    />
                })}
            </Container>
        )
    } else return <CartEmpty/>

}

export default CartPage
