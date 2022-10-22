import clx from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Pages, { PageConfig } from "../lib/page-config";

const Header = () => {
  const { pathname } = useRouter();
  const split = pathname.split("/");
  const currentPath = split[split.length - 1];

  return (
    <header className="fixed top-10 w-full flex items-center justify-center z-50">
      <nav>
        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
          {Pages.filter((e) => e.show).map((page: PageConfig) => {
            const isActive = page.path === `/${currentPath}`;
            return (
              <li key={page.path}>
                <NextLink href={page.path}>
                  <a
                    className={clx(
                      "relative block px-3 py-2 transition hover:text-black",
                      !isActive ? "text-gray-500" : "text-black"
                    )}
                  >
                    {page.text}
                  </a>
                </NextLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
