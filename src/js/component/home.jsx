import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Cardlist } from "./cardlist";
import { Footer } from "./footer";
//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<Cardlist/>
			<Footer/>
		</div>
	);
};

export default Home;
