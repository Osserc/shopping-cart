import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <nav className="flex space-between align-center p-15">
            <div>MoneyGrabbers</div>
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
                    <li>{props.itemsCount} Cart</li>
                </Link>
            </ul>
        </nav>
    )
}

export { Navbar }