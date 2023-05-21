import {FormPageInterface} from "../../types/ReduxTypes"
import {BaseThunkType, InferActionsTypes} from "../store"
import {getEndpointApi} from "../../api/fakeApi";


const initialState = {
  sendForm: {
    initilizedSendForm: true,
    responseText: '',
  },
} as FormPageInterface


export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionsTypes>


const formReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

  switch (action.type) {

    case "SN/productList/INITIALIZED_SEND_FORM": {
      return {
        ...state,
        sendForm: {
					...state.sendForm,
          initilizedSendForm: action.initialized
        },
      }
    }

		case "SN/productList/SEND_FORM_TEXT": {
      return {
        ...state,
        sendForm: {
					...state.sendForm,
					responseText: action.text
        },
      }
    }


    default:
      return state
  }
}

export const actions = {
  sendFormText: (text: string) => ({
    type: "SN/productList/SEND_FORM_TEXT",
		text
  }) as const,

  initializedSendForm: (initialized: boolean) => ({
    type: "SN/productList/INITIALIZED_SEND_FORM",
    initialized
  }) as const,
}

export const sendFormTC = (object:any): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.initializedSendForm(false))
    try {
			const response = await getEndpointApi({});
			dispatch(actions.sendFormText(response.data.text));
      dispatch(actions.initializedSendForm(true))
    } catch (e) {
      throw e
    }
  }
}


export default formReducer;