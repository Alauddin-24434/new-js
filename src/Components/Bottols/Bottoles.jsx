
import { useEffect, useState } from "react";
import Bottole from "../Bottole/Bottole";
import './Bottoles.css'




const Bottoles = () => {


    const [bottoles, setBottoles] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('bottols.json')
            .then(res => res.json())
            .then(data => setBottoles(data))
    }, [])

    const handleAddCart = bottole => {
        console.log("add to cart")
        const newCarts = [...cart, bottole]
        setCart(newCarts)
    }

    return (

        <div>
            <h3>Bottoles: {bottoles.length}</h3>
            <h4>Cart: {cart.length}</h4>


            <div className="bottols-container">
                {
                    bottoles.map(bottole => <Bottole

                        key={bottole.id}
                        bottole={bottole}
                        handleAddCart={handleAddCart}

                    ></Bottole>)
                }
            </div>

        </div>





    );
};

export default Bottoles;