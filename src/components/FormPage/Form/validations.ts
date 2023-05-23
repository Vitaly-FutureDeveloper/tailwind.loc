import * as Yup from 'yup';

const simpleText = () => Yup.string();

const simpleTextRequired = () => Yup.string()
  .min(2, 'Минимум 2 символа')
  .max(20, 'Максимум 20 символов')
  .required('Обязательное поле');

const simpleBooleanRequired = () => Yup.boolean()
  .required('Согласие является обязательным...');


export const SigninSchema = Yup.object({
  image: Yup.object(),
  brandMachine: simpleText(),
  modelMachine: simpleText(),
  motorMachine: simpleText(),
  yearMachine: simpleText(),
  fuelMachine: simpleText(),
  KPPMachine: simpleText(),
  mileageMachine: simpleText(),
  technicalInspectionMachine: simpleText(),
  desiredPriceMachine: simpleTextRequired(),

  name: simpleText(),
  email: simpleText(),
  country: simpleText(),
  tel: simpleTextRequired(),

  text: simpleText(),

  agreement: simpleBooleanRequired(),
});