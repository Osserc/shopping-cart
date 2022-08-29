import { Link } from 'react-router-dom'
import { products } from '../ProductLists'
import { OrderButton } from './OrderButton'

function Shop(props) {
    return (
        <div className='products-container'>{products.map((item) => {
            return <div key={item.id} className='card'>
                <ul>
                    <div>
                        {item.name}
                    </div>
                    <div>
                        {item.description}
                    </div>
                    <div>
                        {item.price}
                    </div>
                    <OrderButton id={item.id} handleCart={props.handleCart} />
                </ul>
            </div>
        })}</div>
    )
}

export { Shop }