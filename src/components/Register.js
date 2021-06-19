import { useState, useRef } from "react"
import axios from "../axios"

const Register = ({ setRegistering }) => {
	const alertRef = useRef(null)
	const [NewUser, setNewUser] = useState({
		username: "",
		email: "",
		password: "",
		password2: "",
	})

	const handleChange = e =>
		setNewUser({ ...NewUser, [e.target.name]: e.target.value })

	const handleSubmit = e => {
		e.preventDefault()
		if (NewUser.password !== NewUser.password2) {
			alertRef.current.innerText = "passwords didn't match!!!"
		} else {
			const data = {
				username: NewUser.username,
				email: NewUser.email,
				password: NewUser.password,
			}
			axios.post("user/new/", data).then(() => setRegistering(false))
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="sub-container">
				<h3 className="title-basic-underline">REGISTER</h3>
				<div className="flexbox">
					<div className="form-group">
						<input
							type="text"
							name="username"
							value={NewUser.username}
							onChange={handleChange}
							className="form-input"
							placeholder="Username"
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							name="email"
							value={NewUser.email}
							onChange={handleChange}
							className="form-input"
							placeholder="Email"
							required
						/>
					</div>
				</div>
				<div className="flexbox">
					<div className="form-group">
						<input
							type="password"
							name="password"
							value={NewUser.password}
							onChange={handleChange}
							className="form-input"
							placeholder="Password"
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							name="password2"
							value={NewUser.password2}
							onChange={handleChange}
							className="form-input"
							placeholder="Confirm Password"
							required
						/>
					</div>
				</div>
				<p ref={alertRef} className="form-alert"></p>
				<input type="submit" value="Register" className="btn btn-block" />
				<p className="margin-top">
					Already have an account? <br />
					<button
						type="button"
						onClick={() => setRegistering(false)}
						className="btn btn-hipster"
					>
						Login here
					</button>
				</p>
			</form>
		</>
	)
}

export default Register
