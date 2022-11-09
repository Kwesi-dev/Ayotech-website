import React from 'react'
import "./howWedo.css"
import Img5 from "../../../images/img5.png"
const HowWeDo = () => {
  return (
    <section className="howWeDo">
        <div className="howWeDo-wrapper">
            <div className="howWeDo-left">
                <div className="howWeDo-header">
                    <h2>How We Do</h2>
                    <div className="text-underline-container">
                        <div className="text-underline"></div>
                        <div className="text-underline-2"></div>
                    </div>
                </div>
                <div className="process">
                    <div className="process-info">
                        <h2>Idea Development</h2>
                        <p>We stand by your every idea and are always doing deep research to find effective techniques to distinguish your website from the rest. Working closely with our clients allows us to go into detail and analyse every step related to the idea generation process. Due to our wide experience, we understand your process concept and deliver valuable ideas for your business requirements.</p>
                    </div>
                </div>
                <div className="process second-process">
                    <div className="process-info">
                        <h2>Development & Design</h2>
                        <p>Our website creators value and highlight every aspect while developing and designing websites. They establish a creative approach in these steps and tailor an individual working style to satisfy every client’s business expectations. Like driven business consultants, in this stage, our team offers you professional feedback aiming to provide the best result you can ever imagine.</p>
                    </div>
                </div>
                <div className="process">
                    <div className="process-info">
                        <h2>Testing & Launching</h2>
                        <p>We get detailed insights due to testing. It makes us more aware of whether the product meets our expectations or not. After successful results, our qualified experts start launching the product that generates leads for your business.</p>
                    </div>
                </div>
            </div>
            <img src={Img5} alt="howWeDo-img" className="howWedoImg"/>
        </div>
    </section>
  )
}

export default HowWeDo