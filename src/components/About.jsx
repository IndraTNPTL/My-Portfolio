import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/";

// <a href="https://fr.vecteezy.com/png-gratuit/instagram-logo">Instagram Logo PNGs par Vecteezy</a>

const ServiceCard = ({ index, title, icon, link }) => {
	return (
		<Tilt className="xs:w-[12em] w-full">
			<motion.div
				variants={fadeIn("right", "spring", index * 0.5, 0.75)}
				className="w-full pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer"
				onClick={() => window.open(link, "_blank")}
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-tertiary rounded-[20px] py-5 px-10 min-h-[180px] flex justify-evenly items-center flex-col"
				>
					<img
						src={icon}
						alt={title}
						className="w-14 h-14 object-contain"
					/>
					<h3 className="text-white text-[1em] font-[600] text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Who am I?</p>
				<h2 className={`${styles.sectionHeadText} pink-text-gradient`}>
					Purpose.
				</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[1.2em] max-w-3xl leading-[30px]"
			>
				With over five years of experience in digital project management
				and UX/UI, I have had the privilege of collaborating on exciting
				and innovative initiatives. However, being eager to learn and
				explore more in the Tech world has led me to a crucial step:
				merging my current skills with the power of mobile and web
				development. At this stage of my career, my aspiration is to
				become a strong & versatile developer, contribute to provide
				better digital tools & support for meaningful projects.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10 justify-center">
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
