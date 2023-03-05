import { Link } from "react-router-dom"
import Auth from "./auth"
import "../styles/botonesgenerales.css"
import DarkLightTheme from "./darklight"

const Header = () => {
    return (
        <>
                <h1>
            <Link to="/">
                 PORTAL DE NECESIDADES DIGITALES
            </Link>
                </h1>
            <nav>
                <Auth />
                <DarkLightTheme />
            </nav>

        </>
    )
}
    
export default Header