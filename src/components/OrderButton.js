function OrderButton(props) {
    return (
        <div className='flex justify-center align-center btn-box p-5 w-fit'>
            <button className='btn-plus' data-action='add' data-id={props.id} onClick={props.handleCart}>+</button>
            <div className='p-5'></div>
            <button className='btn-minus' data-action='remove' data-id={props.id} onClick={props.handleCart}>-</button>
        </div>
    )
}

export { OrderButton }