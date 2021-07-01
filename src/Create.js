import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
	const [ title, setTitle ] = useState('');
	const [ body, setBody ] = useState('');
	const [ artist, setArtist ] = useState('Priyanshu');
	const [image, setImage] = useState('');
	const [ isPending, setIsPending ] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const art = { title, body, artist, image };

		setIsPending(true);

		setTimeout(() => {
			fetch('http://localhost:8000/arts', {
				method  : 'POST',
				headers : { 'Content-Type': 'application/json' },
				body    : JSON.stringify(art)
			}).then(() => {
				console.log('new art added');
				setIsPending(false);
				history.push('/');
			});
		}, 300);
	};

	return (
		<div className="create">
			<h2>Create a New Art</h2>
			<form onSubmit={handleSubmit}>
				<label>Art title : </label>
				<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
				<label>Art Body : </label>
				<textarea value={body} onChange={(e) => setBody(e.target.value)} required />
				<label>Art Image : </label>
				<input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
				<label>Art artist : </label>
				<select value={artist} onChange={(e) => setArtist(e.target.value)}>
					<option value="Priyanshu">Priyanshu</option>
					<option value="Hrithik">Hrithik</option>
					<option value="Prakhar">Prakhar</option>
				</select>
				{!isPending && <button>Add Art</button>}
				{isPending && <button disabled>Adding art...</button>}
			</form>
		</div>
	);
};

export default Create;
