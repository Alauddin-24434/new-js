import './Bottole.css'

const Bottole = ({bottole,handleAddCart}) => {
    const {name,img,price,stock}=bottole;
    return (
        <div className='bottole'>
           <h3> Bottole: {name}</h3>
           <img src={img} alt="" />
           <p>Price: {price}</p>
           <p>Stock: {stock}</p>
           <button onClick={()=>handleAddCart(bottole)}>Add Cart</button>
            
        </div>
    );
};

export default Bottole;