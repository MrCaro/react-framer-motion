import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';


const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const imgVariants = {
    exit: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto"
    }
}

const Cars = ({model, img, id}) => {
    const [z, setZ] = useState(1);

    return (
        <div className="single-car">
            <Link to={`/car/${id}`} style={{width: "fit-content"}}>
                <motion.img 
                    src={img} 
                    alt={model} 
                    style={{width: 400, zIndex: z}}
                    whileHover={{scale: 1.02}}
                    transition={transition}
                    exit={imgVariants.exit} 
                    onClick={() => setZ(2)}
                />
            </Link>
        </div>
    )
}

export default Cars