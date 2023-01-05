import React from "react";
import Todo from "./Todo.jsx";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="to-do-input">
			<Todo />
		</div>
	);
};

export default Home;
