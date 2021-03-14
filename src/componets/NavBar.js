import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <header>
        <Link to={`/`}><span>Jason Jordan</span></Link>
        <Link to={`/projects`}><span>Projects</span></Link>
        <Link to={`/about`}><span>About Me</span></Link>
        <Link to={`/contact`}><span>Contact</span></Link>
        
      </header>

    );
  }
  
  export default NavBar;
  