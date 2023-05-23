import {FormType} from "./FormType";

export interface ResponseInterface {
  status: number,
  data: DataResponseType,
};

type DataResponseType = {
  text: string,
  datas: FormType,
};


export interface FormPageInterface {
  sendForm: {
    initilizedSendForm: boolean,
    responseText: string,
  },
};
