interface PageConfig {
  text: string;
  path: string;
  show: boolean;
}

const Pages: PageConfig[] = [
  { text: "home", path: "/", show: true },
  { text: "about", path: "/about", show: true },
  { text: "bookmarks", path: "/bookmarks", show: true },
  { text: "posts", path: "/posts", show: true },
  { text: "projects", path: "/projects", show: true },
  { text: "post", path: "/post", show: false },
];

export type { PageConfig };
export default Pages;
