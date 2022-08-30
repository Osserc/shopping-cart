import { Link } from 'react-router-dom'

function About() {
    return (
        <div className='flex flex-c justify-center align-center'>
            <p>MoneyGrabbers is the ultimate online shopping experience: we get your money, and you get to spend it from the comfort of your own home!</p>
            <p>Crazy, right? They said it could not be done, and yet here we are, taking your money like there's no tomorrow.</p>
            <p>As a company, we are driven by the desire of getting as rich as possible by taking people's money, 
                and we have employed the latest technologies to aid you in aiding us in this process.</p>
            <p>What are you waiting for? Take a look at our excellent product line up and give us all your money!</p>
            <Link to='/shop'><button className='btn-generic'>Give money</button></Link>
        </div>
    )
}

export { About }