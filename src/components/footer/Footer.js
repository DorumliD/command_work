import "./Footer.css";
import React, { useEffect, useState } from 'react';
import image from "./Untitled-3.jpg";
import images from "./3.png";
import imagess from "./3030.png";

function Footer() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="Footer">
            <div className="bir">
                <h3>
                    <sup className="as">“</sup>
                    “Twenty years from now you will be more disappointed by the things
                    <br />
                    that you didn't do than by the ones you did do. So throw off the
                    <br />
                    bowlines. Sail away from the safe harbor. Catch the trade winds
                    <br />
                   <sup>in your sails. Explore. Dream. Discover.”</sup> <br/>

                    <img className="imagert" src={images} alt="Quote illustration" />
                </h3>
            </div>
            <div className="ikki">
                <div className="ikki2" style={{ display: 'flex', flexDirection: "column", textAlign: "start" }}>
                    <div>
                        <h3>Wondering how your<br /> marketing services<br /> can grow your<br /> business?</h3>
                        <br />
                        <p>
                            Non nisi est sit amet facilisis magna etiam tempor orci. Fusce id velit ut <br />
                            tortor pretium viverra suspendisse potenti. Tempor commodo <br />
                            ullamcorper a lacus vestibulum sed arcu non odio. Mauris in aliquam sem <br />
                            fringilla ut morbi tincidunt augue. Cras fermentum odio eu feugiat <br />
                            pretium nibh ipsum consequat nisl. Id faucibus nisl tincidunt eget. Felis <br />
                            eget velit aliquet sagittis id. Sociis natoque penatibus et magnis.
                        </p>
                    </div>
                </div>
                
                <div className={`scrollDiv ${scrollPosition > 100 ? 'scrolled' : ''}`} style={{
                    transform: scrollPosition > 100 ? 'translateX(100px)' : 'translateX(0)',
                    transition: 'transform 0.5s ease'
                }}>
                    <div className='abdukarim'>
                        <img className="imagess" src={imagess} alt="Image" />
                        <div className="imj" style={{ display: "flex", flexDirection: 'row' }}>
                            <p>image from</p>
                            <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">freepik</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uch">
                <div className="uch2">
                    <img className="image" src={image} alt="Footer illustration" />
                    <div className="abd">
                        <p>Image from</p>
                        <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">Freepik</a>
                    </div>
                </div>
                <div className="uch3">
                    <h1>121 Rock Street, 21 Avenue,<br />New York, NY 92103-9000</h1>
                    <p>Sample text. Click to select the text
                        <br /> box. Click again or double click to
                        <br /> start editing the text.
                    </p>
                </div>
            </div>
            <footer>
                <h5>Sample text. Click to select the text box. Click again or double 
                    <br />click to start editing the text.
                </h5>
                <h6>
                    <a href="#!" rel="noopener noreferrer">Website Templates</a> created with <a href="#!" rel="noopener noreferrer">Website Builder Software.</a>
                </h6>
            </footer>
        </div>
    );
}

export default Footer;
