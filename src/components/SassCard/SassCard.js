import "./SassCard.scss"
import logo from './logo.svg';

export default function SassTest({id, selectedCard}) {

  return(
        <div className='container'>
          <div className={`${id === selectedCard ? "face--front--flipped": "face--front"}`}>
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className={`${id === selectedCard ? "face--back--flipped": "face--back"}`}>
            back 
          </div>
        </div>)
}