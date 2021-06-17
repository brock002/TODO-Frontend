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
			axios.post("user/new/", data).then(resp => {
				console.log(resp)
				setRegistering(false)
			})
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="sub-container">
				<h3 className="title-basic-underline">REGISTER</h3>
				<div className="flexbox">
					<div className="form-group">
						<label htmlFor="username" className="form-label">
							Enter Username:
						</label>
						<input
							type="text"
							name="username"
							value={NewUser.username}
							onChange={handleChange}
							className="form-input"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email" className="form-label">
							Enter Email:
						</label>
						<input
							type="email"
							name="email"
							value={NewUser.email}
							onChange={handleChange}
							className="form-input"
							required
						/>
					</div>
				</div>
				<div className="flexbox">
					<div className="form-group">
						<label htmlFor="password" className="form-label">
							Enter Password:
						</label>
						<input
							type="password"
							name="password"
							value={NewUser.password}
							onChange={handleChange}
							className="form-input"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password2" className="form-label">
							Confirm Password:
						</label>
						<input
							type="password"
							name="password2"
							value={NewUser.password2}
							onChange={handleChange}
							className="form-input"
							required
						/>
					</div>
				</div>
				<p ref={alertRef} className="form-alert"></p>
				<input type="submit" value="Register" className="btn btn-block" />
			</form>
		</>
	)
}

export default Register
