import { useState } from "react";

function Register() {
    const [mail, setMail] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem('mail', JSON.stringify(mail));
        setMail("")
    }
    return (
        <div className="register-container">
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mail">Enter your email: </label>
                <input type="email" name="mail" onChange={(e) => setMail(e.target.value)} placeholder="abc@gmail.com" value={mail}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register;