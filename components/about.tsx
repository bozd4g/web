import clx from "classnames";

interface Props {
	className?: string;
}

const About = ({className}: Props) => {
	return (
		<div className={clx("max-w-lg text-white opacity-70 text-2xl", className)}>
			<p>Hello 👋</p>
		</div>
	);
};

export default About;
