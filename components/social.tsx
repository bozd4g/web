import EmailIcon from "../components/icons/email";
import GithubIcon from "../components/icons/github";
import InstagramIcon from "../components/icons/instagram";
import Link from "next/link";
import LinkedInIcon from "../components/icons/linkedin";
import MediumIcon from "../components/icons/medium";
import MetaConfig from "../lib/meta";
import TwitterIcon from "../components/icons/twitter";
import clx from "classnames";

const social = [
	{
		name: "email",
		Icon: EmailIcon,
		href: `mailto:${MetaConfig.social.email}`,
	},
	{
		name: "twitter",
		Icon: TwitterIcon,
		href: MetaConfig.social.twitter,
	},
	{
		name: "linkedIn",
		Icon: LinkedInIcon,
		href: MetaConfig.social.linkedin,
	},
	{
		name: "github",
		Icon: GithubIcon,
		href: MetaConfig.social.github,
	},
	{
		name: "medium",
		Icon: MediumIcon,
		href: MetaConfig.social.medium,
	},
	{
		name: "instagram",
		Icon: InstagramIcon,
		href: MetaConfig.social.instagram,
	},
];

interface Props {
	className?: string;
	fill?: string;
}

const Social = ({className, fill}: Props) => {
	return (
		<div className={clx("flex gap-6", className)}>
			{social.map((item) => {
				return (
					<Link key={item.name} href={item.href} about={item.name} target="_blank">
						<item.Icon height={24} width={24} fill={fill} />
					</Link>
				);
			})}
		</div>
	);
};

export default Social;
