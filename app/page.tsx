import About from "../components/about";
import Social from "../components/social";

const HomePage = () => {
	return (
		<div className="h-screen w-screen bg-[#151515]">
			<div className="absolute top-0 left-0 h-full w-full">
				<div className="h-screen flex flex-col justify-center items-center">
					<div>
						<About />
						<Social className="mt-4 opacity-70" fill="white" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
