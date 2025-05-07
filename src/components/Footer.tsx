import { Link } from "react-router";
import { Container } from "../shared/Container";

export const Footer = () => {
	return (
		<footer className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
			<Container className="flex items-center justify-between">
				<Link
					to={"/"}
					className="text-base sm:text-2xl font-serif header-title"
				>
					Around the World
				</Link>
				<p className="text-xs sm:text-base">
					© {new Date().getFullYear()} Copyrights Not Reserved
				</p>
			</Container>
		</footer>
	);
};
