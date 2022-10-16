interface PageConfig {
  text: string;
  path: string;
  show: boolean;
}

const Pages: PageConfig[] = [
  { text: "Home", path: "/", show: true },
  { text: "Posts", path: "/posts", show: true },
  { text: "Post", path: "/post", show: false },
];

export type { PageConfig };
export default Pages;
