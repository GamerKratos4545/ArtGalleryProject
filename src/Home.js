import ArtList from './ArtList';
import useFetch from './useFetch';
const Home = () => {
	const { data: arts, isPending, error } = useFetch('http://localhost:8000/arts');
	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{arts && <ArtList arts={arts} title="Art List" />}
		</div>
	);
};

export default Home;
