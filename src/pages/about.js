import React from "react";
import { Figure } from "react-bootstrap";
import Logo from "../images/Den.png";

function About() {
  return (
    <div className="about">
        <h2>About DealDen</h2>
      <div className="figureContain">
        {/* Logo and Description */}
        <Figure className="figure">
          <Figure.Image  className='DealDenLogo' width={250} alt="DealDen Logo" src={Logo} />
          <Figure.Caption className="figureCaption">
            <p></p>
            <p>
              DealDen is an online platform that offers exclusive deals and
              discounts on a wide range of products and services.
            </p>
            <p>
              Users can discover limited-time offers, discounts, and promotions
              from various retailers, brands, and service providers.{" "}
            </p>
            <p>
              Whether it's electronics, fashion, travel, or dining, DealDen
              provides a curated selection of deals to help users save money on
              their purchases.
            
              With its user-friendly interface and regularly updated deals,
              DealDen makes it easy for shoppers to find great bargains and make
              the most of their shopping experience.
            </p>
          </Figure.Caption>
        </Figure>
      </div>

      {/* Two Photos of Store */}
      <div className="fictional">
        <Figure className="figure">
          <Figure.Image  className='DealDenLogo' width={520} alt="DealDen Logo" src="https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Figure.Caption className="figureCaption">
            <p><i>
            We accept all modern payment methods both online and in-store.</i>
            </p>
          </Figure.Caption>
        </Figure>
        <Figure className="figure">
          <Figure.Image className='DealDenLogo'width={500} alt="DealDen Logo" src="https://images.unsplash.com/photo-1712249237259-51b52f5343e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Figure.Caption className="figureCaption">
            
            {/* Include anchor element with link to Contact page */}
            <p><i>
                Come and visit our store at the Paragon Shopping Centre, Cape Town.<br/>
                We'd love to chat to you! Alternatively, please <a href='/contact'>contact us</a> for any queries.
            </i>
            </p>
          </Figure.Caption>
        </Figure>
      </div>
    </div>
  );
}

export default About;
