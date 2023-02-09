import { Link } from "react-router-dom"
import Auth from "./auth"

const Header = () => {
    return (
        <>
            <Link to="/">
                <h1>
                 Portal de Necesidades
                </h1>
            </Link>
            <nav>
                <Auth />
            </nav>
        </>
    )
}
    
export default Header