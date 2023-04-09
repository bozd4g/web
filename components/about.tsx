import clx from "classnames";

interface Props {
	className?: string;
}

const About = ({className}: Props) => {
	return (
		<div className={clx("max-w-lg text-white opacity-70", className)}>
			<p>I am an engineer who is trying to touch people&apos;s life.</p>
			<p className="mt">
				Explore is an exciting thing. Travels, music, designs, technologies, development, and writing about something are my area of
				interests. I like meeting and making new friends!
			</p>
			<p>Also creating some open source projects to share my knowledge with the community.</p>
		</div>
	);
};

export default About;
