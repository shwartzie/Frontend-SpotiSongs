import React from 'react';

interface ConfirmPasswordProps {
	errors: any;
	validateInput: (name: string, value: string) => void;
	confirmPassword: string;
	handleChange: (name: string, value: string) => void;
}

export const ConfirmPassword = ({ errors, validateInput, confirmPassword, handleChange }: ConfirmPasswordProps) => {
	return (
		<>
			<div className="form-group">
				<label className="form-label" htmlFor="confirm-password">
					Confirm Password
				</label>
				<input
					className={`form-input ${errors.confirmPassword && 'error'}`}
					type="password"
					id="confirmPassword"
					name="confirmPassword"
					value={confirmPassword}
					onChange={(e) => handleChange(e.target.name, e.target.value)}
					onBlur={(e) => validateInput(e.target.name, e.target.value)}
					required
				/>
				{errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
			</div>
		</>
	);
};
