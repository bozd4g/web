import Content from "../components/content";
import Layout from "../components/layout";
import Text from "../components/typography";

const Index = () => {
  return (
    <Layout>
      <Content>
        <Text
          variant="h1"
          className="pt-10 tracking-normal text-zinc-800 max-w-2xl"
        >
          Software Engineer, Bibliophile and Designer.
        </Text>
        <Text variant="p" className="mt-6 text-base text-zinc-600 max-w-2xl">
          He is Furkan, a software engineer based in Berlin, Germany and Istanbul, Turkey.
        </Text>
        <Text variant="p" className="text-base text-zinc-600 max-w-2xl">
          I am writing some blog posts about software engineering and other topics. Also creating some open source projects to share my knowledge with the community.
        </Text>
      </Content>
    </Layout>
  );
};

export default Index;
