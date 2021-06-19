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
						<input
							type="text"
							name="username"
							value={LoginUser}
							onChange={e => setLoginUser(e.target.value)}
							className="form-input"
							placeholder="Username"
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							name="password"
							value={LoginPass}
							onChange={e => setLoginPass(e.target.value)}
							className="form-input"
							placeholder="Password"
							required
						/>
					</div>
				</div>
				<input type="submit" value="Log In" className="btn btn-block" />
				<p className="margin-top">
					Don't have an account? <br />
					<button
						type="button"
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
