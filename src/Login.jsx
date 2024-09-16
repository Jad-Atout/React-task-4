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

        }
    })
    return (
        <>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className={'mb-3 d-flex'}>
                        <label htmlFor={'email'}>User Email</label>
                        <input type={'email'} className={'form-control w-auto'} id={'email'} value={formik.values.email} onChange={formik.handleChange}/>
                    </div>
                    <div className={'mb-3 d-flex'}>
                        <label htmlFor={'password'}>Password</label>
                        <input type={'password'} className={'form-control w-auto'} id={'password'} value={formik.values.password} onChange={formik.handleChange}/>
                    </div>
                    <button type={'submit'} className={'btn btn-info'}>submit</button>

                </form>
            </div>
        </>
    )
}