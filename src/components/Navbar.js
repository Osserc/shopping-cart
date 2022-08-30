import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <nav className="flex space-between align-center gap-15 p-15 mb-15">
            <h1 className='m-0'>MoneyGrabber$</h1>
            <ul className="flex">
                <Link to="">
                    <li>Home</li>
                </Link>
                <Link to="shop">
                    <li>Shop</li>
                </Link>
                <Link to="about">
                    <li>About</li>
                </Link>
                <Link to="cart">
                    <li><span className='counter'>{props.itemsCount}</span> Cart</li>
                </Link>
            </ul>
        </nav>
    )
}

export { Navbar }