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
	const [formData, setFormData] = useState<SignUpFormData>({
		username: '',
		password: '',
		confirmPassword: '',
		email: '',
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
		email: '',
		confirmPassword: '',
	});

	const dispatch: any = useDispatch();
	const navigate = useNavigate();

	const validateInput = (name: string, value: any) => {
		// let errorMessage = '';
		// if (name === 'username') {
		// 	if (value.length < 8) {
		// 		errorMessage = 'Username must be at least 8 characters long.';
		// 	}
		// } else if (name === 'password') {
		// 	if (value.length < 8) {
		// 		errorMessage = 'Password must be at least 8 characters long.';
		// 	} else if (!/\d/.test(value)) {
		// 		errorMessage = 'Password must contain at least one number.';
		// 	} else if (!/[!@#$%^&*]/.test(value)) {
		// 		errorMessage = 'Password must contain at least one special character.';
		// 	} else if (!/[A-Z]/.test(value)) {
		// 		errorMessage = 'Password must contain at least one uppercase letter.';
		// 	}
		// } else if (name === 'confirmPassword') {
		// 	if (value !== password.current.value) {
		// 		errorMessage = 'Passwords do not match.';
		// 	}
		// } else if (name === 'email') {
		// 	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		// 	if (!emailRegex.test(value)) {
		// 		errorMessage = 'Email is not valid.';
		// 	}
		// }
		// setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
		const errors: SignUpFormErrors = {};
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
		if (!emailRegex.test(formData.email)) {
			errors.email = 'Email is not valid.';
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
			// const userToLogin: any = { password };

			// if (!isLogin) {
			// 	dispatch(signup({ username, password, email }));
			// } else {
			// 	dispatch(login({ ...userToLogin }));
			// }

			// navigate('/home');
			setFormErrors({ username: '', password: '', email: '', confirmPassword: '' });
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
