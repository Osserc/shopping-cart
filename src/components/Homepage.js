import { Link } from 'react-router-dom'

function Homepage() {
    return (
        <div className='flex flex-c justify-center align-center w-75 m-auto'>
            <p className='text-center'>MoneyGrabbers: the best in taking people's money. We have it all:</p>
            <div className='flex space-between align-center w-75'>
                <p>See us enjoying life with your money</p>
                <img src='' alt='enjoying money'></img>
            </div>
            <div className='flex space-between align-center w-75'>
                <img src='' alt='watching money'></img>
                <p className='text-right'>Watch how we rejoice by watching our bank accounts swell</p>
            </div>
            <div className='flex space-between align-center w-75'>
                <p>And just give us all your money the old fashioned way!</p>
                <img src='' alt='taking money'></img>
            </div>
        </div>
    )
}

export { Homepage }