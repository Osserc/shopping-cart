import { products } from '../ProductLists'
import { OrderButton } from './OrderButton'

function Shop(props) {
    return (
        <div className='cards-container'>{products.map((item) => {
            return <div key={item.id} className='card card-shop flex flex-c space-around align-center p-15'>
                <h1 className='text-center m-0'>
                    {item.name}
                </h1>
                <div className='text-center'>
                    {item.description}
                </div>
                <div>
                    {item.price}$
                </div>
                <OrderButton cart={props.cart} id={item.id} handleCart={props.handleCart} />
            </div>
        })}</div>
    )
}

export { Shop }