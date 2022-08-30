import { OrderButton } from './OrderButton'

function Cart(props) {
    function thanks(event) {
        alert('Thanks for giving us your money!')
        props.handleCart(event)
    }

    return (
        <div className='flex flex-c justify-center gap-15'>
            <div className='cards-container'>{props.cart.map((item) => {
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
            </div>
            {props.cart.length > 0 ?
            <button className='btn-generic w-fit m-auto' data-action='clear' onClick={thanks}>Checkout</button>
            :
            <div className='flex m-auto'>You have no products in your cart. Come on, gives us some money!</div>}
        </div> 
    )
}

export { Cart }