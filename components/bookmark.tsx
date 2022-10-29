import moment from "moment";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  link: string;
  date: Date;
}

const Bookmark = ({ title, description, link, date }: Props) => {
  return (
    <article className="group relative flex flex-col items-start max-w-2xl">
      <h2 className="text-base font-semibold tracking-tight text-zinc-800">
        <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
        <Link href={link} about={title}>
          <a target="_blank">
            <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{title}</span>
          </a>
        </Link>
      </h2>
      <time
        className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 pl-3.5"
        dateTime={moment(date).format("YYYY-MM-DD")}
      >
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200"></span>
        </span>
        {moment(date).format("DD MMMM YYYY")}
      </time>
      <p className="relative z-10 mt-2 text-sm text-zinc-600">{description}</p>
    </article>
  );
};

export default Bookmark;
