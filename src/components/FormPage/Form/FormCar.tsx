import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from 'formik';
import LoadingSpinner from "../../spinners/LoadingSpinner/LoadingSpinner";

import {getFormResponseInitialized, getFormResponseText} from "../../../redux/form-reducer/form-selectors";
import {sendFormTC} from "../../../redux/form-reducer/form-reducer";

import {FormType} from "../../../types/FormType";
import {SigninSchema} from "./validations";

import styles from "./FormCar.module.css";


type SetSubmittingType = {
  setSubmitting: (isSubmitting: boolean) => void,
};

const getInitialValues = (): FormType => ({
  action: "POST",
  id: 1,
  image: {},

  brandMachine: "",
  modelMachine: "",
  motorMachine: "",
  yearMachine: "",
  fuelMachine: "",
  KPPMachine: "",
  mileageMachine: "",
  technicalInspectionMachine: "",
  desiredPriceMachine: "",

  name: "",
  email: "",
  country: "",
  tel: "",
  text: "",

  agreement: false,
});

export const FormCar: React.FC = () => {
  const dispatch = useDispatch<any>();

  const formResponseText = useSelector(getFormResponseText);
  const formResponseInitialized = useSelector(getFormResponseInitialized);

  const sendForm = (formValues: FormType) => {
    dispatch(sendFormTC(formValues));
  };

  const onSubmit = async (values: FormType, {setSubmitting}: SetSubmittingType) => {
    const formValues: FormType = {
      action: values.action,
      id: values.id,
      image: values.image,

      brandMachine: values.brandMachine,
      modelMachine: values.modelMachine,
      motorMachine: values.motorMachine,
      yearMachine: values.yearMachine,
      fuelMachine: values.fuelMachine,
      KPPMachine: values.KPPMachine,
      mileageMachine: values.mileageMachine,
      technicalInspectionMachine: values.technicalInspectionMachine,
      desiredPriceMachine: values.desiredPriceMachine,

      name: values.name,
      email: values.email,
      country: values.country,
      tel: values.tel,

      text: values.text,

      agreement: values.agreement,
    };
    setSubmitting(true);

    await sendForm(formValues);

    setSubmitting(false);
  };


  return (
    <section className="mt-7 md:mt-12 mx-auto lg:ml-28 lg:w-[47.5%]">
      <Formik
        initialValues={getInitialValues()}
        validationSchema={SigninSchema}
        onSubmit={onSubmit}
      >

        {({isSubmitting, setFieldValue}) => (

          <Form>

            <h3 className="block mb-5 md:mb-7 md:mr-12 font-arimo text-lg text-center">Данные автомобиля</h3>

            <Field type="hidden" name="action" value="POST"/>

            {/* Первая часть формы */}
            <div
              className="grid gap-y-6 md:gap-y-4 gap-x-6 grid-cols-3 px-5 lg:px-0 sm:grid-cols-4 w-full mb-6 md:mb-5">

              <label className={styles.labelDataCar}>
                <span className={styles.spanDataCar}>Марка</span>
                <Field className={styles.inputFieldDataCar} type="text" name="brandMachine"/>
                <ErrorMessage name="brandMachine" component="div" className={styles.errorMessageData}/>
              </label>

              <label className={styles.labelDataCar}>
                <span className={styles.spanDataCar}>Модель</span>
                <Field className={styles.inputFieldDataCar} type="text" name="modelMachine"/>
                <ErrorMessage name="modelMachine" component="div" className={styles.errorMessageData}/>
              </label>

              <label className={styles.labelDataCar}>
                <span className={styles.spanDataCar}>Мотор</span>
                <Field className={styles.inputFieldDataCar} type="text" name="motorMachine"/>
                <ErrorMessage name="motorMachine" component="div" className={styles.errorMessageData}/>
              </label>

              <label className={styles.labelDataCar}>
                <span className={styles.spanDataCar}>Год</span>
                <Field className={styles.inputFieldDataCar} type="text" name="yearMachine"/>
                <ErrorMessage name="yearMachine" component="div" className={styles.errorMessageData}/>
              </label>

              <label className={styles.labelDataCar}>
                <span className={styles.spanDataCar}>Топливо</span>
                <Field className={styles.inputFieldDataCar} type="text" name="fuelMachine"/>
                <ErrorMessage name="fuelMachine" component="div" className={styles.errorMessageData}/>
              </label>

              <label className={styles.labelDataCar}>
                <span className={styles.spanDataCar}>КПП</span>
                <Field className={styles.inputFieldDataCar} type="text" name="KPPMachine"/>
                <ErrorMessage name="KPPMachine" component="div" className={styles.errorMessageData}/>
              </label>

              <label className={styles.labelDataCar}>
                <span className={styles.spanDataCar}>Пробег</span>
                <Field className={styles.inputFieldDataCar} type="text" name="mileageMachine"/>
                <ErrorMessage name="mileageMachine" component="div" className={styles.errorMessageData}/>
              </label>

              <label className={styles.labelDataCar}>
                <span className={styles.spanDataCar}>Техосмотр</span>
                <Field className={styles.inputFieldDataCar} type="text" name="technicalInspectionMachine"/>
                <ErrorMessage name="technicalInspectionMachine" component="div" className={styles.errorMessageData}/>
              </label>

              <label className={styles.labelDataCar}>
                <span className={`${styles.spanDataOther} ${styles.required}`}>Желаемая цена</span>
                <Field className={styles.inputFieldDataCar} type="text" name="desiredPriceMachine"/>
                <ErrorMessage name="desiredPriceMachine" component="div" className={styles.errorMessageData}/>
              </label>

              <label
                className="flex items-center justify-center bg-lime-400 hover:opacity-60 rounded text-center text-[10px] text-white w-full col-start-1 sm:col-start-2 col-end-4 sm:col-end-5 mt-0.5 h-7">
                <span className="">Добавить фото</span>

                <Field className="visually-hidden"
                       type="file"
                       onChange={(evt: any) => {
                         const fileReader = new FileReader();
                         fileReader.onload = () => {
                           if (fileReader.readyState === 2) {
                             setFieldValue('image', fileReader.result);
                           }
                         };
                         fileReader.readAsDataURL(evt.target.files[0]);
                       }}
                       accept=".png,.jpg,.jpeg,.gif,.svg,.bmp"
                       name="image_name"/>

                <ErrorMessage name="image" component="div" className={styles.errorMessageData}/>
              </label>
            </div>


            <h3 className="block md:mr-28 mb-5 md:mb-3 font-arimo text-lg text-center">Другие данные</h3>

            {/* Вторая часть формы */}
            <div
              className="grid gap-y-7 md:gap-y-5 gap-x-5 md:gap-x-7 lg:gap-x-2 px-5 lg:px-0 lg:w-[78.5%] grid-cols-2 mb-3">

              <label className={`${styles.labelDataOther} lg:w-40`}>
                <span className={styles.spanDataOther}>Имя</span>
                <Field className={`${styles.inputFieldDataOther} h-5`} type="text" name="name"/>
                <ErrorMessage name="name" component="div" className={styles.errorMessageData}/>
              </label>

              <label className={`${styles.labelDataOther}`}>
                <span className={styles.spanDataOther}>Почта</span>
                <Field className={`${styles.inputFieldDataOther} h-5`} type="email" name="email"/>
                <ErrorMessage name="email" component="div" className={styles.errorMessageData}/>
              </label>

              <label className={`${styles.labelDataOther} lg:w-40`}>
                <span className={`${styles.spanDataOther} ${styles.required}`}>Телефон</span>
                <Field className={`${styles.inputFieldDataOther} h-5`} type="tel" name="tel"/>
                <ErrorMessage name="tel" component="div" className={styles.errorMessageData}/>
              </label>

              <label className={`${styles.labelDataOther}`}>
                <span className={styles.spanDataOther}>Город</span>
                <Field className={`${styles.inputFieldDataOther} h-5`} type="text" name="country"/>
                <ErrorMessage name="country" component="div" className={styles.errorMessageData}/>
              </label>


              <label className="block relative rounded col-start-1 col-end-3 w-full">
                <span className={styles.spanDataOther}>Сообщение</span>
                <Field className={`${styles.inputFieldDataOther} h-16 border-1`} as="textarea" cols="6" name="text"/>
                <ErrorMessage name="text" component="div" className={styles.errorMessageData}/>
              </label>
            </div>

            {/* Чекбокс Политики конфедициальности */}
            <label className="flex relative items-start md:pt-1 mb-4 md:mb-3 px-5 lg:px-0">
              <Field className="rounded text-gray-400 border-gray-800 mr-3 md:mr-6 outline-0" type="checkbox"
                     name="agreement"/>
              <span className="text-[10px] inline-block">Я согласен(на), что фирма использует мои личные данные на основе
                <a href="" className="text-lime-400 block md:text-center">Политики конфедициальности</a>
              </span>
              <ErrorMessage name="agreement" component="div" className={styles.errorMessageData}/>
            </label>


            <div className="flex items-center">
              <button type="submit"
                      disabled={isSubmitting}
                      className="bg-lime-400 disabled:bg-gray-400 hover:opacity-60 rounded-md text-center text-[10px] text-white w-48 py-1 ml-[100px]">
                Отправить
              </button>
            </div>

            <div className="absolute ml-[120px] w-[100px]">
              {
                formResponseInitialized
                &&
                <div className="relative top-0 left-0">
                  <LoadingSpinner />
                </div>
              }
              {
                (formResponseText !== '')
                &&
                <div className="text-xs text-lime-800 w-40 text-center">{formResponseText}</div>
              }
            </div>
          </Form>

        )}

      </Formik>
    </section>
  );
};

export default React.memo(FormCar);