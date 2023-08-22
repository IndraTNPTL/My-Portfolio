import { BrowserRouter } from "react-router-dom";
import {
	About,
	Contact,
	Experience,
	Education,
	Hero,
	Navbar,
	Tech,
	Projects,
} from "./components";
import Stars from "./components/canvas/Stars";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center flex justify-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Projects />
				<Tech />
				<Experience />
				<div className="relative z-0">
					<Contact />
					<Stars />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
