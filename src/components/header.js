import { Link } from "react-router-dom"
import Auth from "./auth"
import "../styles/botonesgenerales.css"
import DarkLightTheme from "./darklight"

const Header = () => {
    return (
        <>
            <div className="header">
                <h1>
                    <Link to="/">
                        PORTAL DE NECESIDADES DIGITALES
                    </Link>
                </h1>
                <DarkLightTheme />
            </div>
            
            <nav>
                <Auth />
            </nav>

        </>
    )
}
    
export default Header