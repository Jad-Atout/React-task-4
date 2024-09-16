import {useFormik} from "formik";
import axios from "axios";

export default function Login() {
    const formik = useFormik({initialValues:{
        email:"",
            password:""
        },
        onSubmit:async (values)=>{
        const data = await axios.post('https://ecommerce-node4.onrender.com/auth/signin',formik.values)
        console.log('hi')

        },
        validate:(values)=>{
        let errors = {}
            if(values.email.length <10){
                errors.email = "Enter a valid email"
            }
            if(values.password.length <5){
                errors.password = "Enter a valid password"
            }
            return errors
        }
    })
    return (
        <>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className={'mb-3 d-flex'}>
                        <label htmlFor={'email'}>User Email</label>
                        <input type={'email'}
                               className={'form-control w-auto'}
                               id={'email'} value={formik.values.email}
                               onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        {(formik.touched.email && formik.errors.email)?<div className={'alert alert-danger '}>{formik.errors.email}</div>:null}
                    </div>
                    <div className={'mb-3 d-flex'}>
                        <label htmlFor={'password'}>Password</label>
                        <input type={'password'}
                               className={'form-control w-auto'}
                               id={'password'}
                               value={formik.values.password}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                        />
                        {(formik.touched.password && formik.errors.password)?<div className={'alert alert-danger '}>{formik.errors.password}</div>:null}
                    </div>
                    <button type={'submit'} className={'btn btn-info'}>submit</button>

                </form>
            </div>
        </>
    )
}