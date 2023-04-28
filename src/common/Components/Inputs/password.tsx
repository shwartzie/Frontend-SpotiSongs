import React from 'react';

interface PasswordProps {
	errors: any;
	validateInput: (name: string, value: string) => void;
	password: string;
	handleChange: (name: string, value: string) => void;
}

export const Password = ({ errors, validateInput, password, handleChange }: PasswordProps) => {
	return (
		<>
			<div className="form-group">
				<label className="form-label" htmlFor="password">
					Password
				</label>
				<input
					className={`form-input ${errors.password && 'error'}`}
					type="password"
					id="password"
					name="password"
					value={password}
					onChange={(e) => handleChange(e.target.name, e.target.value)}
					onBlur={(e) => validateInput(e.target.name, e.target.value)}
				/>
				{errors.password && <span className="error-message">{errors.password}</span>}
			</div>
		</>
	);
};
