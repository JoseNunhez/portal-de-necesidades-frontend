import Auth from "./auth"

const Header = () => {
    return (
        <header>
            <h1>Portal de Necesidades </h1>
            <nav>
                <Auth />
            </nav>
        </header>
    )
}
    
export default Header