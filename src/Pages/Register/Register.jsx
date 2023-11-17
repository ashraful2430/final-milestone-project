import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";



const Register = () => {
    const axiosPublic = useAxiosPublic()
    const { registerUser, handleUpdateProfile } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        registerUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                handleUpdateProfile(data.name)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    alert('user created successfully')
                                }
                            })
                    })

            })
    }



    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(1);
    }, [])



    const handleValidateCaptcha = () => {
        const value = captchaRef.current.value;
        if (validateCaptcha(value)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }
    return (
        <div>
            <Link to={'/'}>
                <button className="btn btn-outline">Home</button>
            </Link>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col lg:flex-row">
                    <div className="text-center w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    {...register("name", { required: true })}
                                    placeholder="email"
                                    className="input input-bordered" />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    {...register("email")}
                                    placeholder="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    {...register("password", { required: true, maxLength: 20, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
                                    placeholder="password"
                                    className="input input-bordered" required />
                                {errors.password?.type === 'required' && <span>Please give a valid password</span>}
                                {errors.password?.type === 'minLength' && <span>Password must be at least 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span>Password must be under 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span>Password must have one uppercase one lowercase one special character</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <LoadCanvasTemplate></LoadCanvasTemplate>
                                <input
                                    type="text"
                                    name="captcha"
                                    placeholder="Type the text above"
                                    ref={captchaRef}
                                    className="input input-bordered" required />
                                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-3">Validate</button>
                            </div>
                            <Link to={'/login'}><h3>Have an account? <span className="text-blue-500 font-semibold">Login</span></h3></Link>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Register" />
                            </div>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;