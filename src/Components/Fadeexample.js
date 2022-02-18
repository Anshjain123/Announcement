import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeExample extends React.Component {
  render() {
    return (
      <div>
        <Fade left cascade>
          <div>
            <h2>React Reveal</h2>
            <h2>React Reveal</h2>
            <h2>React Reveal</h2>
          </div>
        </Fade>
      </div>
    );
  }
}

export default FadeExample;