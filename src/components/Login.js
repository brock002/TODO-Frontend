import { useState } from "react"
import axios from "../axios"

const Login = ({
	setToken,
	setIsAuthenticated,
	setRegistering,
	setLoading,
}) => {
	const [LoginUser, setLoginUser] = useState("")
	const [LoginPass, setLoginPass] = useState("")

	const login = e => {
		e.preventDefault()
		setLoading(true)

		axios
			.post("login/", { username: LoginUser, password: LoginPass })
			.then(response => {
				setToken(response.data.token)
				setIsAuthenticated(true)
				setLoading(false)
			})
	}

	return (
		<>
			<form onSubmit={login} method="post" className="sub-container">
				<h3 className="title-basic-underline">LOGIN</h3>
				<div className="flexbox">
					<div className="form-group">
						<label htmlFor="username" className="form-label">
							Enter username:
						</label>
						<input
							type="text"
							name="username"
							value={LoginUser}
							onChange={e => setLoginUser(e.target.value)}
							className="form-input"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password" className="form-label">
							Enter password:
						</label>
						<input
							type="password"
							name="password"
							value={LoginPass}
							onChange={e => setLoginPass(e.target.value)}
							className="form-input"
							required
						/>
					</div>
				</div>
				<button type="submit" className="btn btn-block">
					Log In
				</button>
				<p className="margin-top">
					Don't have an account? <br />
					<button
						onClick={() => setRegistering(true)}
						className="btn btn-hipster"
					>
						Register here
					</button>
				</p>
			</form>
		</>
	)
}

export default Login
