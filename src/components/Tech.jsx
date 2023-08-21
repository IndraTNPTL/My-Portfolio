import React from "react";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((technology) => (
				<Tilt
					key={technology.name}
					options={{
						max: 70,
						scale: 1.2,
						speed: 450,
					}}
				>
					<div
						className="w-16 h-16 flex justify-center items-center"
						onClick={() => window.open(technology.link, "_blank")}
					>
						<img src={technology.icon} alt={technology.name} />
					</div>
				</Tilt>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
