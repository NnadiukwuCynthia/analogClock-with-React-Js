import PropTypes from 'prop-types'

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

const Hand = ({type}) => {
  return <div className='clock-hand'>
    <div className={`hand-body hand-body--type`}></div>
  </div>
}

function App() {

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
        <Hand type={'hour'}/>
        <Hand type={'minute'}/>
        <Hand type={'seconds'}/>
        </div>
      </div>
    </div>
  )
}

export default App
