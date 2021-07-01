import { useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const ArtDetails = () => {
	const [ isDeleting, setIsDeleting ] = useState(false);
	const history = useHistory();

	const handleDelete = (e) => {
		setIsDeleting(true);
		setTimeout(() => {
			fetch('http://localhost:8000/arts/' + id, {
				method : 'DELETE'
			}).then(() => {
				setIsDeleting(false);
				history.push('/');
			});
		}, 500);
	};

	const { id } = useParams();
	const { data: art, error, isPending } = useFetch('http://localhost:8000/arts/' + id);
	return (
		<div className="art-details">
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{art && (
				<article>
					<h2>{art.title}</h2>
					<img src={art.image}  alt="image"/>
					<p>Written by {art.artist}</p>
					<div>{art.body}</div>
					{!isDeleting && <button onClick={handleDelete}>Delete</button>}
					{isDeleting && <button>Deleting...</button>}
				</article>
			)}
		</div>
	);
};

export default ArtDetails;
