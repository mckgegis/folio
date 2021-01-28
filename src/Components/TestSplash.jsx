import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const TestSplash = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="test-splash-container">
            <div data-aos="fade-up" data-aos-duration="3000" className="test-splash-header">Ryan Leung</div>
        </div>
    )
}

export default TestSplash;