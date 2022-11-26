import { useEffect } from "react"
import { getPositionInfo } from "../../services/api";
import { useState } from "react";
import { changeCurrency } from "../../services/api";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
 
 const SignupSchema = Yup.object().shape({
   currency: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required')
 });

export const Home = () => {
    const [currency, setCurrency] = useState('USD');
    const [changeResult, setChangeResult] = useState('');
    const [toChangeCurrency, setToChangeCurrency] = useState('');

    useEffect(() => {
        function success(pos) {
        const crd = pos.coords;

            getPositionInfo(crd.latitude, crd.longitude).then(({ results }) => {
                setCurrency(results[0].annotations.currency.iso_code);
        } )}

        navigator.geolocation.getCurrentPosition(success);
    }, [])
    
    
    return (
        <div>
            <p>Current currency { currency }</p>
          
        <Formik
       initialValues={{
         currency: '',
         
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
           const name = values.currency.split(' ');
           console.log(name);
           changeCurrency(name[3], name[1], name[0]).then(data => {
            setChangeResult(data.result);
           }).catch(error => {
               Notify.failure('Wrong input! Please input text like "15 USD in UAH"');
            console.log(error)
        });
        setToChangeCurrency(name[3])
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="currency" />
           {errors.currency && touched.currency ? (
             <div>{errors.currency}</div>
           ) : null}
           <button type="submit">Exchange</button>
         </Form>
       )}
     </Formik>
            
            {changeResult && <p> You get {changeResult} {toChangeCurrency} </p>}
            
        </div>
    )
}