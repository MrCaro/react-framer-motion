import react from 'react'

import Cars from '../components/Cars.js'

const Home = ({cars}) => {
    return (
        <>
            <section>
                <div className="cars-wrapper">
                {cars.map((car, i) => (
                    <Cars 
                        key={i}
                        {...car}
                    />
                ))}
                </div>
            </section>
        </>
    )
}

export default Home