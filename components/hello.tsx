import MetaConfig from "../lib/meta";

const Hello = () => {
	return (
		<div className="flex flex-col items-center">
			<h3 className="text-white">
				<i>Hello, my name is</i>
			</h3>
			<h1 className="text-white -mt-5">
				<b>{MetaConfig.title}</b>
			</h1>
		</div>
	);
};

export default Hello;