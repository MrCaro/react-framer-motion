import react from 'react'
import { useLocation } from 'react-router'

const NotFound_404 = () => {
    let location = useLocation();
    console.log(location);

    return (
        <>
            <p>page not found {location.pathname}</p>
        </>
    )
}

export default NotFound_404