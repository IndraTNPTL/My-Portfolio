import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";

// Component for the hero section
const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			{/* Hero content */}
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					{/* Placeholder elements */}
					{/* <div className="w-5 h-5 rounded-full bg-fourth" />
          <div className="w-1 sm:h-80 h-40 green-pink-gradient"></div> */}
				</div>

				<div>
					{/* Hero heading */}
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I'm{" "}
						<span className="pink-text-gradient">Indra</span>
					</h1>
					{/* Hero subheading */}
					<p
						className={`${styles.sectionSubText} mt-2 text-white-100 leading-[2.5]`}
					>
						Web & Mobile app Development <br /> Conversion Rate
						Optimization <br /> UX / UI Design <br /> Content
						Creation
					</p>
					{/* Hero description */}
					<p
						className={`${styles.heroSubText} mt-2 text-[#ec008c] leading-[2.5]`}
					>
						Let's think, create, design & develop your projects!
					</p>
				</div>
			</div>

			{/* Scroll down indicator */}
			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
						{/* Animated dot */}
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
