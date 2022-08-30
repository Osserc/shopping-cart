import { products } from '../ProductLists'
import { OrderButton } from './OrderButton'

function Shop(props) {
    return (
        <div className='products-container'>{products.map((item) => {
            return <div key={item.id} className='card'>
                <div>
                    {item.name}
                </div>
                <div>
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