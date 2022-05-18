import React from 'react';
import { useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();

    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    if (loading || gLoading || updating) {
        return <button className="btn loading">loading</button>
    }

    let signInError;
    if (error || gError || updatingError) {
        signInError = <p>{error?.message || gError?.message}</p>
    }

    if (user || gUser) {
        console.log(user || gUser)
        navigate(from, { replace: true });
    }

    const onSubmit = async data => {
        console.log(data)
        await signInWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        navigate('/appointment')
    };

    return (
        <div className='flex justify-center items-center h-screen'>

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    // value: /[A-Za-z]{3}/,
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                    // JS only: <p>error message</p> TS only support string
                                }
                            })} placeholder="Email" className="input input-bordered w-full max-w-xs" />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password" {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters longer'
                                }
                            })} placeholder="Password" className="input input-bordered w-full max-w-xs" />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>

                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs' type="submit" value='Login' />

                    </form>
                    <p>New to doctors portal? <Link to='/signup'>Create new account</Link> </p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;