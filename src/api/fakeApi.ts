import {ResponseInterface} from "../types/ReduxTypes";
import {FormType} from "../types/FormType";

const getResponse: (datas:FormType) => ResponseInterface = (datas:FormType) => ({
  status: 200,
  data: {
    text: "Успешно обработан запрос. Все данные в консоле",
    datas: datas
  }
})

export function getEndpointApi(object: any): Promise<ResponseInterface> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getResponse(object)), 1550)
  })
}