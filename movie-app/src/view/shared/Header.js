import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
 import LogoIcon from "./logo.svg";



const Header = ({ title }) => {
 

  return (
    <header className='header'>
      
      <img src={LogoIcon} alt="search" />
      <h1>{title}</h1>
        <nav>
            <Link to="About">About</Link>
            <Link to="Movies">Movies</Link>
            <Link to="Other">Other</Link>
        </nav>
        
    
    </header>
  )
}

Header.defaultProps = {
  title: 'Movies',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header