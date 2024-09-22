import React, { useContext, useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import {orders} from "../../queries/orders"
import {useQuery} from "react-apollo"
import { Link } from 'react-router-dom';
import { DataContext } from "../../context"
function Orders() {
    const { loading, error, data } = useQuery(orders);
    const {setOrders , orderss} = useContext(DataContext)
    // const [orderss, setOrders] = useState(null)
    
 
    useEffect(() => {
        // if (loading) return 'Loading...';
        // if (error) return `Error! ${error.message}`;
        if(!loading){
           
            setOrders(data.orders)
        }

    },[loading])
  
    return (
        <div>
            {orderss ? orderss.map(order => <div className="order">
            <p>Customer : {order.info.firstName} {order.lastName}</p>      
            <h2>Customer Info</h2>
            <ul>
                <li>Email : {order.info.email} </li>
                <li>Address : {order.info.address}</li>
                <li>Phone : {order.info.phone}</li>
            </ul> 
              {order.products.map(o => 
                    <div>
                       
                <h1><Link to={`/${o.route}/${o.name}`}> {o.name}</Link></h1>
                <img className="order-prd-img" src={require(`../../assets/${o.img_path}`)} alt={o.name}/>
                <h3>Price : {o.price}</h3>
                <p>Quantity {o.quantity}</p>
                <h3>Total to pay :{order.total} din</h3>
                    </div>
                    )}
            </div>) : "Loading"}
        </div>
    )
}

export default Orders;

