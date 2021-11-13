import Link from 'next/link'

const GlobalHeader = () => {
  return (
    <header className='p-3 bg-dark text-white'>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            <li>
              <Link href="/schools">
                <a href='#' className='nav-link px-2 text-secondary'>
                  Schools
                </a>
              </Link>
            </li>
            <li>
              <Link href="/schools/maps">
                <a className='nav-link px-2 text-white'>
                  Maps
                </a>
              </Link>

            </li>
          </ul>

          <div className='text-end'>
            <button type='button' className='btn btn-outline-light me-2'>
              Login
            </button>
            <Link href="/registration">
              <button type='button' className='btn btn-warning'>Sign-up</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
    ;
};
export default GlobalHeader;