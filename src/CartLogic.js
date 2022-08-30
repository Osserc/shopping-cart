import { useState, useEffect } from 'react'
import { products } from './ProductLists'

const CartLogic = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        console.log(cart)
    }, [cart])

    function handleCart(event) {
        let selectedProduct = products.find((item) => item.id === +event.target.dataset.id)
        switch (event.target.dataset.action) {
            case 'plus':
            handlePlus(selectedProduct)
            break;
            case 'minus':
            handleMinus(selectedProduct)
            break;
            case 'remove':
            removeItem(selectedProduct)
            break;
            default:
            clearCart()
        }    
    }

    function handlePlus(selectedProduct) {
        if (checkPresence(selectedProduct) === false) {
            addItem(selectedProduct)
        } else {
            incrementItem(selectedProduct)
        }
    }

    function handleMinus(selectedProduct) {
        if (checkPresence(selectedProduct) === false) return
        if (findInCart(selectedProduct).quantity === 1) {
            removeItem(selectedProduct)
        } else {
            decrementItem(selectedProduct)
        }
    }

    function addItem(selectedProduct) {
        let object = { product: selectedProduct,
            quantity: 1
        }
        setCart(cart => [...cart, object])
    }

    function incrementItem(selectedProduct) {
        let updatedCart = cart.map((item) => {
            if (item.product === selectedProduct) {
            item.quantity++
            }
            return item
        })
        setCart(updatedCart)
    }

    function removeItem(selectedProduct) {
        setCart(cart => cart.filter((item) => item.product !== selectedProduct))
    }

    function decrementItem(selectedProduct) {
    let updatedCart = cart.map((item) => {
        if (item.product === selectedProduct) {
        item.quantity--
        }
        return item
    })
        setCart(updatedCart)
    }

    function clearCart() {
        setCart([])
    }

    function checkPresence(selectedProduct) {
        if (cart.filter((item) => item.product === selectedProduct).length !== 0) return true
        return false
    }

    function findInCart(selectedProduct) {
        return cart.find((item) => item.product === selectedProduct)
    }

    function countItems() {
        let count = cart.reduce((pV, cV) => pV + cV.quantity, 0)
        if (count === 0) return null
        return count
    }

    return {
        cart,
        handleCart,
        countItems
    }
}

export { CartLogic }