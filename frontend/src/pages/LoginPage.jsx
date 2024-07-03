import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const { signIn, errors: signInErrors, isAuthenticated } = useAuth()

    const onSubmit = handleSubmit(data => {
        signIn(data)
    })

    useEffect(() => {
        if(isAuthenticated) navigate('/tasks')
    }, [isAuthenticated])

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>

                {signInErrors.map((error, i) => (
                    <div className="bg-red-500 p-2 text-white" key={i}>{error}</div>
                ))}


                <h1 className="text-3xl text-white font-bold my-2">Login</h1>

                <form onSubmit={onSubmit}>
                    <input type="text" {...register('username', { required: true })} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='Username' />
                    {errors.username && (<p className="text-red-500">Username Is Required</p>)}

                    <input type="password" {...register('password', { required: true })} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='Password' />
                    {errors.password && (<p className="text-red-500">Password Is Required</p>)}
                    <button type="submit" className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'>Login</button>
                </form>
                <p className='flex gap-x-2 justify-between'>Don't Have An Account? <Link to="/register" className='text-sky-500'>Sign Up</Link></p>
            </div>
        </div>
    )
}

export default LoginPage