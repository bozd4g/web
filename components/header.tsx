import clx from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Pages, { PageConfig } from "../lib/page-config";
import Container from "./container";

const Header = () => {
  const { pathname } = useRouter();
  const split = pathname.split("/");
  const currentPath = split[split.length - 1];

  return (
    <header>
      <Container>
        <nav className="flex-col gap-3 sm:!flex sm:flex-row">
          {Pages.filter((e) => e.show).map((page: PageConfig) => {
            const isActive = page.path === `/${currentPath}`;
            return (
              <span key={page.path}>
                <NextLink href={page.path}>
                  <a className={clx(isActive ? "shine" : "")}>{page.text}</a>
                </NextLink>
              </span>
            );
          })}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
