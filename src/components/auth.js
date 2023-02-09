import { Link } from 'react-router-dom'

const Auth = () => {
    return (
        <ul>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/register"><li>Register</li></Link>
        </ul>
    )
}

export default Auth