import { useState } from 'react'

import { useLogin } from '../hooks/useLogin'
export default function LoginForm({closeModal}){

    //form inputs 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { error, isPending, login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isSuccess = await login(email, password)
        if (isSuccess) {
            closeModal()
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Email:</span>
                    <input required type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Password:</span>
                    <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                {!isPending && <button className="btn-primary">Log in</button>}
                {isPending && <button disabled className="btn-primary">Logging in...</button>}
                
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    )
}