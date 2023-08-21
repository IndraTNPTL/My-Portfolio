import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { github, link } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Component for rendering each project card
const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	live_link,
}) => {
	return (
		<motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[230px]">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						{/* Source code link */}
						<div
							onClick={() =>
								window.open(source_code_link, "_blank")
							}
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={github}
								alt="github"
								className="w-1/2 h-1/2 object-contain"
							/>
						</div>

						{/* Live link */}
						<div
							onClick={() => window.open(live_link, "_blank")}
							className="black-gradient ml-1.5 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={link}
								alt="live url"
								className="w-1/2 h-1/2 object-contain"
							/>
						</div>
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 ml-2 text-secondary text-[14px] leading-[1.9]">
						{description}
					</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{/* Render tags */}
					{tags.map((tag) => (
						<p
							key={tag.name}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Projects = () => {
	return (
		<>
			{/* Section heading */}
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My Work</p>
				<h2 className={`${styles.sectionHeadText} pink-text-gradient`}>
					Projects.
				</h2>
			</motion.div>

			<div className="w-full flex">
				{/* Description */}
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					Following projects showcase my skills and experience through
					real-world examples of my work. Each project is briefly
					described with links to code repositories and live demos.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{/* Render project cards */}
				{projects.map((project, index) => (
					<ProjectCard
						key={`project-${index}`}
						index={index}
						{...project}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Projects, "projects");
