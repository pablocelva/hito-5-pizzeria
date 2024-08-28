import React from "react"
import { useState } from "react"
import { Button } from "react-bootstrap"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const validarFormulario = (evento) => {
        evento.preventDefault()
        
        // Validación de campos
        if (!email.trim() || !password.trim()) {
            setError("Todos los campos son obligatorios.")
            return
        }
        
        // Validación de longitud de la contraseña
        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres.")
            return
        }

        //Limpiar campos
        setError("")
        setEmail("")
        setPassword("")
        
        // Enviar datos
        alert(`¡Has logrado ingresar!`)
    }

    //manejo login y logout con useState (encontré esto investigando las posibilidades y me gustó)
    const [token, setToken] = useState(false)
    const handleLogin = () => {
        setToken(true)
    }
    const handleLogout = () => {
        setToken(false)
    }
    
    return (
        <>
            <form className="formulario" onSubmit={validarFormulario}>
                <h1>Login</h1>
                <div className="form-group">
                    <label>Email</label>
                    <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    />
                </div>
                {/* {error ? <p style={{color: "red"}}>Todos los campos son obligatorios.</p> : null} */}
                {error && <p style={{color: "red"}}>{error}</p>}
                    <Button type="submit" className="mx-auto btn btn-info text-light" onClick={handleLogin}>
                    Ingresar
                    </Button>
            </form>
        </>
    );
}
