import { Link } from 'react-router-dom';

const ArtList = (props) => {
	const { arts, title } = props;
	return (
		<div className="art-list">
			<h2>{title}</h2>
			{arts.map((art) => {
				return (
					<Link to={`/arts/${art.id}`}>
					<div className="art-preview" key={art.id}>
							<div className="left">
								<h2>{art.title}</h2>
								<p>Written by {art.artist}</p>
							</div>
							<div className="right">
								<img src={art.image}  alt="image"/>
							</div>
					</div>
					</Link>
				);
			})}
		</div>
	);
};

export default ArtList;
