import clx from "classnames";
import Link from "next/link";
import EmailIcon from "../components/icons/email";
import GithubIcon from "../components/icons/github";
import InstagramIcon from "../components/icons/instagram";
import LinkedInIcon from "../components/icons/linkedin";
import MediumIcon from "../components/icons/medium";
import TwitterIcon from "../components/icons/twitter";
import MetaConfig from "../lib/meta";

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
}

const Social = ({ className }: Props) => {
  return (
    <div className={clx("flex gap-6", className)}>
      {social.map((item) => {
        return (
          <Link key={item.name} href={item.href} about={item.name}>
            <a target="_blank">
              <item.Icon
                height={24}
                width={24}
                className="fill-zinc-500 transition group-hover:fill-zinc-600"
              />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export type { Props };
export default Social;