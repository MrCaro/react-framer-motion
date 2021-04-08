import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Footer from '../components/Footer.js'

//animation states for hero banner
const carBannerWrapperVariants = {
    initial: {
        height: "100%",
        overflow: "hidden"
    },
    animate: {
        position: "relative",
        margin: "auto -5rem",
        height: "20vh"
    }
}

const carBannerImage = {
    initial: {
        width: 400,
        opacity: 1,
        left: 0,
        right: 0,
        margin: "auto"
    },
    animate: {
        width: "100vw",
        top: 0,
        bottom: 0,
        margin: "auto"
    }
}

const Info = ({cars}) => {

    let { id } = useParams();
    let result = cars.find( car => car.id === id );

    return (
        <>
            <motion.div 
                className="car-banner-wrapper"
                initial={carBannerWrapperVariants.initial}
                animate={carBannerWrapperVariants.animate}
                exit={{opacity: 0}}
            >
                <motion.img 
                    src={result.img} 
                    alt={result.model} 
                    initial={carBannerImage.initial}
                    animate={carBannerImage.animate}
                />
            </motion.div>
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                style={{margin: "3rem auto"}}
            >
                <h1>{result.model}</h1>
                <div className="car-info-wrapper">
                <p>{result.about}</p>
                </div>
                <Link to="/"> go back </Link>
            </motion.div>
            <Footer />   
        </>
    )
}

export default Info