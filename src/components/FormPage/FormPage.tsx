import React from "react"
import {useDispatch, useSelector} from "react-redux"
import LoadingSpinner from "../spinners/LoadingSpinner/LoadingSpinner"
import {getFormResponseInitialized, getFormResponseText} from "../../redux/form-reducer/form-selectors";
import {sendFormTC} from "../../redux/form-reducer/form-reducer";

export const ProductList: React.FC = () => {
  const dispatch = useDispatch<any>();

  const formResponseText = useSelector(getFormResponseText);
  const formResponseInitialized = useSelector(getFormResponseInitialized);

  const sendForm = () => {
    dispatch(sendFormTC({}));
  };


  return (

    !formResponseInitialized ?
      <LoadingSpinner/>

      :

      <section className="">
      </section>
  )
}

export default React.memo(ProductList)