import React from "react"
import FormCar from "./Form/FormCar";

import {PromoSlider} from "./PromoSlider/PromoSlider";

import styles from "./FormPage.module.css"

import PhotoCar from "../../assets/img/city21.png";
import PhotoIllustration2 from "../../assets/img/Illustration-2.png";
import PhotoIllustration3 from "../../assets/img/Illustration-3.png";
import iconEuroCar from "../../assets/icons/icon-euroCar.svg";
import flag from "../../assets/icons/flag.svg";


export const FormPage: React.FC = () => {

  return (
    <>

      {/* Блок формы */}
      <div className="lg:flex lg:relative mb-10">
        <FormCar/>

        {/* Боковая фотография - декор */}
        <div className="lg:absolute right-0 mt-6 lg:mt-24 flex-1">
          <img src={PhotoCar} className="w-full" alt=""/>
        </div>
      </div>

      {/* Блок Слайдера */}
      <div className="relative mx-10 mb-20 flex">
        {/* Боковая фотография - декор */}
        <div className="hidden lg:block mt-6 w-[580px] visible lg:mt-20">
          <img src={PhotoIllustration2} alt=""/>
        </div>

        <section className="">

          {/* Шапка слайдера */}
          <header className="flex flex-col items-center justify-center mr-7 ml-2 mb-8">
            <div className="">
              <img src={iconEuroCar} className="w-16" alt=""/>
            </div>
            <strong className="font-arimo block text-xs text-black text-center">
              Желаешь продать машину быстро, но не хочешь
              заниматься этим самостоятельно?
              Доверь нам все проблемы, связанные с продажей машины!
            </strong>
          </header>

          {/* Сам слайдер */}
          <PromoSlider/>
        </section>


      </div>


      {/* Секция О нас */}
      <section className="relative flex flex-col lg:flex-row items-center mb-52">

        <div className="mx-6 sm:mx-10 md:mx-20 z-10 lg:w-[45%]">
          <h2 className="font-bold text-3xl underline underline-offset-[3px] decoration-4 decoration-lime-400 mb-4">О
            нас</h2>
          <strong className="block font-arimo mb-4">Мы действуем на рынке автомобилей уже много лет и знаем как оформить
            сделку быстро и без
            проблем.</strong>

          <p className="text-xs">Первое, что следует сделать заинтересованному в продаже машины человеку –
            связаться с нами, заполнив контактную форму на сайте или позвонив по
            телефону. На основании полученного со слов описания машины мы назовем
            предварительную стоимость. Точное ценовое предложение станет известно после
            проведения оценки, которую выполнит наш специалист, выехав для этого в удобное
            для клиента место.
          </p>

          <div className="flex lg:flex-col mt-10 lg:w-[300px]">

            <div className={styles.aboutItem}>
              <svg className={styles.aboutItemIcon} width="33" height="33" viewBox="0 0 33 33" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.5 0C7.40235 0 0 7.40235 0 16.5C0 25.5976 7.40235 33 16.5 33C25.5976 33 33 25.5976 33 16.5C33 7.40235 25.5976 0 16.5 0ZM31.0071 16.5C31.0071 24.4976 24.4976 31.0071 16.5 31.0071C8.50235 31.0071 1.99294 24.4976 1.99294 16.5C1.99294 8.50235 8.50235 1.99294 16.5 1.99294C24.4976 1.99294 31.0071 8.50235 31.0071 16.5Z"
                  fill="#A6C34F"/>
                <path
                  d="M25.8564 12.7794C25.5523 12.553 25.1511 12.5141 24.8211 12.6824L20.7253 14.7012L17.3735 8.59943C17.2053 8.29531 16.8753 8.10767 16.5 8.10767C16.1247 8.10767 15.7947 8.29531 15.6264 8.59943L12.2747 14.7012L8.17878 12.6824C7.84231 12.5141 7.44113 12.5465 7.13701 12.773C6.83937 12.9994 6.69054 13.3683 6.74878 13.7371L8.26937 22.7248C8.35349 23.2036 8.7676 23.553 9.2529 23.553H23.7341C24.2194 23.553 24.6335 23.2036 24.7176 22.7248L26.2382 13.7371C26.3094 13.3747 26.1606 13.0059 25.8564 12.7794ZM23.9541 15.3353L22.8994 21.5665H10.107L9.05231 15.3353L12.2553 16.9142C12.7341 17.1536 13.3164 16.9724 13.5688 16.5L16.5064 11.1553L19.4441 16.5C19.7029 16.9724 20.2788 17.1536 20.7576 16.9142L23.9541 15.3353Z"
                  fill="#A6C34F"/>
              </svg>
              <p className={styles.aboutItemText}>Предлагаем самые высокие цены</p>
            </div>

            <div className={styles.aboutItem}>
              <svg className={styles.aboutItemIcon} width="33" height="33" viewBox="0 0 33 33" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32.1484 10.3839C31.0196 9.25505 29.1778 9.25505 28.0424 10.3839C27.6925 10.7337 25.4745 12.9584 25.1312 13.2951V5.63753C25.1312 4.86517 24.8276 4.13243 24.2797 3.58452L21.5467 0.851571C20.9988 0.303661 20.2727 0 19.4937 0H2.89798C1.30046 0 0 1.30046 0 2.89798V30.102C0 31.6995 1.30046 33 2.89798 33H22.2398C23.8374 33 25.1378 31.6995 25.1378 30.102V21.5071L32.1484 14.4899C33.2839 13.3545 33.2839 11.5193 32.1484 10.3839ZM22.4049 21.5071L21.8834 22.0286L19.8304 22.7151L20.5169 20.6621L21.0384 20.1406L22.4049 21.5071ZM23.7714 20.1406L22.4049 18.7742C23.131 18.048 26.3657 14.8068 27.0522 14.1202L28.4187 15.4867L23.7714 20.1406ZM20.1868 2.21804L22.9198 4.95099C23.2234 5.25465 23.2036 5.59132 23.2036 5.80256H19.3353V1.93419C19.5201 1.93419 19.87 1.90118 20.1868 2.21804ZM22.2398 31.0724H2.89798C2.36327 31.0724 1.93419 30.6367 1.93419 30.1086V2.89798C1.93419 2.36327 2.36987 1.93419 2.89798 1.93419H17.4011V6.76635C17.4011 7.30106 17.8368 7.73015 18.3649 7.73015H23.197V15.2358L20.3453 18.0942L18.9788 19.4607C18.8732 19.5663 18.794 19.6983 18.7477 19.837L17.3813 23.9364C17.2625 24.2863 17.3549 24.6691 17.6123 24.9266C17.8698 25.184 18.2526 25.2765 18.6025 25.1576L22.7019 23.7912C22.8472 23.745 22.9726 23.6657 23.0782 23.5601L23.197 23.4413V30.102C23.2036 30.6367 22.768 31.0724 22.2398 31.0724ZM30.782 13.1234L29.7852 14.1202L28.4187 12.7538L29.4155 11.757C29.7918 11.3807 30.4057 11.3807 30.782 11.757C31.1582 12.1332 31.1648 12.7405 30.782 13.1234Z"
                  fill="#A6C34F"/>
                <path
                  d="M4.83215 11.6053H18.3715C18.9062 11.6053 19.3352 11.1696 19.3352 10.6415C19.3352 10.1068 18.8996 9.67773 18.3715 9.67773H4.83215C4.29745 9.67773 3.86836 10.1134 3.86836 10.6415C3.86176 11.1696 4.29745 11.6053 4.83215 11.6053Z"
                  fill="#A6C34F"/>
                <path
                  d="M4.83215 15.4734H14.5031C15.0378 15.4734 15.4669 15.0377 15.4669 14.5097C15.4669 13.9751 15.0312 13.546 14.5031 13.546H4.83215C4.29745 13.546 3.86836 13.9817 3.86836 14.5097C3.86176 15.0377 4.29745 15.4734 4.83215 15.4734Z"
                  fill="#A6C34F"/>
                <path
                  d="M4.83215 19.3352H14.5031C15.0378 19.3352 15.4669 18.8995 15.4669 18.3713C15.4669 17.8366 15.0312 17.4075 14.5031 17.4075H4.83215C4.29745 17.4075 3.86836 17.8432 3.86836 18.3713C3.86176 18.9061 4.29745 19.3352 4.83215 19.3352Z"
                  fill="#A6C34F"/>
                <path
                  d="M15.4669 22.2397C15.4669 21.7051 15.0312 21.2761 14.5031 21.2761H4.8322C4.29749 21.2761 3.86841 21.7117 3.86841 22.2397C3.86841 22.7743 4.3041 23.2032 4.8322 23.2032H14.5031C15.0378 23.2032 15.4669 22.7743 15.4669 22.2397Z"
                  fill="#A6C34F"/>
                <path
                  d="M18.3715 27.204H12.5689C12.0342 27.204 11.6051 27.6397 11.6051 28.1678C11.6051 28.7025 12.0408 29.1316 12.5689 29.1316H18.3715C18.9062 29.1316 19.3353 28.6959 19.3353 28.1678C19.3353 27.6331 18.9062 27.204 18.3715 27.204Z"
                  fill="#A6C34F"/>
              </svg>
              <p className={styles.aboutItemText}>Оформляем документы прямо на месте</p>
            </div>

            <div className={styles.aboutItem}>
              <svg className={styles.aboutItemIcon} width="33" height="48" viewBox="0 0 33 48" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32.1589 29.5864C32.6846 28.841 33 27.8567 33 26.7864C33 24.4738 31.5205 22.5912 29.703 22.5912H23.2968C23.9276 20.1448 24.2055 16.8956 24.2055 15.5004V14.1052C24.2055 11.0184 22.2303 8.50513 19.8045 8.50513H18.708C18.2048 8.50513 17.7617 8.94472 17.6416 9.56588L17.0407 12.6144C16.1996 16.8861 13.5335 21.5973 10.7772 22.4574C10.2965 20.8997 9.10241 19.7912 7.70551 19.7912H1.0965C0.488166 19.7912 0 20.4219 0 21.1864V46.3865C0 47.1606 0.495676 47.7817 1.0965 47.7817H7.698C9.01229 47.7817 10.1463 46.807 10.6796 45.3927L14.4572 46.9981C15.6964 47.5237 16.9807 47.7913 18.2874 47.7913H27.5025C29.32 47.7913 30.7995 45.9087 30.7995 43.5961C30.7995 43.0513 30.7169 42.5257 30.5667 42.0479C31.9636 41.5606 33 39.9264 33 37.996C33 36.9257 32.6846 35.9414 32.1589 35.196C32.6846 34.4506 33 33.4663 33 32.396C33 31.3257 32.6771 30.3223 32.1589 29.5864ZM8.79449 43.5769C8.79449 44.351 8.29881 44.9722 7.698 44.9722H2.19299V22.5721H7.69049C8.29882 22.5721 8.78698 23.2028 8.78698 23.9673V43.5769H8.79449ZM27.5025 30.9817H29.703C30.3113 30.9817 30.7995 31.6124 30.7995 32.3769C30.7995 33.1414 30.3038 33.7721 29.703 33.7721H27.5025C26.8942 33.7721 26.406 34.4029 26.406 35.1674C26.406 35.9319 26.9017 36.5626 27.5025 36.5626H29.703C30.3113 36.5626 30.7995 37.1933 30.7995 37.9578C30.7995 38.7223 30.3038 39.353 29.703 39.353H27.5025C26.8942 39.353 26.406 39.9838 26.406 40.7483C26.406 41.5128 26.9017 42.1435 27.5025 42.1435C28.1108 42.1435 28.599 42.7742 28.599 43.5387C28.599 44.3032 28.1033 44.9339 27.5025 44.9339H18.2799C17.2135 44.9339 16.162 44.7141 15.1482 44.2841L10.995 42.5257V25.2001C12.7223 24.7796 14.4122 23.3939 15.9367 21.1195C17.4238 18.8929 18.6329 15.9495 19.1661 13.2355L19.5567 11.2478H19.797C21.0137 11.2478 21.9975 12.4997 21.9975 14.0478V15.443C21.9975 17.3256 21.5319 20.9284 20.9461 22.5339H18.7005C18.0922 22.5339 17.604 23.1646 17.604 23.9291C17.604 24.6936 18.0997 25.3243 18.7005 25.3243H29.6955C30.3038 25.3243 30.792 25.955 30.792 26.7195C30.792 27.484 30.2963 28.1148 29.6955 28.1148H27.495C26.8867 28.1148 26.3985 28.7455 26.3985 29.51C26.3985 30.2745 26.8942 30.9817 27.5025 30.9817Z"
                  fill="#A6C34F"/>
                <path
                  d="M5.49771 42.1729C6.10341 42.1729 6.59443 41.5481 6.59443 40.7773C6.59443 40.0065 6.10341 39.3816 5.49771 39.3816C4.89202 39.3816 4.401 40.0065 4.401 40.7773C4.401 41.5481 4.89202 42.1729 5.49771 42.1729Z"
                  fill="#A6C34F"/>
                <path
                  d="M21.9976 4.29081V1.39523C21.9976 0.621158 21.5019 0 20.9011 0C20.3002 0 19.8046 0.630714 19.8046 1.39523V4.29081C19.8046 5.06488 20.3002 5.68605 20.9011 5.68605C21.5019 5.68605 21.9976 5.06488 21.9976 4.29081Z"
                  fill="#A6C34F"/>
                <path
                  d="M16.2303 8.15238C16.6585 7.60758 16.6585 6.7187 16.2303 6.17391L14.6754 4.19546C14.2472 3.65067 13.5486 3.65067 13.1204 4.19546C12.6923 4.74025 12.6923 5.62912 13.1204 6.17391L14.6754 8.15238C15.1035 8.69717 15.8021 8.69717 16.2303 8.15238Z"
                  fill="#A6C34F"/>
                <path
                  d="M27.1198 8.15238L28.6748 6.17391C29.1029 5.62912 29.1029 4.74025 28.6748 4.19546C28.2466 3.65067 27.548 3.65067 27.1198 4.19546L25.5649 6.17391C25.1367 6.7187 25.1367 7.60758 25.5649 8.15238C25.9931 8.69717 26.6917 8.69717 27.1198 8.15238Z"
                  fill="#A6C34F"/>
              </svg>

              <p className={styles.aboutItemText}>Выкупаем машины в любом состоянии</p>
            </div>

          </div>


        </div>

        <div className="lg:absolute top-20 right-10 rotate-y  mx-6">
          <img src={PhotoIllustration3} alt=""/>
        </div>
      </section>

      {/* Секция О Имени компании */}
      <section className="flex flex-col lg:flex-row mx-6 lg:mx-20">

        {/* LEFT */}
        <div className="mb-8 lg:w-[55%]">
          <h2 className="font-bold text-2xl mb-4"><span
            className="underline underline-offset-[3px] decoration-4 decoration-lime-400">COMPANY</span> NAME</h2>
          <p className="mb-8">Каждый автовладелец хотя бы раз сталкивался с необходимостью продать машину. Конечно же,
            вы
            хотите селать это быстрее и с максимальной выгодой. Наши специалисты возьмут на себя все проблемы! Нам можно
            полностью доверять.
            Мы не являемся кредитной организацией или ломбардом. Мы покупаем ваши машины, в любом виде и состоянии. Да,
            так просто!
            Наша цель - купить вашу машину максимально быстро, просто и выгодно для вас.</p>

          {/**/}
          <div className="flex justify-between w-full">
            <div className="flex flex-col items-center justify-center w-28 h-28 shadow-md">
              <svg className="mb-4" width="33" height="33" viewBox="0 0 33 33" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_17_521)">
                  <path
                    d="M21.6112 21.7143C21.3443 21.7143 21.0756 21.6311 20.8455 21.4584L15.733 17.6241C15.4108 17.3837 15.2219 17.004 15.2219 16.6019V8.93387C15.2219 8.22682 15.793 7.65576 16.5 7.65576C17.2071 7.65576 17.7781 8.22682 17.7781 8.93387V15.9631L22.3794 19.414C22.9441 19.8368 23.0594 20.6386 22.6353 21.2019C22.3846 21.5396 22.0011 21.7143 21.6112 21.7143Z"
                    fill="#A6C34F"/>
                  <path
                    d="M16.5 33C7.40115 33 0 25.5988 0 16.5C0 7.40115 7.40115 0 16.5 0C25.5988 0 33 7.40115 33 16.5C33 25.5988 25.5988 33 16.5 33ZM16.5 2.55621C8.81268 2.55621 2.55621 8.81268 2.55621 16.5C2.55621 24.1873 8.81268 30.4438 16.5 30.4438C24.1873 30.4438 30.4438 24.1873 30.4438 16.5C30.4438 8.81268 24.1886 2.55621 16.5 2.55621Z"
                    fill="#A6C34F"/>
                </g>
                <defs>
                  <clipPath id="clip0_17_521">
                    <rect width="33" height="33" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <p className="font-semibold">Быстро</p>
            </div>
            <div className="flex flex-col items-center justify-center w-28 h-28 shadow-md">
              <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_17_533)">
                  <path
                    d="M32.9219 30.66L26.9615 21.378C29.2881 19.103 30.6887 16.079 30.6887 12.754C30.6887 9.219 29.0935 6.048 26.5258 3.738C23.958 1.428 20.4409 0 16.5114 0C12.5819 0 9.057 1.435 6.48921 3.745C3.92142 6.055 2.33406 9.226 2.33406 12.754C2.33406 16.079 3.73467 19.103 6.06125 21.378L0.100858 30.66C-0.000297102 30.814 -0.0314218 31.024 0.0308276 31.234C0.163108 31.563 0.559948 31.71 0.933445 31.591L5.69553 29.883L6.42696 34.468C6.45809 34.65 6.55924 34.825 6.76155 34.916C7.09614 35.098 7.52411 34.979 7.72642 34.678L13.7491 25.305C14.6128 25.452 15.5465 25.543 16.4491 25.543C17.3829 25.543 18.2777 25.452 19.1492 25.305L25.1718 34.678C25.3741 34.979 25.8021 35.07 26.1367 34.916C26.339 34.825 26.4402 34.643 26.4713 34.468L27.2027 29.883L31.9648 31.591C32.3305 31.71 32.7274 31.563 32.8674 31.234C33.0542 31.024 33.023 30.814 32.9219 30.66ZM7.59414 32.459L6.99499 28.896C6.92496 28.567 6.59815 28.329 6.19353 28.357C6.1235 28.357 6.06125 28.385 5.99121 28.42L2.29515 29.736L7.08836 22.281C8.59013 23.478 10.3876 24.409 12.3796 24.948L7.59414 32.459ZM16.5114 24.255C12.9865 24.255 9.78843 22.967 7.49298 20.902C5.19753 18.837 3.7658 15.96 3.7658 12.789C3.7658 9.618 5.19753 6.741 7.49298 4.669C9.78843 2.541 12.9865 1.253 16.5114 1.253C20.0363 1.253 23.2343 2.541 25.5298 4.606C27.8252 6.671 29.257 9.548 29.257 12.719C29.257 15.89 27.8252 18.767 25.5298 20.832C23.2343 22.967 20.0363 24.255 16.5114 24.255ZM27.0315 28.42C26.9615 28.392 26.8993 28.357 26.8292 28.357C26.4635 28.294 26.0978 28.539 26.0278 28.896L25.4286 32.459L20.6354 24.941C22.6352 24.402 24.4326 23.471 25.9266 22.274L30.7198 29.729L27.0315 28.42Z"
                    fill="#A6C34F" stroke="#A6C34F" stroke-width="0.5"/>
                  <path
                    d="M23.0323 10.542C22.8689 10.332 22.6666 10.185 22.4331 10.094C22.1997 10.003 21.9351 9.94701 21.6706 9.97501H18.9083L18.0446 7.51801C17.9123 7.16101 17.6088 6.86001 17.282 6.67801C17.0486 6.58701 16.8151 6.53101 16.5506 6.53101C16.286 6.53101 16.0526 6.59401 15.8191 6.67801C15.4534 6.86001 15.1889 7.12601 15.0566 7.51801L14.1929 9.97501H11.4305C11.166 9.94701 10.9014 10.003 10.668 10.094C10.4346 10.185 10.2322 10.332 10.0688 10.542C9.80428 10.871 9.73425 11.228 9.80428 11.592C9.87431 11.956 10.0688 12.278 10.4346 12.523L12.7611 14.021L11.8585 16.478C11.8585 16.506 11.8585 16.541 11.8274 16.541C11.7574 16.723 11.7574 16.933 11.7963 17.143C11.8274 17.353 11.9285 17.563 12.0997 17.745C12.3643 18.074 12.73 18.256 13.1346 18.312C13.5315 18.375 13.9672 18.284 14.3018 18.039L16.6284 16.513L18.955 18.039C19.3207 18.277 19.7175 18.34 20.1221 18.312C20.519 18.249 20.8847 18.074 21.157 17.745C21.3204 17.563 21.3905 17.353 21.4605 17.143C21.4916 16.933 21.4916 16.751 21.4294 16.541C21.4294 16.513 21.4294 16.478 21.3982 16.478L20.4956 14.021L22.8222 12.523C23.1879 12.285 23.3902 11.956 23.4525 11.592C23.398 11.256 23.3046 10.871 23.0323 10.542ZM21.8729 11.501L21.8418 11.529L19.1417 13.293C18.9083 13.44 18.776 13.741 18.8771 13.979L19.912 16.821V16.849C19.912 16.877 19.912 16.912 19.912 16.94C19.912 16.968 19.912 17.003 19.8809 17.003C19.8498 17.031 19.8109 17.066 19.7486 17.066C19.7175 17.066 19.6475 17.066 19.6164 17.038L16.8852 15.239C16.7529 15.148 16.6206 15.12 16.4494 15.12C16.3171 15.12 16.1459 15.148 16.0137 15.239L13.2825 17.038C13.2513 17.066 13.1813 17.066 13.1502 17.066C13.1191 17.066 13.049 17.038 13.0179 17.003C12.9868 16.975 12.9868 16.94 12.9868 16.94C12.9868 16.912 12.9868 16.877 12.9868 16.849V16.821L14.0217 13.979C14.1228 13.706 14.0217 13.44 13.7571 13.293L11.1971 11.529L11.166 11.501C11.1349 11.473 11.096 11.438 11.096 11.41C11.096 11.382 11.096 11.319 11.1271 11.291C11.1271 11.291 11.1271 11.263 11.1582 11.263C11.1893 11.235 11.1893 11.235 11.2282 11.235C11.2594 11.235 11.2983 11.207 11.3294 11.207C11.3605 11.207 11.3994 11.207 11.4305 11.207H14.6909C14.9943 11.207 15.2589 11.025 15.36 10.759L16.3949 7.88201C16.3949 7.85401 16.4261 7.79101 16.4961 7.79101C16.5272 7.79101 16.5661 7.76301 16.5661 7.76301C16.5973 7.76301 16.6362 7.76301 16.6362 7.79101C16.6673 7.81901 16.7062 7.85401 16.7373 7.88201L17.7722 10.759C17.8422 10.99 18.1068 11.2 18.4103 11.2H21.6706C21.7017 11.2 21.7406 11.2 21.7717 11.2C21.8029 11.2 21.8418 11.2 21.8729 11.228C21.904 11.228 21.904 11.256 21.9429 11.256C21.9429 11.256 21.9429 11.284 21.9741 11.284C22.0052 11.312 22.0052 11.347 22.0052 11.403C21.9351 11.438 21.904 11.466 21.8729 11.501Z"
                    fill="#A6C34F" stroke="#A6C34F" stroke-width="0.5"/>
                  <path
                    d="M24.3318 5.71897C22.332 3.91997 19.5697 2.81396 16.5117 2.81396C13.4459 2.81396 10.6836 3.91997 8.69159 5.71897C6.69961 7.51797 5.4624 10.003 5.4624 12.754C5.4624 15.505 6.69183 17.997 8.69159 19.789C10.6914 21.581 13.4537 22.694 16.5117 22.694C19.5775 22.694 22.3398 21.588 24.3318 19.789C26.3238 17.99 27.561 15.505 27.561 12.754C27.561 10.003 26.3315 7.51797 24.3318 5.71897ZM23.3669 18.893C21.6006 20.482 19.1728 21.441 16.5117 21.441C13.8505 21.441 11.415 20.454 9.68758 18.893C7.92126 17.304 6.85523 15.148 6.85523 12.754C6.85523 10.36 7.95238 8.16897 9.68758 6.61497C11.415 5.02596 13.8505 4.03896 16.5117 4.03896C19.1728 4.03896 21.6084 5.02596 23.3358 6.58697C25.1021 8.17597 26.1681 10.332 26.1681 12.726C26.1681 15.12 25.1021 17.339 23.3669 18.893Z"
                    fill="#A6C34F" stroke="#A6C34F" stroke-width="0.5"/>
                </g>
                <defs>
                  <clipPath id="clip0_17_533">
                    <rect width="33" height="35" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

              <p className="font-semibold">Качественно</p>
            </div>
            <div className="flex flex-col items-center justify-center w-28 h-28 shadow-md">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32.8695 14.0051L27.3467 6.73195C27.1448 6.46135 26.7671 6.39535 26.487 6.58015L22.9181 8.87695H18.268C18.2093 8.87695 18.1507 8.89015 18.0921 8.90995L14.4841 9.95935L10.7392 8.92315L7.10514 6.58015C6.8251 6.40195 6.46038 6.46135 6.25198 6.71875L0.143036 14.3879C-0.0783968 14.6651 -0.0393204 15.0677 0.227701 15.2987L3.43196 18.0906L6.30408 22.011C5.46394 22.9151 5.48347 24.3474 6.35618 25.2318C6.74694 25.6212 7.2354 25.8456 7.74339 25.8984C7.72385 26.0172 7.71734 26.136 7.71734 26.2548C7.71734 26.8752 7.95831 27.4559 8.38815 27.8916C8.81799 28.3272 9.39762 28.5714 10.0033 28.5714C10.0098 28.5714 10.0228 28.5714 10.0294 28.5714C10.0294 28.5846 10.0294 28.6044 10.0294 28.6176C10.0294 29.238 10.2703 29.8188 10.7002 30.2544C11.13 30.69 11.7096 30.9342 12.3153 30.9342C12.4391 30.9342 12.5563 30.921 12.6735 30.9078C12.7256 31.4226 12.9405 31.9242 13.3313 32.3202C13.7742 32.769 14.3603 33 14.9465 33C15.5326 33 16.1188 32.7756 16.5616 32.3202L16.9133 31.9638L17.0631 32.0826C17.506 32.5182 18.0791 32.736 18.6522 32.736C19.2384 32.736 19.8245 32.5116 20.2674 32.0562C20.7233 31.5942 20.9447 30.9869 20.9382 30.3797C21.5374 30.3864 22.1365 30.162 22.5924 29.7C23.0483 29.238 23.2697 28.6308 23.2632 28.0236C23.8885 28.0368 24.4746 27.7926 24.9175 27.3438C25.3734 26.8818 25.5948 26.2746 25.5883 25.6674C26.1874 25.674 26.7866 25.4496 27.2425 24.9876C28.0175 24.2022 28.1217 22.9811 27.5421 22.0836L29.6392 17.6285L32.7913 14.8764C33.0388 14.6718 33.0779 14.2757 32.8695 14.0051ZM6.89674 7.99915L9.50834 9.68215L3.82273 16.7045L1.54327 14.7179L6.89674 7.99915ZM7.26796 22.8888L8.056 22.0902C8.08205 22.0638 8.1081 22.044 8.12764 22.0241C8.28395 21.8988 8.4663 21.8196 8.6682 21.7998C8.67471 21.7998 8.68122 21.7998 8.68774 21.7998C8.71379 21.7998 8.74635 21.7932 8.7724 21.7932C9.04594 21.7998 9.29342 21.912 9.48229 22.11C9.847 22.4994 9.82746 23.1396 9.4367 23.5356L8.67471 24.3078C8.29046 24.6972 7.65873 24.6972 7.26796 24.3078C6.8772 23.9184 6.8772 23.2782 7.26796 22.8888ZM9.29342 26.9676C9.10455 26.7762 9.00035 26.5254 9.00035 26.2548C9.00035 25.9841 9.10455 25.7334 9.29342 25.542L10.8239 23.9909C11.117 23.694 11.5794 23.6147 11.9506 23.793C12.3349 23.9778 12.5563 24.4067 12.4977 24.8292C12.4651 25.0602 12.3609 25.2714 12.2046 25.4364L10.7002 26.961C10.5113 27.1524 10.2638 27.258 9.9968 27.258C9.72977 27.2646 9.48229 27.159 9.29342 26.9676ZM11.6054 29.3303C11.4166 29.139 11.3124 28.8882 11.3124 28.6176C11.3124 28.347 11.4166 28.0961 11.6054 27.9047L13.1359 26.3538C13.4485 26.037 13.95 25.971 14.3343 26.1954C14.686 26.4 14.8683 26.8092 14.8097 27.2118C14.7771 27.4362 14.6729 27.6407 14.5166 27.7992L13.0122 29.3238C12.8233 29.5152 12.5758 29.6208 12.3088 29.6208C12.0418 29.6274 11.7943 29.5217 11.6054 29.3303ZM14.2366 31.3962C13.8523 31.0068 13.8523 30.3666 14.2366 29.9706L15.0246 29.172C15.0507 29.1456 15.0767 29.1257 15.0963 29.1059C15.2265 29.0003 15.3763 28.9278 15.5391 28.9014C15.5456 28.9014 15.5456 28.9014 15.5522 28.9014C15.5782 28.8948 15.6108 28.8948 15.6368 28.8882C15.6498 28.8882 15.6564 28.8882 15.6694 28.8882C15.6954 28.8882 15.715 28.8882 15.741 28.8882C16.008 28.8948 16.262 29.007 16.4509 29.205C16.477 29.2313 16.4965 29.2577 16.516 29.2841C16.8156 29.6802 16.7765 30.261 16.4053 30.6371L15.6433 31.4094C15.2526 31.7856 14.6273 31.7856 14.2366 31.3962ZM26.3112 24.0768C25.9269 24.4662 25.2952 24.4662 24.9044 24.0768C24.8914 24.0636 24.8784 24.0504 24.8588 24.0371L20.6972 19.7736C20.4432 19.5162 20.0394 19.5162 19.7789 19.767C19.5249 20.0244 19.5249 20.4336 19.7724 20.6976L23.9796 25.0074C24.3639 25.3968 24.3639 26.037 23.9796 26.433C23.7908 26.6244 23.5433 26.73 23.2763 26.73C23.0092 26.73 22.7617 26.6244 22.5729 26.433L19.7594 23.5488C19.5054 23.2914 19.1016 23.2913 18.8411 23.5422C18.5871 23.7995 18.5871 24.2154 18.8346 24.4728L21.6025 27.3108C21.6155 27.3306 21.6285 27.3438 21.6481 27.3636C22.0323 27.753 22.0323 28.3932 21.6481 28.7892C21.2638 29.1786 20.6321 29.1786 20.2413 28.7892L18.7043 27.2184C18.4503 26.961 18.04 26.961 17.786 27.2118C17.532 27.4692 17.532 27.8783 17.7795 28.1423L19.2709 29.6735C19.2839 29.6933 19.297 29.7066 19.3165 29.7264C19.7008 30.1158 19.7008 30.756 19.3165 31.152C18.9323 31.5414 18.3005 31.5414 17.9098 31.152C17.8642 31.1058 17.8121 31.0728 17.76 31.0332C17.7144 31.0002 17.7079 30.9804 17.7274 30.9276C17.7469 30.8748 17.7795 30.8286 17.8056 30.7758C17.8316 30.7164 17.8511 30.657 17.8642 30.5976C17.9619 30.2742 17.9944 29.9244 17.9488 29.5878C17.8642 28.941 17.5125 28.3602 16.985 27.9906C16.6984 27.7926 16.3662 27.6606 16.0211 27.6144C16.1904 26.8686 15.9885 26.0634 15.4675 25.5024C15.0376 25.0404 14.458 24.783 13.8393 24.7764C13.8198 24.7764 13.7937 24.7764 13.7742 24.7764C13.7872 24.1758 13.5723 23.5752 13.162 23.1396C12.7321 22.6842 12.1525 22.4268 11.5338 22.4136C11.3514 22.4136 11.1626 22.4334 10.9802 22.473C10.9021 21.9318 10.635 21.4302 10.2247 21.0672C9.82095 20.7108 9.30645 20.5128 8.75938 20.5062C8.18626 20.4996 7.61965 20.7108 7.19632 21.1002L4.69543 17.6814L10.6806 10.2893L12.5889 10.8173L10.101 15.2723C9.80141 15.8135 9.72326 16.4339 9.88608 17.0345C10.0489 17.6286 10.4331 18.1302 10.9607 18.4338C10.9932 18.4536 11.0258 18.4734 11.0584 18.4866C11.0584 18.4866 11.0649 18.4866 11.0649 18.4932C11.1561 18.5394 11.2472 18.579 11.3384 18.612C11.7748 18.7638 12.2437 18.7836 12.6931 18.6516C13.2792 18.4866 13.7742 18.0972 14.0738 17.5626L15.6954 14.6651L18.5871 14.8698L26.3112 22.6512C26.6954 23.0472 26.6954 23.6808 26.3112 24.0768ZM26.5782 21.0672L19.3556 13.7544C19.3426 13.7411 19.3295 13.728 19.31 13.7148C19.2058 13.629 19.0755 13.5761 18.9388 13.5629L15.4024 13.3055C15.1549 13.2857 14.9139 13.4177 14.7967 13.6356L12.9796 16.8894C12.8494 17.1204 12.6345 17.292 12.3805 17.3645C12.1265 17.4372 11.8594 17.4042 11.625 17.2722C11.397 17.1402 11.2277 16.9223 11.1561 16.665C11.0844 16.4075 11.117 16.137 11.2472 15.8994L13.6765 11.5565L14.6599 11.2727C14.6664 11.2727 14.6729 11.2661 14.6794 11.2661L18.3526 10.1903H22.7943L28.3366 17.3316L26.5782 21.0672ZM29.1898 16.2954L24.0643 9.68875L26.6824 8.00575L31.4693 14.3088L29.1898 16.2954Z"
                  fill="#A6C34F" stroke="#A6C34F" stroke-width="0.5"/>
                <path
                  d="M19.994 7.64276C20.1569 7.64276 20.3262 7.57676 20.4499 7.45136L24.8721 2.96996C25.1261 2.71256 25.1261 2.29676 24.8721 2.03936C24.6181 1.78196 24.2078 1.78196 23.9538 2.03936L19.5382 6.52736C19.2842 6.78476 19.2842 7.20056 19.5382 7.45796C19.6619 7.58336 19.8312 7.64276 19.994 7.64276Z"
                  fill="#A6C34F" stroke="#A6C34F" stroke-width="0.5"/>
                <path
                  d="M12.55 7.45135C12.6738 7.57675 12.8431 7.64275 13.0059 7.64275C13.1687 7.64275 13.3381 7.57675 13.4618 7.45135C13.7158 7.19395 13.7158 6.77815 13.4618 6.52075L9.04617 2.04596C8.79217 1.78856 8.38187 1.78856 8.12788 2.04596C7.87388 2.30336 7.87388 2.71916 8.12788 2.97656L12.55 7.45135Z"
                  fill="#A6C34F" stroke="#A6C34F" stroke-width="0.5"/>
                <path
                  d="M16.5033 7.64283C16.8615 7.64283 17.148 7.35243 17.148 6.98943V3.28023C17.148 2.91723 16.855 2.62683 16.5033 2.62683C16.1451 2.62683 15.8585 2.92383 15.8585 3.28023V6.98943C15.852 7.35243 16.1451 7.64283 16.5033 7.64283Z"
                  fill="#A6C34F" stroke="#A6C34F" stroke-width="0.5"/>
                <path
                  d="M15.9041 0.904184C16.0083 1.15498 16.2623 1.31998 16.5358 1.30678C16.8028 1.29358 17.0373 1.10878 17.1219 0.851384C17.2066 0.593983 17.1154 0.296983 16.9005 0.131983C16.6791 -0.0396168 16.3795 -0.0462168 16.145 0.105583C15.8845 0.277183 15.7868 0.620383 15.9041 0.904184Z"
                  fill="#A6C34F" stroke="#A6C34F" stroke-width="0.5"/>
              </svg>

              <p className="font-semibold">Надежно</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex lg:w-[45%] flex-col lg:ml-10">
          <div className="flex items-center mb-6">
            <img src={flag} alt="" width={22} height={22} className="mr-4"/>
            <p>Машину не надо подготавливать к продаже</p>
          </div>
          <div className="flex items-center mb-6">
            <img src={flag} alt="" width={22} height={22} className="mr-4"/>
            <p>Покупаем машины любого года выпуска и в любом состоянии</p>
          </div>

          <div className="flex items-center mb-6">
            <img src={flag} alt="" width={22} height={22} className="mr-4"/>
            <p>Покупаем машины без техосмотра и страховки</p>
          </div>

          <div className="flex items-center mb-6">
            <img src={flag} alt="" width={22} height={22} className="mr-4"/>
            <p>Покупаем машины не работающие и нуждающиеся в ремонте</p>
          </div>

          <div className="flex items-center mb-6">
            <img src={flag} alt="" width={22} height={22} className="mr-4"/>
            <p>Предложим за вашу машину больше остальных</p>
          </div>

          <div className="flex items-center mb-6">
            <img src={flag} alt="" width={22} height={22} className="mr-4"/>
            <p>Сразу же выплачиваем деньги</p>
          </div>

          <div className="flex items-center mb-6">
            <img src={flag} alt="" width={22} height={22} className="mr-4"/>
            <p>Работаем по всей Эстонии и сами выезжаем на место</p>
          </div>

        </div>


      </section>


    </>
  )
}

export default React.memo(FormPage)