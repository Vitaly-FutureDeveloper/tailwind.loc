export type FormType = {
  action: string,
  id: number,
  image?: File | {},

  brandMachine: string,
  modelMachine: string,
  motorMachine: string,
  yearMachine: string,
  fuelMachine: string,
  KPPMachine: string,
  mileageMachine: string,
  technicalInspectionMachine: string,
  desiredPriceMachine: string,

  name: string,
  email: string,
  country: string,
  tel?: string,

  text: string,

  agreement: boolean,
};