import React from "react";
import {NavLink} from "react-router-dom";

import styles from "./Navigation.module.css";


interface PropsType {
  toggleMenu: boolean,
  onToggleMenu: () => void,
};

export const Navigation: React.FC<PropsType> = ({toggleMenu, onToggleMenu}) => {
  const setActiveLink = (navData: any) => navData.isActive ? styles.activeNavLink : "";


  return (
    <nav className={toggleMenu ? styles.navMenu : `${styles.navMenu} h-[54px] w-40 lg:w-fit rounded-bl-large`}>

      <div className="lg:hidden relative flex justify-between mt-1">
        <svg className={toggleMenu ? "mx-5 mt-5" : "hidden"} width="134" height="35" viewBox="0 0 134 35" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.1016 30.3438V34H0.9375V0.976562H5.41406V30.3438H22.1016ZM58.7578 17.3359C58.7578 20.8672 58.0859 23.9141 56.7422 26.4766C55.4141 29.0391 53.5234 31.0156 51.0703 32.4062C48.6172 33.7812 45.7109 34.4688 42.3516 34.4688C38.9766 34.4688 36.0625 33.7812 33.6094 32.4062C31.1719 31.0312 29.2891 29.0625 27.9609 26.5C26.6484 23.9375 25.9922 20.8828 25.9922 17.3359C25.9922 13.8047 26.6406 10.7891 27.9375 8.28906C29.25 5.77344 31.125 3.84375 33.5625 2.5C36.0156 1.15625 38.9609 0.484375 42.3984 0.484375C45.7734 0.484375 48.6797 1.14844 51.1172 2.47656C53.5703 3.80469 55.4531 5.72656 56.7656 8.24219C58.0938 10.7422 58.7578 13.7734 58.7578 17.3359ZM54.1875 17.3359C54.1875 13.2266 53.1562 10 51.0938 7.65625C49.0469 5.3125 46.1484 4.14062 42.3984 4.14062C38.6172 4.14062 35.6953 5.29687 33.6328 7.60938C31.5703 9.92188 30.5391 13.1641 30.5391 17.3359C30.5391 20.0859 31.0078 22.4766 31.9453 24.5078C32.8828 26.5234 34.2344 28.0859 36 29.1953C37.7656 30.2891 39.8828 30.8359 42.3516 30.8359C46.1641 30.8359 49.0859 29.6641 51.1172 27.3203C53.1641 24.9609 54.1875 21.6328 54.1875 17.3359ZM80.1328 30.8359C82.2891 30.8359 84.2969 30.5078 86.1562 29.8516C88.0312 29.1953 89.5469 28.3047 90.7031 27.1797V21.2266H80.8359V17.4766H94.8281V28.8672C93.0781 30.6484 90.9297 32.0312 88.3828 33.0156C85.8516 33.9844 83.1016 34.4688 80.1328 34.4688C76.6953 34.4688 73.7344 33.7734 71.25 32.3828C68.7656 30.9922 66.8516 29.0156 65.5078 26.4531C64.1641 23.875 63.4922 20.8359 63.4922 17.3359C63.4922 11.9766 64.9297 7.82812 67.8047 4.89062C70.6797 1.95313 74.7188 0.484375 79.9219 0.484375C83.5781 0.484375 86.5469 1.10156 88.8281 2.33594C91.1094 3.57031 92.8672 5.54688 94.1016 8.26562L89.8359 9.53125C88.8984 7.65625 87.6016 6.28906 85.9453 5.42969C84.3047 4.57031 82.2578 4.14062 79.8047 4.14062C75.9922 4.14062 73.0781 5.29687 71.0625 7.60938C69.0469 9.90625 68.0391 13.1484 68.0391 17.3359C68.0391 21.5078 69.1094 24.8047 71.25 27.2266C73.3906 29.6328 76.3516 30.8359 80.1328 30.8359ZM133.477 17.3359C133.477 20.8672 132.805 23.9141 131.461 26.4766C130.133 29.0391 128.242 31.0156 125.789 32.4062C123.336 33.7812 120.43 34.4688 117.07 34.4688C113.695 34.4688 110.781 33.7812 108.328 32.4062C105.891 31.0312 104.008 29.0625 102.68 26.5C101.367 23.9375 100.711 20.8828 100.711 17.3359C100.711 13.8047 101.359 10.7891 102.656 8.28906C103.969 5.77344 105.844 3.84375 108.281 2.5C110.734 1.15625 113.68 0.484375 117.117 0.484375C120.492 0.484375 123.398 1.14844 125.836 2.47656C128.289 3.80469 130.172 5.72656 131.484 8.24219C132.812 10.7422 133.477 13.7734 133.477 17.3359ZM128.906 17.3359C128.906 13.2266 127.875 10 125.812 7.65625C123.766 5.3125 120.867 4.14062 117.117 4.14062C113.336 4.14062 110.414 5.29687 108.352 7.60938C106.289 9.92188 105.258 13.1641 105.258 17.3359C105.258 20.0859 105.727 22.4766 106.664 24.5078C107.602 26.5234 108.953 28.0859 110.719 29.1953C112.484 30.2891 114.602 30.8359 117.07 30.8359C120.883 30.8359 123.805 29.6641 125.836 27.3203C127.883 24.9609 128.906 21.6328 128.906 17.3359Z"
            fill="white"/>
        </svg>
        <button onClick={onToggleMenu} className="absolute top-2 right-0">
          <svg width="31" height="21" viewBox="0 0 31 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.39062 1.76562H29.6094M1.39062 10.5H29.6094M1.39062 19.2344C12.4107 19.2344 18.5893 19.2344 29.6094 19.2344"
              stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
          </svg>
        </button>
      </div>


      <ul className={toggleMenu ? `${styles.navList} opacity-100` : `${styles.navList} opacity-0 lg:opacity-100`}>
        <li className={styles.Nav__item}>
          <svg className={styles.Nav__icon} width="24" height="24" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.75 12V21.131C3.75 21.2951 3.82902 21.4526 3.96967 21.5687C4.11032 21.6848 4.30109 21.75 4.5 21.75H9V16.4881C9 16.2418 9.11853 16.0056 9.3295 15.8315C9.54048 15.6574 9.82663 15.5595 10.125 15.5595H13.875C14.1734 15.5595 14.4595 15.6574 14.6705 15.8315C14.8815 16.0056 15 16.2418 15 16.4881V21.75H19.5C19.6989 21.75 19.8897 21.6848 20.0303 21.5687C20.171 21.4526 20.25 21.2951 20.25 21.131V12"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path
              d="M18.75 8.39065V3.00002H16.5V6.2344M22.5 12L12.5105 2.43752C12.2761 2.19002 11.7281 2.18721 11.4895 2.43752L1.5 12H22.5Z"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <NavLink to="/" className={setActiveLink}>ГЛАВНАЯ</NavLink>
        </li>
        <li className={styles.Nav__item}>
          <svg className={styles.Nav__icon} width="24" height="24" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.8438 7.875C18.7065 9.78141 17.2923 11.25 15.7501 11.25C14.2079 11.25 12.7914 9.78188 12.6564 7.875C12.5157 5.89172 13.8925 4.5 15.7501 4.5C17.6078 4.5 18.9845 5.92781 18.8438 7.875Z"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path
              d="M15.7501 14.25C12.6952 14.25 9.75756 15.7673 9.02162 18.7223C8.92412 19.1133 9.16928 19.5 9.571 19.5H21.9296C22.3313 19.5 22.5751 19.1133 22.479 18.7223C21.743 15.72 18.8054 14.25 15.7501 14.25Z"
              stroke="white" stroke-width="2" stroke-miterlimit="10"/>
            <path
              d="M9.3752 8.71594C9.26551 10.2384 8.1227 11.4375 6.89082 11.4375C5.65895 11.4375 4.51427 10.2389 4.40645 8.71594C4.29442 7.13203 5.40676 6 6.89082 6C8.37489 6 9.48723 7.16109 9.3752 8.71594Z"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path
              d="M9.65622 14.3437C8.81013 13.9561 7.87825 13.807 6.8906 13.807C4.4531 13.807 2.10466 15.0187 1.51638 17.3789C1.43903 17.6911 1.63497 18 1.9556 18H7.21872"
              stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
          </svg>
          <NavLink to="/about" className={setActiveLink}>О НАС</NavLink>
        </li>
        <li className={styles.Nav__item}>
          <svg className={styles.Nav__icon} width="24" height="24" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 4.5H4.125C3.62772 4.5 3.15081 4.69754 2.79917 5.04917C2.44754 5.40081 2.25 5.87772 2.25 6.375V17.625C2.25 18.1223 2.44754 18.5992 2.79917 18.9508C3.15081 19.3025 3.62772 19.5 4.125 19.5H19.8155C20.3128 19.5 20.7897 19.3025 21.1413 18.9508C21.4929 18.5992 21.6905 18.1223 21.6905 17.625V11.2031"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.25 7.5L12 12.75L16.0781 9.67172" stroke="white" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path
              d="M20.2477 8.25003C21.489 8.25003 22.4953 7.24372 22.4953 6.00237C22.4953 4.76102 21.489 3.75471 20.2477 3.75471C19.0063 3.75471 18 4.76102 18 6.00237C18 7.24372 19.0063 8.25003 20.2477 8.25003Z"
              fill="white"/>
            <path
              d="M20.2501 9C19.6572 9 19.0777 8.82419 18.5847 8.4948C18.0917 8.16542 17.7075 7.69725 17.4806 7.14949C17.2537 6.60174 17.1944 5.99901 17.31 5.41753C17.4257 4.83604 17.7112 4.3019 18.1304 3.88267C18.5497 3.46344 19.0838 3.17794 19.6653 3.06228C20.2468 2.94661 20.8495 3.00598 21.3973 3.23286C21.945 3.45975 22.4132 3.84397 22.7426 4.33693C23.072 4.82989 23.2478 5.40946 23.2478 6.00234C23.2472 6.79718 22.9311 7.55928 22.3691 8.12132C21.8071 8.68336 21.0449 8.99938 20.2501 9ZM20.2501 4.50468C19.9533 4.50422 19.6631 4.5918 19.4161 4.75634C19.1691 4.92088 18.9765 5.15498 18.8626 5.42903C18.7487 5.70308 18.7187 6.00475 18.7763 6.29588C18.8339 6.58701 18.9766 6.8545 19.1863 7.06451C19.396 7.27453 19.6632 7.41762 19.9543 7.47569C20.2453 7.53376 20.547 7.50419 20.8212 7.39073C21.0955 7.27727 21.3299 7.08501 21.4948 6.83828C21.6597 6.59156 21.7478 6.30146 21.7478 6.00468C21.7478 5.60726 21.5901 5.22609 21.3093 4.94485C21.0285 4.66361 20.6475 4.5053 20.2501 4.50468Z"
              fill="white"/>
          </svg>
          <NavLink to="/recall" className={setActiveLink}>ОТПРАВЬТЕ НАМ ПРЕДЛОЖЕНИЕ</NavLink>
        </li>
        <li className={styles.Nav__item}>
          <svg className={styles.Nav__icon} width="24" height="24" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 3.75C10.3683 3.75 8.77325 4.23385 7.41655 5.14038C6.05984 6.0469 5.00242 7.33537 4.378 8.84286C3.75357 10.3504 3.5902 12.0092 3.90853 13.6095C4.22685 15.2098 5.01259 16.6798 6.16637 17.8336C7.32016 18.9874 8.79017 19.7731 10.3905 20.0915C11.9909 20.4098 13.6497 20.2464 15.1571 19.622C16.6646 18.9976 17.9531 17.9402 18.8596 16.5835C19.7662 15.2267 20.25 13.6317 20.25 12C20.25 9.81196 19.3808 7.71354 17.8336 6.16637C16.2865 4.61919 14.188 3.75 12 3.75Z"
              stroke="white" stroke-width="2" stroke-miterlimit="10"/>
            <path
              d="M9.375 9.48232C9.375 9.48232 9.41438 8.662 10.2923 7.95559C10.8131 7.53606 11.4375 7.41465 12 7.40621C12.5123 7.39965 12.9698 7.48449 13.2436 7.61481C13.7123 7.83793 14.625 8.38262 14.625 9.54091C14.625 10.7597 13.8281 11.3133 12.9202 11.9222C12.0122 12.5311 11.7656 13.192 11.7656 13.875"
              stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
            <path
              d="M11.7188 17.25C12.2365 17.25 12.6562 16.8303 12.6562 16.3125C12.6562 15.7947 12.2365 15.375 11.7188 15.375C11.201 15.375 10.7812 15.7947 10.7812 16.3125C10.7812 16.8303 11.201 17.25 11.7188 17.25Z"
              fill="white"/>
          </svg>
          <NavLink to="/czv" className={setActiveLink}>ЧЗВ</NavLink>
        </li>
        <li className={styles.Nav__item}>
          <svg className={styles.Nav__icon} width="24" height="24" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.125 3H4.875C4.17942 3.00198 3.51289 3.27918 3.02103 3.77103C2.52918 4.26289 2.25198 4.92942 2.25 5.625V14.625C2.25198 15.3206 2.52918 15.9871 3.02103 16.479C3.51289 16.9708 4.17942 17.248 4.875 17.25H6.75V21L11.1431 17.3372C11.2106 17.2808 11.2957 17.25 11.3836 17.25H19.125C19.8206 17.248 20.4871 16.9708 20.979 16.479C21.4708 15.9871 21.748 15.3206 21.75 14.625V5.625C21.748 4.92942 21.4708 4.26289 20.979 3.77103C20.4871 3.27918 19.8206 3.00198 19.125 3V3Z"
              stroke="white" stroke-width="2" stroke-linejoin="round"/>
            <path
              d="M7.5 11.625C8.32843 11.625 9 10.9534 9 10.125C9 9.29657 8.32843 8.625 7.5 8.625C6.67157 8.625 6 9.29657 6 10.125C6 10.9534 6.67157 11.625 7.5 11.625Z"
              fill="white"/>
            <path
              d="M12 11.625C12.8284 11.625 13.5 10.9534 13.5 10.125C13.5 9.29657 12.8284 8.625 12 8.625C11.1716 8.625 10.5 9.29657 10.5 10.125C10.5 10.9534 11.1716 11.625 12 11.625Z"
              fill="white"/>
            <path
              d="M16.5 11.625C17.3284 11.625 18 10.9534 18 10.125C18 9.29657 17.3284 8.625 16.5 8.625C15.6716 8.625 15 9.29657 15 10.125C15 10.9534 15.6716 11.625 16.5 11.625Z"
              fill="white"/>
          </svg>
          <NavLink to="/blog" className={setActiveLink}>БЛОГ</NavLink>
        </li>
        <li className={styles.Nav__item}>
          <svg className={styles.Nav__icon} width="24" height="24" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2.25C8.27344 2.25 5.25 5.12766 5.25 8.67188C5.25 12.75 9.75 19.2127 11.4023 21.4448C11.4709 21.5391 11.5608 21.6157 11.6647 21.6686C11.7686 21.7215 11.8835 21.749 12 21.749C12.1165 21.749 12.2314 21.7215 12.3353 21.6686C12.4392 21.6157 12.5291 21.5391 12.5977 21.4448C14.25 19.2136 18.75 12.7533 18.75 8.67188C18.75 5.12766 15.7266 2.25 12 2.25Z"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path
              d="M12 11.25C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75C10.7574 6.75 9.75 7.75736 9.75 9C9.75 10.2426 10.7574 11.25 12 11.25Z"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <NavLink to="/contacts" className={setActiveLink}>КОНТАКТЫ</NavLink>
        </li>
        <li className={`${styles.Nav__item} !mr-0`}>
          <svg className="mr-2 lg:mr-0 w-[36px] lg:w-[18px]" viewBox="0 0 18 13" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0.441833H0V4.49075H18V0.441833Z" fill="white"/>
            <path d="M18 8.51031H0V12.4418H18V8.51031Z" fill="#D52B1E"/>
            <path d="M18 4.49072H0V8.51026H18V4.49072Z" fill="#0039A6"/>
          </svg>
          <button className="lg:hidden text-xl font-bold">Русский</button>
        </li>

        <li className={`${styles.Nav__item} lg:!hidden`}>
        <ul className="flex gap-x-5">
          <li>
            <a href="/">
              <svg width="11" height="23" viewBox="0 0 11 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.99203 3.81896H11V0.161719C10.654 0.112005 9.46237 0 8.07484 0C5.1789 0 3.19556 1.90409 3.19556 5.4038V8.625H0V12.7135H3.19556V23H7.11296V12.7141H10.1791L10.666 8.6256H7.11239V5.8093C7.11296 4.62815 7.41717 3.81896 8.99203 3.81896Z"
                  fill="white"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                   href="http://www.w3.org/1999/xlink">
                <path d="M0 0H23.421V23.2258H0V0Z" fill="url(#pattern0)"/>
                <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#image0_508_1064" transform="matrix(0.00285714 0 0 0.00288115 0 -0.0042014)"/>
                  </pattern>
                  <image id="image0_508_1064" width="350" height="350"
                         href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAFeCAMAAAD69YcoAAAC/VBMVEX///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9SksSbAAAA/nRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BR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"/>
                </defs>
              </svg>

            </a>
          </li>
        </ul>
        </li>

      </ul>
    </nav>
  );
};

export default Navigation;