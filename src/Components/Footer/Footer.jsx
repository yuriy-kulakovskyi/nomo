import './Footer.css';
import apple from "./svg/apple.svg";
import play from "./svg/play.svg";

const Footer = () => {
    return(
      <footer className='footer' id='contact'>
        <main className="footer__main">
          <div className="footer__main__contact">
            <h3 className="footer__main__contact__title">Скажи привіт</h3>
            <p className="footer__main__contact__item adress">
              <div className="circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12.5 7.04148C12.3374 7.0142 12.1704 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10C15 9.82964 14.9858 9.6626 14.9585 9.5" stroke="#313340" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M5 15.2161C4.35254 13.5622 4 11.8013 4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C9.26474 21.0797 8.13831 20.1439 7.19438 19" stroke="#313340" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>

              м. Івано-Франківськ, вул. Івасюка 84
            </p>
            <p className="footer__main__contact__item email">
              <a href="mailto:nomo-cashback@gmail.com">
                <div className="circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C21.4816 5.82475 21.7706 6.69989 21.8985 8" stroke="#313340" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M18 8L15.8411 9.79908C14.0045 11.3296 13.0861 12.0949 12 12.0949C11.3507 12.0949 10.7614 11.8214 10 11.2744M6 8L6.9 8.75L7.8 9.5" stroke="#313340" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </a>

              nomo-cashback@gmail.com
            </p>

            <p className="footer__main__contact__item phone">
              <a href="tel:+380684392129">
                <div className="circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M22.75 7C22.75 3.82436 20.1756 1.25 17 1.25C13.8243 1.25 11.25 3.82436 11.25 7C11.25 7.91847 11.4659 8.78866 11.8504 9.56061C11.859 9.5779 11.8623 9.5918 11.8634 9.6002C11.8639 9.60415 11.8638 9.60649 11.8638 9.60744L11.5662 10.7195C11.2878 11.7601 12.2398 12.7122 13.2805 12.4338L14.3925 12.1362C14.3911 12.1366 14.3916 12.1363 14.3925 12.1362C14.3935 12.1362 14.3958 12.1361 14.3998 12.1366C14.4082 12.1376 14.4221 12.141 14.4394 12.1496C15.2113 12.5341 16.0815 12.75 17 12.75C20.1756 12.75 22.75 10.1756 22.75 7ZM14.3935 12.136L14.3925 12.1362L14.3935 12.136ZM17 2.75C19.3472 2.75 21.25 4.65279 21.25 7C21.25 9.34721 19.3472 11.25 17 11.25C16.3188 11.25 15.677 11.0903 15.1081 10.8069C14.7889 10.6479 14.3977 10.5821 14.0058 10.6869L13.06 10.94L13.313 9.99416C13.4179 9.60224 13.352 9.2111 13.193 8.89186C12.9097 8.32298 12.75 7.68122 12.75 7C12.75 4.65279 14.6528 2.75 17 2.75Z" fill="#1C274C"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.00745 6.4069C4.68752 4.72683 7.52266 4.85455 8.69248 6.95067L9.34149 8.1136C10.1054 9.48242 9.77987 11.2095 8.66157 12.3415C8.64668 12.3619 8.56774 12.4768 8.55791 12.6776C8.54536 12.9339 8.63639 13.5267 9.55482 14.4452C10.4729 15.3633 11.0656 15.4545 11.3221 15.4421C11.5231 15.4323 11.6381 15.3533 11.6585 15.3384C12.7905 14.2201 14.5176 13.8946 15.8864 14.6585L17.0493 15.3075C19.1454 16.4773 19.2731 19.3125 17.5931 20.9925C16.6944 21.8912 15.4995 22.6897 14.0953 22.7429C12.0144 22.8218 8.55913 22.2844 5.13735 18.8626C1.71556 15.4408 1.17818 11.9856 1.25706 9.90468C1.3103 8.50048 2.10879 7.30556 3.00745 6.4069ZM7.38265 7.68167C6.78363 6.60832 5.17394 6.36173 4.06811 7.46756C3.29276 8.24291 2.7887 9.09872 2.75599 9.9615C2.6902 11.6968 3.11864 14.7226 6.19801 17.802C9.27737 20.8813 12.3031 21.3098 14.0385 21.244C14.9013 21.2113 15.7571 20.7072 16.5324 19.9319C17.6382 18.826 17.3916 17.2163 16.3183 16.6173L15.1554 15.9683C14.432 15.5646 13.4158 15.7023 12.7025 16.4156C12.6325 16.4856 12.1864 16.9018 11.395 16.9403C10.5847 16.9797 9.604 16.6157 8.49416 15.5058C7.38395 14.3956 7.02003 13.4146 7.0597 12.6043C7.09846 11.8128 7.51468 11.3672 7.58432 11.2975C8.29764 10.5842 8.43539 9.56801 8.03166 8.8446L7.38265 7.68167Z" fill="#1C274C"/>
                  </svg>
                </div>
              </a>

              +380684392129
            </p>
          </div>
          <div className="footer__main__location">
            <h3 className="footer__main__location__title">
              Наша локація
            </h3>

            {/* location image */}
            <iframe className='footer__main__location__image' title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.9633770636165!2d24.7409255!3d48.91609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c3d7ff25bc91%3A0xd4b6a5ad6531c10e!2z0LLRg9C70LjRhtGPINCG0LLQsNGB0Y7QutCwLCA4NCwg0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQuiwg0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3NjAwMA!5e0!3m2!1suk!2sua!4v1682780061304!5m2!1suk!2sua" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </main>
        <div className="footer__bottom">
          <p className="footer__bottom__cashback">
            © Nomo cashback {new Date().getFullYear()}
          </p>

          <ul className="footer__bottom__social">
            <li className='footer__bottom__social__link instagram'>
              <svg xmlns="http://www.w3.org/2000/svg" strokeWidth='' fill='rgb(228, 153, 91)' viewBox="0 0 32 32" width="32px" height="32px"><path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"/></svg>
            </li>

            <li className='footer__bottom__social__link apple'>
              <img src={apple} alt="Apple" />
            </li>

            <li className='footer__bottom__social__link play'>
              <img src={play} alt="Play" />
            </li>
          </ul>
        </div>
      </footer>
    )
}

export default Footer