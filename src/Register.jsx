import './assets/register.css'
import {useFormik} from "formik";
import axios from "axios";
export default function Register() {
    const formik = useFormik({initialValues:
            {
            userName:"",
            email:"",
            password:""
        }, onSubmit:async (values)=>{
         const data = await axios.post('https://ecommerce-node4.onrender.com/auth/signup',values)
        },
        validate:(values)=>{
        let errors = {}
            if(values.userName.length<3){
                errors.userName = "Enter a valid user name"
            }
            if(values.email.length<10){
                errors.email = "Enter a valid user email"
            }
            if(values.password.length<5){
                errors.password = "Enter a valid user password"
            }
            return errors

        }})

    return (
        <>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                    <div className={'mb-3 d-flex align-items-center '}>
                    <label htmlFor={'userName'} className={'form-label fw-bold'}>User Name</label>
                    <input type={'text'}
                           className={`form-control w-auto mx-2`}
                           onChange={formik.handleChange}
                           value={formik.values.userName}
                           id={'userName'}
                            onBlur={formik.handleBlur}/>
                        {(formik.touched.userName && formik.errors.userName)?<div className={'alert alert-danger'}>{formik.errors.userName}</div>:null}
                    </div>
                    <div className={'mb-3 d-flex align-items-center'}>
                    <label htmlFor={'email'} className={'form-label fw-bold'}>Email</label>
                    <input type={'email'}
                           className={'form-control w-auto mx-2'}
                           onChange={formik.handleChange}
                           value={formik.values.email}
                           id={'email'}
                           onBlur={formik.handleBlur}
                    />
                        {(formik.touched.email && formik.errors.email)?<div className={'alert alert-danger'}>{formik.errors.email}</div>:null}
                    </div>
                    <div className={'mb-3 d-flex align-items-center'}>
                    <label htmlFor={'password'} className={'form-label fw-bold'}>Password</label>
                    <input type={'password'}
                           className={'form-control w-auto mx-2'}
                           onChange={formik.handleChange}
                           value={formik.values.password}
                           id={'password'}
                           onBlur={formik.handleBlur}
                    />
                        {(formik.touched.password && formik.errors.password)?<div className={'alert alert-danger'}>{formik.errors.password}</div>:null}
                    </div>
                        <button type={'submit'} className={'btn btn-info d-inline'}>Submit</button>
                    </div>
                </form>
        </>
    )
}