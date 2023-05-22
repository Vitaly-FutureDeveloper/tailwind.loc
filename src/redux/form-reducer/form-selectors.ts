import {createSelector} from 'reselect'
import {AppStateType} from "../store"

const getFormResponseTextSelector = (state: AppStateType) => {
  return state.formPage.sendForm.responseText
}
export const getFormResponseText = createSelector(getFormResponseTextSelector, (products) => products)


const getFormResponseInitializedSelector = (state: AppStateType) => {
  return state.formPage.sendForm.initilizedSendForm
}
export const getFormResponseInitialized = createSelector(getFormResponseInitializedSelector, (initialized) => initialized)
