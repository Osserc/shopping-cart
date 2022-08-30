function OrderButton(props) {
    function checkPresence(id) {
        if (props.cart.find((item) => item.product.id === id) !== undefined) return true
        return false
    }

    function findQuantity(id) {
        if (checkPresence(id) === true) {
            return props.cart.find((item) => item.product.id === id).quantity.toString()
        } else {
            return 0
        }
    }

    return (
        <div className='flex justify-center align-center btn-box p-5 gap-5 w-fit'>
            <button className='btn-plus' data-action='plus' data-id={props.id} onClick={props.handleCart}>+</button>
            <div className='p-5'>{findQuantity(props.id)}</div>
            <button className='btn-minus' data-action='minus' data-id={props.id} onClick={props.handleCart}>-</button>
            <button className='btn-remove' data-action='remove' data-id={props.id} onClick={props.handleCart} disabled={!checkPresence(props.id)}>Remove</button>
        </div>
    )
}

export { OrderButton }