import Content from "../components/content";
import Layout from "../components/layout";
import Social from "../components/social";
import Text from "../components/typography";
import MetaConfig from "../lib/meta";

const Index = () => {
  return (
    <Layout title={MetaConfig.shortDescription.toLowerCase()}>
      <Content>
        <Text
          variant="h1"
          className="pt-10 tracking-normal text-zinc-800 max-w-2xl"
        >
          Software Engineer, Bibliophile and Enthusiastic.
        </Text>
        <Text variant="p" className="mt-10 text-base text-zinc-600 max-w-2xl">
          Hey, it's Furkan 👋
        </Text>
        <Text variant="p" className="mt-2 text-base text-zinc-600 max-w-2xl">
          I write blog posts about software and other topics I am passionate
          about. Also creating some open source projects to share my knowledge
          with the community.
        </Text>

        <Social />
      </Content>
    </Layout>
  );
};

export default Index;
