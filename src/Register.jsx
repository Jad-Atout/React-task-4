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
        }})

    return (
        <>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                    <div className={'mb-3 d-flex align-items-center '}>
                    <label htmlFor={'userName'} className={'form-label fw-bold'}>User Name</label>
                    <input type={'text'} className={`form-control w-auto mx-2`} onChange={formik.handleChange} value={formik.values.userName} id={'userName'}/>
                    </div>
                    <div className={'mb-3 d-flex align-items-center'}>
                    <label htmlFor={'email'} className={'form-label fw-bold'}>Email</label>
                    <input type={'email'} className={'form-control w-auto mx-2'} onChange={formik.handleChange} value={formik.values.email}id={'email'}/>
                    </div>
                    <div className={'mb-3 d-flex align-items-center'}>
                    <label htmlFor={'password'} className={'form-label fw-bold'}>Password</label>
                    <input type={'password'} className={'form-control w-auto mx-2'} onChange={formik.handleChange} value={formik.values.password} id={'password'}/>
                    </div>
                        <button type={'submit'} className={'btn btn-info d-inline'}>Submit</button>
                    </div>
                </form>
        </>
    )
}