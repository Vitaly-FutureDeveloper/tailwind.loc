import React, {useState} from "react";
import styles from "./PromoSlider.module.css";

export const PromoSlider: React.FC = () => {

  const [currentSlide, setCurrentSlide] = useState<number>(2);

  return (
    <section className="flex items-center justify-center w-[364px] sm:w-full mx-auto">

      <div className="relative flex items-center justify-center visible mx-auto">

        {/* 1 */}
        {
          !(currentSlide === 3)

          &&

          <div onClick={setCurrentSlide.bind(null, 1)}
               className={currentSlide === 1 ? styles.activeSlideWrap : styles.inactiveSlideWrap}>
            <div
              className={`${currentSlide === 1 ? styles.activeSlide : styles.inactiveSlide} absolute left-[70px] sm:left-1 top-0 flex text-center flex-col px-4 border-2 rounded-lg border-lime-300 `}>

              <div className="flex items-center justify-center mt-3 mb-2">
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_17_438)">
                    <path
                      d="M21.6112 21.7143C21.3443 21.7143 21.0756 21.6311 20.8455 21.4584L15.733 17.6241C15.4108 17.3836 15.2219 17.004 15.2219 16.6018V8.93384C15.2219 8.22679 15.793 7.65573 16.5 7.65573C17.2071 7.65573 17.7781 8.22679 17.7781 8.93384V15.9631L22.3794 19.4139C22.9441 19.8367 23.0594 20.6385 22.6353 21.2019C22.3846 21.5396 22.0011 21.7143 21.6112 21.7143Z"
                      fill="#A6C34F"/>
                    <path
                      d="M16.5 33C7.40115 33 0 25.5988 0 16.5C0 7.40115 7.40115 0 16.5 0C25.5988 0 33 7.40115 33 16.5C33 25.5988 25.5988 33 16.5 33ZM16.5 2.55621C8.81268 2.55621 2.55621 8.81268 2.55621 16.5C2.55621 24.1873 8.81268 30.4438 16.5 30.4438C24.1873 30.4438 30.4438 24.1873 30.4438 16.5C30.4438 8.81268 24.1886 2.55621 16.5 2.55621Z"
                      fill="#A6C34F"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_17_438">
                      <rect width="33" height="33" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <h3 className="text-lg text-slate-900 font-bold mb-1">Быстро</h3>

              <p className="font-arimo text-xs">Наша цель помочь вам продать машину как
                можно быстрее, оформив все необходимые
                докуметы в ускоренном порядке, и мы
                сделаем для этого всё от себя зависящее.</p>
            </div>
          </div>
        }


        {/* 2 */}
        <div onClick={setCurrentSlide.bind(null, 2)}
             className={`${currentSlide === 2 ? styles.activeSlideWrap : styles.inactiveSlideWrap} z-10`}>
          <div
            className={`${currentSlide === 2 ? styles.activeSlide : styles.inactiveSlide} absolute flex text-center flex-col px-4 border-2 rounded-lg border-lime-300`}>
            <div className="flex items-center justify-center mt-3 mb-4">
              <svg width="33" height="26" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.24838 24.5804L0.483398 15.5096C-0.161133 14.8425 -0.161133 13.7613 0.483398 13.095C1.12793 12.4286 2.17271 12.4279 2.8166 13.095L10.415 20.9585L30.1834 0.500266C30.8279 -0.166755 31.8727 -0.166755 32.5166 0.500266C33.1611 1.16729 33.1611 2.24853 32.5166 2.91488L11.5822 24.5804C10.9383 25.2467 9.89291 25.2474 9.24838 24.5804Z"
                  fill="#A6C34F"/>
              </svg>
            </div>

            <h3 className="text-lg text-slate-900 font-bold mb-1">Просто</h3>

            <p className="font-arimo text-xs">Мы купим вашу машину при любом условии!
              Не важно есть ли на ней техосмотр, нуждается
              ли она в ремонте или имеет неисправности;
              Мы приобритём вашу машину без лишних
              задержек и вопросов.</p>
          </div>
        </div>

        {/* 3 */}

        {
          !(currentSlide === 1)

          &&

          <div onClick={setCurrentSlide.bind(null, 3)}
               className={currentSlide === 3 ? styles.activeSlideWrap : styles.inactiveSlideWrap}>
            <div
              className={`${currentSlide === 3 ? styles.activeSlide : styles.inactiveSlide} absolute opacity-30 sm:opacity-100 right-[70px] sm:right-1 flex text-center flex-col px-4 border-2 rounded-lg border-lime-300`}>

              <div className="flex items-center justify-center mt-3 mb-2">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.5 1C8.40244 1 1 8.40244 1 17.5C1 26.5976 8.40244 34 17.5 34C26.5976 34 34 26.5976 34 17.5C34 8.40244 26.5976 1 17.5 1ZM17.5 31.9375C9.53875 31.9375 3.0625 25.4613 3.0625 17.5C3.0625 9.53875 9.53875 3.0625 17.5 3.0625C25.4613 3.0625 31.9375 9.53875 31.9375 17.5C31.9375 25.4613 25.4613 31.9375 17.5 31.9375Z"
                    fill="#A6C34F" stroke="#A6C34F"/>
                  <path
                    d="M18.5312 11.3125C19.4304 11.3125 20.276 11.5787 21.0436 12.1027C21.5141 12.4224 22.1574 12.3051 22.4771 11.8327C22.7987 11.3621 22.6769 10.7208 22.207 10.3992C21.1055 9.64832 19.8345 9.25 18.5312 9.25C15.5097 9.25 12.9232 11.3886 11.8488 14.4063H10.2812C9.71213 14.4063 9.25 14.8684 9.25 15.4375C9.25 16.0067 9.71213 16.4688 10.2812 16.4688H11.4034C11.366 16.811 11.3125 17.1475 11.3125 17.5C11.3125 17.8526 11.366 18.1891 11.4034 18.5313H10.2812C9.71213 18.5313 9.25 18.9934 9.25 19.5626C9.25 20.1317 9.71213 20.5938 10.2812 20.5938H11.8488C12.9232 23.6115 15.5097 25.7501 18.5312 25.7501C19.8345 25.7501 21.1055 25.3518 22.2064 24.6015C22.6769 24.2799 22.798 23.6386 22.4764 23.1681C22.1567 22.6976 21.5135 22.5783 21.043 22.898C20.276 23.4214 19.4304 23.6876 18.5312 23.6876C16.6318 23.6876 14.9857 22.4333 14.093 20.5938H17.5C18.0691 20.5938 18.5312 20.1317 18.5312 19.5626C18.5312 18.9934 18.0691 18.5313 17.5 18.5313H13.4614C13.4137 18.1949 13.375 17.8526 13.375 17.5C13.375 17.1475 13.4143 16.8052 13.4614 16.4688H18.5312C19.1004 16.4688 19.5625 16.0067 19.5625 15.4375C19.5625 14.8684 19.1004 14.4063 18.5312 14.4063H14.093C14.9857 12.5668 16.6318 11.3125 18.5312 11.3125Z"
                    fill="#A6C34F"/>
                </svg>
              </div>

              <h3 className="text-lg text-slate-900 font-bold mb-1">Прибыльно</h3>

              <p className="font-arimo text-xs">Разумеется вы хотели бы продать свою
                машину с максимальной выгодой. Мы
                способны предложить вам за ваш автомобиль
                самую высокую цену на рынке.</p>
            </div>
          </div>
        }


      </div>
    </section>
  )
};

export default PromoSlider;