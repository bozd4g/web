import Content from "../components/content";
import Layout from "../components/layout";
import Text from "../components/typography";

const BookmarksPage = () => {
  return (
    <Layout title="bookmars">
      <Content>
        <Text
          variant="h1"
          className="pt-10 tracking-normal text-zinc-800 max-w-2xl"
        >
          What I liked, might you will too.
        </Text>
      </Content>
    </Layout>
  );
};

export default BookmarksPage;
