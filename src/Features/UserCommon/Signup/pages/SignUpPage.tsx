import { ConfirmPassword } from 'common/Components/Inputs/confirm-password';
import { Email } from 'common/Components/Inputs/email';
import { Password } from 'common/Components/Inputs/password';
import { Username } from 'common/Components/Inputs/username';
import { useLoginForm } from 'hooks/useLoginForm';
import React from 'react';
export const SignUp = () => {
	const { username, password, email, confirmPassword, errors, handleSubmit, validateInput, handleChange }: any =
		useLoginForm({
			isLogin: false,
		});
	return (
		<div className="login-container">
			<form className="login-form" onSubmit={handleSubmit}>
				{/* setUsername={setUsername} */}
				<h1 className="form-title">Sign Up</h1>
				<Username
					errors={errors}
					handleChange={handleChange}
					validateInput={validateInput}
					username={username}
				/>
				<Password
					errors={errors}
					handleChange={handleChange}
					validateInput={validateInput}
					password={password}
				/>
				<ConfirmPassword
					errors={errors}
					handleChange={handleChange}
					validateInput={validateInput}
					confirmPassword={confirmPassword}
				/>
				<Email errors={errors} handleChange={handleChange} validateInput={validateInput} email={email} />
				<button className="form-button submit-btn" type="submit">
					Sign Up
				</button>
			</form>
		</div>
	);
};
