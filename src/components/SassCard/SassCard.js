import "./SassCard.scss"
import logo from './logo.svg';

export default function SassTest({id, selectedCard}) {

  return(
        <div className='container'>
          <div className='front'>
            <div className='image'></div>
            <div className='inner'></div>
          </div>
          <div className='back'>
            <div className='inner'></div>
          </div>




          <div className={`${id === selectedCard ? "face--image--flipped": "face--image"}`}></div>
          <div className={`${id === selectedCard ? "face--back--flipped": "face--back"}`}>
            back 
          </div>

          <div className={`${id === selectedCard ? "face--front--flipped": "face--front"}`}>
            front
          </div>

        </div>)
}

{/* <img src={logo} className="logo" alt="logo" /> */}
            {/* <div className='image'><div className="face--front--content"><p>text text text </p><p>text text text </p></div></div> */}