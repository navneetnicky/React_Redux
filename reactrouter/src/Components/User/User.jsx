import { useParams } from 'react-router-dom';
export const User = () => {
	const { userid } = useParams();
	return (
		<div className='bg-gray-700 text-white text-3x1 p-4'>User:{userid}</div>
	);
};
