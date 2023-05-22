import {ResponseInterface} from "../types/ReduxTypes";

const response: ResponseInterface = {
  status: 200,
  data: {
    text: "Успешно обработан запрос"
  }
}

export function getEndpointApi(object: any): Promise<ResponseInterface> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(response), 1550)
  })
}