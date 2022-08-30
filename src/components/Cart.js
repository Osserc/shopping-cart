import { OrderButton } from './OrderButton'

function Cart(props) {
    function thanks(event) {
        alert('Thanks for giving us your money!')
        props.handleCart(event)
    }

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
        })}
        {props.cart.length > 0 ?
        <button className='btn-done' data-action='clear' onClick={thanks}>Checkout</button>
        :
        <div>You have no products in your cart. Come on, gives us some money!</div>}
        </div>
    )
}

export { Cart }