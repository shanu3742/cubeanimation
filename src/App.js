
import './App.css';
import Cube from './core/Cube/CubeAnimatiom'
import { SketchPicker } from 'react-color'
import { Range } from 'react-range';
import React from 'react';




function App() {
  const [topcolor,setColor] = React.useState('yellow')
  const [selectrfirst,setSelectRFirst] = React.useState(`rgb(255,165,0)`)
  const [selectrsecond,setSelectRsecond] = React.useState('yellow')
  const [selectrthird,setSelectRThird] = React.useState('yellow')
const handleChangeComplete =(e) => {

setColor(e.hex)
console.log(e)
}
const handleChangeComplete1 =(e) => {

  
  setSelectRFirst( `rgb(${e.rgb.r},${e.rgb.g},${e.rgb.b})`)
  }
  const handleChangeComplete2 =(e) => {

  
    setSelectRsecond(e.hex)
    }
    const handleChangeComplete3 =(e) => {

  
      setSelectRThird(e.hex)
      }
console.log(topcolor)

const [state,setState] =React.useState({ values: [5] })

console.log(state.values[0])

  return (
    <div className='App'>
    <div className='color-selector'>
    <div className='firstdivCon'>
    <div className='header'><h5 > <b>select Top Plate Color</b> </h5></div>
    
    <SketchPicker color={ topcolor }  onChangeComplete={handleChangeComplete } />
    </div>
    <div className='firstdivCon'>
    <div className='header'> <h5> <b>select Gradient Color </b></h5></div>
   
    <SketchPicker color={ selectrfirst }  onChangeComplete={handleChangeComplete1 } />
    </div>
   
    <div className='firstdivCon'>
    <div className='header'> <h5><b>rest plate shadow  Color</b> </h5></div>
   
    <SketchPicker color={ selectrsecond }  onChangeComplete={handleChangeComplete2} />
    </div>
    <div className='firstdivCon'>
    <div className='header'>
    <h5><b>rest plateColor </b></h5>
    </div>
 
    <SketchPicker color={ selectrthird }  onChangeComplete={handleChangeComplete3} />
    </div>
   
    </div>

<div className='sizeSelect'>
<h1>Size selector</h1>
<Range
step={0.1}
min={0}
max={100}
values={state.values}
onChange={(values) =>setState({ values })}
renderTrack={({ props, children }) => (
  <div
    {...props}
    style={{
      ...props.style,
      height: '6px',
      width: '50%',
      backgroundColor: '#ccc'
    }}
  >
    {children}
  </div>
)}
renderThumb={({ props }) => (
  <div
    {...props}
    style={{
      ...props.style,
      height: '42px',
      width: '42px',
      backgroundColor: '#999'
    }}
  />
)}
/>
</div>
<div className='Cubecontainer'>

<Cube top_Color={topcolor} box_plate_linear_gradient_first_color={ selectrsecond }  box_plate_linear_gradient_Second_color={ selectrthird } box_Shadow_Color={selectrfirst} size={state.values[0]}/>
</div>
<div className='codeblock'>
<h5><b>Copy the code given below</b></h5>

<div className='code-cube'>
<pre>
&lt;Cube top_Color= '{topcolor}' box_plate_linear_gradient_first_color='{ selectrsecond }' box_plate_linear_gradient_Second_color='{ selectrthird }' box_Shadow_Color='{selectrfirst}' size='{state.values[0]}' /&gt;
</pre>
</div>

</div>
  </div>
    )

}

export default App;


// <Cube top_Color='#222' box_plate_linear_gradient_first_color='#151515'  box_plate_linear_gradient_Second_color='#00ec00' box_Shadow_Color='rgb(0, 255,  0.2)' size='10'/>
// <Cube top_Color='#222' box_plate_linear_gradient_first_color='#151515'  box_plate_linear_gradient_Second_color='#DC143C' box_Shadow_Color='rgb(139,0,0)' size='5'/>




