import Content from "../components/content";
import Layout from "../components/layout";
import Text from "../components/typography";

const PostsPage = () => {
  return (
    <Layout title="posts">
      <Content>
        <Text
          variant="h1"
          className="pt-10 tracking-normal text-zinc-800 max-w-2xl"
        >
          I wrote for you.
        </Text>
      </Content>
    </Layout>
  );
};

export default PostsPage;
