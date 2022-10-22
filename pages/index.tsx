import Content from "../components/content";
import Layout from "../components/layout";
import Text from "../components/typography";

const Index = () => {
  return (
    <Layout>
      <Content>
        <Text
          variant="h1"
          className="pt-20 tracking-normal text-zinc-800 max-w-2xl"
        >
          Software Engineer, Bibliophile and Designer.
        </Text>
        <Text variant="p" className="mt-6 text-base text-zinc-600">
          I am Furkan, a software engineer based in Berlin, Germany and Istanbul, Turkey.
          I am writing some blog posts about software engineering and other topics. Also I am creating some open source projects to share my knowledge with the community.
        </Text>
      </Content>
    </Layout>
  );
};

export default Index;
