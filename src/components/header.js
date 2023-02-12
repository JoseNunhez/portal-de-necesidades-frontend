import { Link } from "react-router-dom"
import Auth from "./auth"

const Header = () => {
    return (
        <>
            <Link to="/">
                <h1>
                 PORTAL DE NECESIDADES DIGITALES
                </h1>
            </Link>
            <nav>
                <Auth />
            </nav>
        </>
    )
}
    
export default Header