interface PageConfig {
  text: string;
  path: string;
  show: boolean;
}

const Pages: PageConfig[] = [
  { text: "home", path: "/", show: true },
  { text: "about", path: "/about", show: true },
  { text: "posts", path: "/posts", show: true },
  { text: "post", path: "/post", show: false },
];

export type { PageConfig };
export default Pages;
