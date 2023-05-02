// Write your code here
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="containerHeader">
    <Link to="/" className="link-style">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png "
        alt="website logo"
        className="img-logo-sizing"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          className="button-header-style"
          type="button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="button-header-icon" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <>
          <div className="button-right">
            <button
              type="button"
              className="button-header-style"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose className="close-Icon" />
            </button>
          </div>

          <ul className="container-close">
            <Link to="/" className="link-style">
              <li className="row-formation">
                <AiFillHome className="close-img-sizing" />
                <h1 className="para-header-close">Home</h1>
              </li>
            </Link>

            <Link to="/about" className="link-style">
              <li className="row-formation">
                <BsInfoCircleFill className="close-img-sizing" />
                <h1 className="para-header-close">About</h1>
              </li>
            </Link>
          </ul>
        </>
      )}
    </Popup>
  </div>
)
export default Header
