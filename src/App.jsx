import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';

const Mark = ({angle, type}) => {
return <div className={`marks marks--${type}`} style={{transform: `rotate(${angle}deg)`}}>
  <div style={{
    width:'5px',
    height:type === 'hour' ? '25px' : '15px',
    backgroundColor: type === 'hour' ? 'red' : 'navy' }}></div>  
  </div>
};

Mark.propTypes = {
  angle: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['hour', 'minute']).isRequired,
};

const Hand = ({type, angle}) => {
  return (
   <div className='clock-hand' style={{transform: `rotate(${angle}deg)`}}>
    <div className={`hand-body hand-body--${type}`}></div>
  </div>
  )
}

Hand.propTypes = {
  type: PropTypes.oneOf(['hour', 'minute']).isRequired,
  angle: PropTypes.number.isRequired,
};

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  },[])

  const renderFaceMark = () => {
    const marks = [];
    for (let index = 1; index <= 60; index++) {
      marks.push (<Mark angle = {index * 6} type = {index % 5 === 0 ? 'hour' : 'minute'}/>);
      
    }
    return marks;
  }

  
  return (
    <div className="clock_container">
      <div className="clock">
        <div className="clock_face">
        {renderFaceMark()}
        <Hand type={'hour'} angle={30 * time?.getHours()}/>
        <Hand type={'minute'} angle={6 * time?.getMinutes()}/>
        <Hand type={'seconds'} angle={6 * time?.getSeconds()}/>
        </div>
      </div>
    </div>
  )
}

export default App
