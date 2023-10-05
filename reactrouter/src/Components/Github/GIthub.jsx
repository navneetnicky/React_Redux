import { redirect, useLoaderData } from 'react-router-dom';

export const GIthub = () => {
	const data = useLoaderData();
	return (
		<div className='text-center m-4 bg-gray-600 text-white p-4 text-3x1'>
			Github followers: {data.followers}
		</div>
	);
};

export const githubInfoLoder = async () => {
	if (true) {
		throw redirect('/');
	} else {
		const response = await fetch('https://api.github.com/users/navneetnicky');
		return response.json();
	}
};
