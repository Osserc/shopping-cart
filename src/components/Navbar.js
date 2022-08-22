import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="flex space-between align-center p-15">
            <div>Shop name</div>
            <ul className="flex">
                <Link to="">
                    <li>Home</li>
                </Link>
                <li>Shop</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </nav>
    )
}

export { Navbar }