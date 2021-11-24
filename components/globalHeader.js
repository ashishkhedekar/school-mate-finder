import Link from 'next/link'
import Image from 'next/image'
import siteLogo from '../public/site_logo.png'
import {useMediaQuery} from "react-responsive";
import {FaBars} from 'react-icons/fa';
import {MdAccountCircle} from "react-icons/md";

const Desktop = ({children}) => {
  const isDesktop = useMediaQuery({minWidth: 992 })
  return isDesktop ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 992 })
  return isMobile ? children : null
}

const GlobalHeader = () => {
  return (
    <>
      <Desktop>
        <div className="header">
          <nav className="desktop-nav">
            <div className="logo-links-container">
              <Link href="/schools">
                <Image src={siteLogo} alt="School" width={200} height={200} className="siteLogo"/>
              </Link>
              <ul className="navLinks">
                <li><Link href="/schools"><a href="">Schools</a></Link></li>
                <li><Link href="/schools/maps"><a href="">Map</a></Link></li>
                <li><a href="">Reviews</a></li>
              </ul>
            </div>
            <ul className="navLinks">
                <li className='btn'>Login</li>
            </ul>
          </nav>
        </div>
      </Desktop>
      <Mobile>
        <div className="header">
          <nav className="mobile-nav">
            <ul className="navLinks">
              <li><FaBars/></li>
            </ul>
            <Link href="/schools">
              <Image src={siteLogo} alt="School" width={200} height={200} className="siteLogo"/>
            </Link>
            <ul className="navLinks">
              <li><MdAccountCircle/></li>
            </ul>
          </nav>
        </div>
      </Mobile>
    </>
  );
};
export default GlobalHeader;