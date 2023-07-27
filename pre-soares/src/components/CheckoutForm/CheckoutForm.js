import { useState } from "react";

const CheckoutForm =({ onConfirm}) => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault ()

        const userDate = {
            name,phone,email
        }

        onConfirm(userDate)
    }
    return (
        <div className="Container">
        <form onSubmit={handleConfirm} className='Form'>
            <label className="Label">
                Nombre
                <input className="Input" type='text' value={name}
                onChange={({ target}) => setName (target.value)}>
                </input> 
            </label>

            <label className="Label">
                Telefono
                <input className="Input" type='text' value={phone}
                onChange={({ target}) => setPhone (target.value)}>
                </input> 
            </label>

            <label className="Label">
                E-mail
                <input className="Input" type='text' value={email}
                onChange={({ target}) => setEmail (target.value)}>
                </input> 
            </label>

        </form>

        </div>
    )
}

export default CheckoutForm;