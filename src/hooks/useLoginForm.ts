import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login, signup } from '../store/actions/userActions';
import { useLocation, useNavigate } from 'react-router-dom';

interface useLoginFormProps {
	isLogin: boolean;
}
interface SignUpFormData {
	username: string;
	password: string;
	email: string;
	confirmPassword: string;
}

interface SignUpFormErrors {
	username?: string;
	password?: string;
	email?: string;
	confirmPassword?: string;
}

export const useLoginForm = ({ isLogin }: useLoginFormProps) => {
	const location = useLocation();

	const { email, id } = location.state;

	const [formData, setFormData] = useState<SignUpFormData>({
		username: id || '',
		password: '',
		confirmPassword: '',
		email: email || '',
	});
	const handleChange = (name: string, value: string) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const [formErrors, setFormErrors] = useState<SignUpFormErrors>({
		username: '',
		password: '',
		confirmPassword: '',
	});

	const dispatch: any = useDispatch();
	const navigate = useNavigate();

	const validateInput = (name: string, value: any) => {
		const errors: SignUpFormErrors = {};
		if (formData.username.length < 8) {
			errors.username = 'Username must be at least 8 characters long.';
		} else if (formData.password.length < 8) {
			errors.password = 'Password must be at least 8 characters long.';
		} else if (!/\d/.test(formData.password)) {
			errors.password = 'Password must contain at least one number.';
		} else if (!/[!@#$%^&*]/.test(formData.password)) {
			errors.password = 'Password must contain at least one special character.';
		} else if (!/[A-Z]/.test(formData.password)) {
			errors.password = 'Password must contain at least one uppercase letter.';
		}

		if (formData.password !== formData.confirmPassword) {
			errors.confirmPassword = 'Passwords do not match.';
		}

		setFormErrors((prevErrors) => ({ ...prevErrors, [name]: errors[name] }));
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(formData);

		// Check if there are any errors
		if (Object.values(formErrors).every((val: string) => val === '')) {
			// if (!isLogin) {
			// 	dispatch(signup({...formData }));
			// } else {
			// 	dispatch(login({ ...formData }));
			// }

			// navigate('/home');
			setFormErrors({ username: '', password: '', confirmPassword: '' });
		}
	};
	// console.log(formData)
	return {
		username: formData.username,
		password: formData.password,
		email: formData.email,
		confirmPassword: formData.confirmPassword,
		errors: formErrors,
		handleSubmit,
		validateInput,
		handleChange,
	};
};
