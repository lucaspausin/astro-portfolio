import { motion } from "framer-motion";

function Profile() {
	return (
		<main className="flex flex-col gap-12 items-start justify-start ">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.25, delay: 1.5 }}
				className="flex gap-2 md:gap-3 items-center py-2 px-2 bg-[#F6F6F6] rounded-full text-[14px] md:text-[15px]"
			>
				<img
					src="/1706360029694.ico"
					loading="eager"
					alt="Foto de perfil"
					className="w-7 h-7 rounded-full object-cover"
				/>
				<p>Lucas Pausin</p>
				<p className="pr-2 text-neutral-600">Desarrollador de front-end</p>
			</motion.div>
			<div className="flex flex-col gap-10">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.25, delay: 1 }}
				>
					Entusiasta de la estética y el minimalismo — especializándome en crear
					experiencias de usuario atractivas y funcionales, donde el minimalismo
					se combina con un rendimiento sobresaliente. Creo firmemente que en
					todos los aspectos, menos es más.
				</motion.h1>
				<motion.h2
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.25, delay: 2 }}
				>
					Hoy, me manejo bien en HTML, CSS, JavaScript, Node.js, Express.js,
					Puppeteer, React.js, Astro.js, Tailwind y MySQL, y tengo experiencia
					en herramientas Scrum como Jira y Trello. También me gustaría
					adentrarme en Three.js y Framer. Siempre buscando sumar más al
					arsenal. (Progresión)
				</motion.h2>
				<motion.h3
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.25, delay: 2 }}
				>
					No dudes en conectarte o saludar, siempre estoy interesado en conocer
					nuevas personas.
				</motion.h3>
			</div>
			<motion.nav
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.25, delay: 2 }}
				className="flex flex-col md:flex-row justify-between items-start md:items-center w-full text-[14px] md:text-[15px] gap-4 md:gap-0 text-neutral-700"
			>
				<a
					href="https://www.linkedin.com/in/lucaspausin/"
					target="_blank"
					className="flex gap-2 items-center py-[6px] px-4 bg-[#F6F6F6] rounded-full"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-linkedin"
					>
						<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
						<rect width="4" height="12" x="2" y="9"></rect>
						<circle cx="4" cy="4" r="2"></circle>
					</svg>
					Linkedin
				</a>
				<a
					href="mailto:lucaspausin@gmail.com?subject=Hola%20Lucas!"
					className="flex gap-2 items-center py-[6px] px-4 bg-[#F6F6F6] rounded-full"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-mail"
					>
						<rect width="20" height="16" x="2" y="4" rx="2"></rect>
						<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
					</svg>
					Email
				</a>
				<a
					href="https://drive.google.com/file/d/1Vv6uPcJIQ7QEd35lxSi-SdL0mrjT3G2F/view?usp=sharing"
					target="_blank"
					className="flex gap-2 items-center py-[6px] px-4 bg-[#F6F6F6] rounded-full"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-file-text"
					>
						<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
						<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
						<path d="M10 9H8"></path>
						<path d="M16 13H8"></path>
						<path d="M16 17H8"></path>
					</svg>
					Curr. Vitae
				</a>
				<div className="flex gap-2 items-center py-[6px] px-4 bg-[#F6F6F6] rounded-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-globe"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
						<path d="M2 12h20"></path>
					</svg>
					<p>Buenos Aires, Argentina (UTC-3)</p>
				</div>
			</motion.nav>
		</main>
	);
}

export default Profile;
