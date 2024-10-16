import React, { useEffect, useState } from 'react';
import './Bold.css';

function Bold() {
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
    <div className="Bold">
      <div className="header">
        <div className="container">
          <div className="containerHeader">
            <div className={`scrollDiv ${scrollPosition > 100 ? 'scrolled' : ''}`}>
              <div className="focus">
                <h1>FOCUSED DESIGN</h1>
              </div>
            </div>
            <div className="podcast">
              <h1>
                Podcasting operational change management inside of workflows to <br />
                establish a framework. Taking seamless key performance indicators <br />
                offline to maximise the long tail.
              </h1>
            </div>
          </div>

          <div className="containerBody">
            <div className={`scrollDiv1 ${scrollPosition > 100 ? 'scrolled' : ''}`}>
              <div className="creative">
                <h1>CREATIVE BRANDING</h1>
              </div>
            </div>
            <div className="podcast2">
              <h1>
                Podcasting operational change management inside of workflows to <br />
                establish a framework. Taking seamless key performance indicators <br />
                offline to maximise the long tail.
              </h1>
            </div>
          </div>

          <div className="containerBottom">
            <div className={`scrollDiv ${scrollPosition > 100 ? 'scrolled' : ''}`}>
              <div className="website">
                <h1>WEBSITE DESIGN</h1>
              </div>
            </div>
            <div className="podcast3">
              <h1>
                Podcasting operational change management inside of workflows to <br />
                establish a framework. Taking seamless key performance indicators <br />
                offline to maximise the long tail.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bold;
