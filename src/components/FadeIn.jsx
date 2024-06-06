import { motion } from "framer-motion";

const FadeIn = ({ children, delay }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: delay, duration: 0.25 }}
		>
			{children}
		</motion.div>
	);
};

export default FadeIn;
