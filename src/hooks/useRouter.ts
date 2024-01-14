import { useNavigate } from 'react-router-dom';

export const useRouter = () => {
	const navigate = useNavigate();

	const navToHome = () => navigate('/');
	const navToOrder = () => navigate('/order');
	const navToComplete = () => navigate('/complete');
	const navToError = () => navigate('/error');

	return {
		navToHome,
		navToOrder,
		navToComplete,
		navToError,
	};
};
