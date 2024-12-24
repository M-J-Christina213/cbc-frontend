import './loginPage.css';
import { Link } from 'react-router-dom';
export default function LoginPage(){
    return (
        <div className="container">
            <h1> Login Page </h1>
            <input type="text" placeholder="Enter your username"/>
            <input type="password" placeholder="Enter your password"/>
            <button className=''> Login </button>
            <Link to="/"> Home </Link>
        </div>
    )
}