import React from 'react';
import PostsList from "../components/PostsList.jsx";
import './Home.css';  // Импортируем стили для компонента Home

const Home = () => {
	return (
		<div className="home-container">
			<h1 className="home-title">Welcome to the Posts Page</h1>
			<PostsList />
		</div>
	);
};

export default Home;
