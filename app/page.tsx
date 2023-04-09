import About from "../components/about";
import Hello from "../components/hello";
import Noise from "../components/noise";
import Social from "../components/social";

const HomePage = () => {
	return (
		<div className="h-screen bg-[#151515]">
			<Noise />
			<div className="absolute top-0 left-0 h-full w-full">
				<div className="h-screen flex flex-col justify-center items-center">
					<div>
						<Hello />
						<About className="mt-7" />
						<Social className="mt-7 opacity-70" fill="white" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
