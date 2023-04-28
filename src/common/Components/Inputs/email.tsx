import React from 'react';

interface EmailProps {
	errors: any;
	validateInput: (name: string, value: string) => void;
	email: string;
	handleChange: (name: string, value: string) => void;
}

export const Email = ({ errors, handleChange, validateInput, email }: EmailProps) => {
	return (
		<>
			<div className="form-group">
				<label className="form-label" htmlFor="email">
					Email
				</label>
				<input
					className={`form-input ${errors.email && 'error'}`}
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={(e) => handleChange(e.target.name, e.target.value)}
					onBlur={(e) => validateInput(e.target.name, e.target.value)}
				/>
				{errors.email && <span className="error-message">{errors.email}</span>}
			</div>
		</>
	);
};
