import { useState } from "react";

export default function Form({ handleSubmit, setInputs }) { 
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input 
                    type="text" 
                    name="nombre" 
                    value={nombre}
                    onChange={(e) => setInputs(e, setNombre)}
                />
            </label>
            <label>
                Apellido:
                <input 
                    type="text" 
                    name="apellido" 
                    value={apellido}
                    onChange={(e) => setInputs(e, setApellido)}
                />
            </label>
            <label>
                Email:
                <input 
                    type="email" 
                    name="nombre" 
                    value={email}
                    onChange={(e) => setInputs(e, setEmail)}
                />
            </label>
            <label>
                Telefono:
                <input 
                    type="number" 
                    name="telefono" 
                    value={telefono}
                    onChange={(e) => setInputs(e, setTelefono)}
                />
            </label>
            <button>Submit</button>
        </form>
    )
}