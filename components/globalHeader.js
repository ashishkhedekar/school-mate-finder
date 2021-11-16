import Link from 'next/link'
import Image from 'next/image'
import siteLogo from '../public/site_logo.png'

const GlobalHeader = () => {
  return (
    <div className="header">
      <nav>
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
  )
    ;
};
export default GlobalHeader;