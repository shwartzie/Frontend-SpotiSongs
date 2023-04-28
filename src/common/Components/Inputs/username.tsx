import React from 'react';

interface UsernameProps {
	errors: any;
	validateInput: (name: string, value: string) => void;
	username: string;
	handleChange: (name: string, value: string) => void;
}
export const Username = ({ errors, handleChange, validateInput, username }: UsernameProps) => {
	return (
		<>
			<div className="form-group">
				<label className="form-label" htmlFor="username">
					Username
				</label>
				<input
					className={`form-input ${errors.username && 'error'}`}
					type="text"
					id="username"
					name="username"
					value={username}
					onChange={(e) => {
						// console.log(e.target.name)
						handleChange(e.target.name, e.target.value)
					}}
					onBlur={(e: any) => validateInput(e.target.name, e.target.value)}
				/>
				{errors.username && <span className="error-message">{errors.username}</span>}
			</div>
		</>
	);
};
