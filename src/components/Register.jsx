

function Register() {
    return (
        <div className="register-container">
            <h3>Register</h3>
            <form>
                <label htmlFor="mail">Enter your email: </label>
                <input type="email" name="mail" placeholder="abc@gmail.com"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register;