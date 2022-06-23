import styled from 'styled-components'

const FlipCardContainer = styled.div`
  background-color: transparent;
  width: 600px;
  height: 600px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
  
`

/* This container is needed to position the front and back side */
const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
  }
`

/* Style the front side (fallback if image is missing) */
const FlipCardFront = styled.div`
  background-color: #bbb;
  color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`

/* Style the back side */
const FlipCardBack = styled.div`
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`

export default function FlipCard() {

  return(
    <FlipCardContainer>
      <FlipCardInner>
        <FlipCardFront>
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:'300px',height:'300px'}}></img>
        </FlipCardFront>
        <FlipCardBack>
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCardContainer>
  )
}