import Image from "next/image";
import Link from "next/link";
import LinkIcon from "./icons/link";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ image, title, description, link }: ProjectCardProps) => {
  const url = new URL(link);

  return (
    <div>
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
        <Image
          alt={title}
          src={image}
          width="32"
          height="32"
          decoding="async"
          data-nimg="1"
          className="h-8 w-8"
          loading="lazy"
        />
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800">
        <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
        <Link href={link} about={title}>
          <a target="_blank">
            <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{title}</span>
          </a>
        </Link>
      </h2>
      <p className="relative z-10 mt-2 text-sm text-zinc-600">{description}</p>
      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition">
        <LinkIcon height={20} width={20} />
        <span className="ml-2">{url.host}</span>
      </p>
    </div>
  );
};

export type { ProjectCardProps };
export default ProjectCard;
