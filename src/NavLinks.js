import { Link } from 'react-router-dom';

const NavLinks = () => {
	return (
		<div className="nav">
			<Link to="/path1">Input page 1</Link>
			<Link to="/path2">Input page 2</Link>
		</div>
	);
};

export default NavLinks;
