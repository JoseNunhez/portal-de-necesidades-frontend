import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <section>
            <h2>404 - Not Found!</h2>
            <Link to="/">Go back to Home Page</Link>
        </section>
    );
}
    
export default NotFoundPage;