import React from 'react'
import './Cube.css'
import styled from "styled-components"

const Cube = ({top_Color,box_plate_linear_gradient_first_color,box_plate_linear_gradient_Second_color,box_Shadow_Color,size}) => {

   
const halfOfSize=size/2

console.log(halfOfSize)
   
    const span0={
     

        backgroundImage: `linear-gradient(${box_plate_linear_gradient_first_color},${box_plate_linear_gradient_Second_color} )`,
        transform: `rotateY(0deg) translateZ(${halfOfSize}px)`
    }
    const span1={
     

        backgroundImage: `linear-gradient(${box_plate_linear_gradient_first_color},${box_plate_linear_gradient_Second_color} )`,
        transform: `rotateY(90deg) translateZ(${halfOfSize}px)`
    }

    const span2={
     

        backgroundImage: `linear-gradient(${box_plate_linear_gradient_first_color},${box_plate_linear_gradient_Second_color} )`,
        transform: `rotateY(180deg) translateZ(${halfOfSize}px)`
    }
    const span3={
     

        backgroundImage: `linear-gradient(${box_plate_linear_gradient_first_color},${box_plate_linear_gradient_Second_color} )`,
        transform: `rotateY(270deg) translateZ(${halfOfSize}px)`
    }
   
    const top_Box_Color =top_Color
    const shadow_color=box_Shadow_Color

    const araayofShadowColor = shadow_color.split(',')

    const changeNumber = araayofShadowColor[2]

    const anotherchange=changeNumber.split(')') 

    const changeNumberatZero = araayofShadowColor[0]

    const anothercolorchange=changeNumberatZero.split('(') 

const FirstFixedColor =anothercolorchange[1]
    

    const secondFixedColor = araayofShadowColor[1]

    console.log(secondFixedColor)
    

    const changableColorCode =anotherchange[0]

    const shadow_first_light_color=`rgb(${FirstFixedColor}, ${secondFixedColor},${changableColorCode+2})`
    const shadow_second_light_color=`rgb(${FirstFixedColor}, ${secondFixedColor},${changableColorCode+4})`
    const shadow_third_light_color=`rgb(${FirstFixedColor}, ${secondFixedColor},${changableColorCode+6})`
    const shadow_fourth_light_color=`rgb(${FirstFixedColor}, ${secondFixedColor},${changableColorCode+8})`

    const actualSize = parseInt(size)/3

   
   

    const BlurDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: ${size}px;
    height: ${size}px;
     background: ${top_Box_Color }; 
    transform: rotateX(90deg) translateZ(${halfOfSize}px);
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${size}px;
        height: ${size}px;
        background-color: ${box_plate_linear_gradient_Second_color,box_Shadow_Color };
        transform: translateZ(-${size}px);
        filter: blur(20px);
        box-shadow: 0 0 ${actualSize}px ${shadow_color}, 0 0 ${actualSize+80}px ${shadow_first_light_color},
          0 0 ${actualSize+180}px ${shadow_second_light_color}, 0 0 ${actualSize+280}px ${shadow_third_light_color},
          0 0 ${actualSize+380}px ${shadow_fourth_light_color};
      }
      `

    //   <div className ='top' style={top}></div>

  
    return (
        <>
        <div className='cube' style={{width:`${size}px`,height:`${size}px`}} >
        <BlurDiv></BlurDiv>
       
            <div>
                    <span id='span0' style={span0}></span>
                    <span id='span1' style={span1}></span>
                    <span id='span2' style={span2}></span>
                    <span id='span3' style={span3}></span>
            </div>
             <div className='before'></div>
        </div>
        
      
       </>
    )
}

export default Cube
