import Content from "../components/content";
import Layout from "../components/layout";
import Text from "../components/typography";

const PostsPage = () => {
  return (
    <Layout title="projects">
      <Content>
        <Text
          variant="h1"
          className="pt-10 tracking-normal text-zinc-800 max-w-2xl"
        >
          I just hit the keys.
        </Text>
      </Content>
    </Layout>
  );
};

export default PostsPage;
