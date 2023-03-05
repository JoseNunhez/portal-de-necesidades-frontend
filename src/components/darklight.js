import { useEffect, useState } from "react"

const DarkLightTheme = () => {
    const [theme, setTheme] = useState('Light');
    const lightTheme = (e) => setTheme('light');
    const darkTheme = (e) => setTheme('dark')
    useEffect(() => {

        document.body.className = theme;

    }, [theme]);

return(
<div className="button-ajustes">
                <button id= "modo-noche" className="dark-mode" onClick={darkTheme}>🌙</button>
                <button id= "modo-dia" className="light-mode" onClick={lightTheme}>☀️</button>
</div>
)
}

export default DarkLightTheme;