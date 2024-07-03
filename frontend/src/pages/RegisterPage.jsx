import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'



function RegisterPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signUp, isAuthenticated, errors: registerErrors } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks")
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signUp(values)
    })

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>

                {registerErrors.map((error, i) => (
                    <div className="bg-red-500 p-2 text-white" key={i}>
                        {error}
                    </div>))}

                <h1 className="text-3xl my-2 text-white font-bold">Register</h1>

                <form onSubmit={onSubmit}>
                    <input type="text" {...register('username', { required: true })} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='Username' />
                    {errors.username && (<p className="text-red-500">Username Is Required</p>)}

                    <input type="text" {...register('email', { required: true })} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='Email' />
                    {errors.email && (<p className="text-red-500">Email Is Required</p>)}

                    <input type="password" {...register('password', { required: true })} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='Password' />
                    {errors.password && (<p className="text-red-500">Password Is Required</p>)}
                    <button type="submit" className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'>Register</button>
                </form>
                <p className='flex gap-x-2 justify-between'>Already Have An Account? <Link to="/login" className='text-sky-500'>Sign In</Link></p>
            </div>
        </div>
    )
}

export default RegisterPage