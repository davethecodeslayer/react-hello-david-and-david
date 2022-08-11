import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Cardlist } from "./cardlist";
import { Footer } from "./footer";
//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const cardList = [
	{ name: "Card 1" },
	{ name: "Card 2" },
	{ name: "Card 3" },
	{ name: "Card 4" },
];

const Home = () => {
	return (
		<div>
			<Navbar/>
			<div className="mt-4 mx-5">
				<Jumbotron/>
			</div>
			<div className="mt-4 mx-5">
				<Cardlist cardList={cardList} />
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
