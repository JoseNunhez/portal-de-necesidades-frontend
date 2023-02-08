import { Link } from "react-router-dom"
import Auth from "./auth"

const Header = () => {
    return (
        <header>
            <h1>
                <Link to="/">Portal de Necesidades</Link>
            </h1>
            <nav>
                <Auth />
            </nav>
        </header>
    )
}
    
export default Header