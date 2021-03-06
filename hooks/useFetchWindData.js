import useSWR from 'swr';
import fetcher from '../utilities/fetcher';

const useFetchWindData = (location) => {
	const {data, error} = useSWR(`/.netlify/functions/weather?location=${location}`, fetcher);

	return {
		weather: data,
		isLoading: !error && !data,
		isError: error
	};
};

export default useFetchWindData;
