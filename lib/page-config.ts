interface PageConfig {
  text: string;
  path: string;
  show: boolean;
}

const Pages: PageConfig[] = [
  { text: "home", path: "/", show: true },
  { text: "about", path: "/about", show: false },
  { text: "posts", path: "/posts", show: false },
  { text: "bookmarks", path: "/bookmarks", show: false },
  { text: "post", path: "/post", show: false },
];

export type { PageConfig };
export default Pages;
