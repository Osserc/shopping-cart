import { OrderButton } from './OrderButton'

function Cart(props) {
    return (
        <div className='products-container'>{props.cart.map((item) => {
            return <div key={item.product.id} className='card'>
                <div>
                    {item.product.name}
                </div>
                <div>
                    {item.product.price}$
                </div>
                <OrderButton cart={props.cart} id={item.product.id} handleCart={props.handleCart} />
            </div>
        })}</div>
    )
}

export { Cart }