const Register = () => {
	return (
		<div className="x-margin-div">
			<h3 className="underline-text">REGISTER</h3>

			<form method="post" className="form-basic">
				<label htmlFor="username">Enter Username:</label>
				<input type="text" name="username" />
				<label htmlFor="email">Enter Email:</label>
				<input type="email" name="email" />
				<label htmlFor="password">Enter Password:</label>
				<input type="password" name="password" />
				<label htmlFor="password">Confirm Password:</label>
				<input type="password" name="password2" />
				<button type="submit">Register</button>
			</form>
		</div>
	)
}

export default Register
