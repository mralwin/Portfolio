import styled from 'styled-components'

export default function StyDiv(props) {

  var height = 450
  var width = 300

  var color = props.id === props.selectedCard ? 'blue' : 'red'
  var deg = props.id === props.selectedCard ? '180' : '0'
  var deg2 = props.id === props.selectedCard ? '0' : '180'

  var front = {width: width, 
                height: height,
                webkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden", 
                gridArea: "inner-div",
                background: 'blue',
                transition: "transform 2s",
                transform: `rotateY(${deg}deg)`}

  var back = {width: width, 
                height: height,
                gridArea: "inner-div",
                webkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden", 
                background: 'red',
                transition: "transform 2s",
                transform: `rotateY(-${deg2}deg)`}

  var container = {display: "grid",
                   placeItems: "center",
                   gridTemplateAreas: "inner-div",
                   perspective: "1000px"}

  
  return(<div style={container}>
            <div style={front}>
              text
            </div>
            <div style={back}>
              more text 
            </div>
        </div>)
}