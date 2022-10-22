import Content from "../components/content";
import Layout from "../components/layout";
import Text from "../components/typography";

const AboutPage = () => {
  return (
    <Layout title="about">
      <Content>
        <Text
          variant="h1"
          className="pt-10 tracking-normal text-zinc-800 max-w-2xl"
        >
          I am Furkan Bozdag. I live in the Berlin, Germany which is multicultural city.
        </Text>
        <Text variant="p" className="mt-6 text-base text-zinc-600 max-w-2xl">
          I am a software engineer based in Berlin, Germany and Istanbul,
          Turkey. I am writing some blog posts about software engineering and
          other topics. Also I am creating some open source projects to share my
          knowledge with the community.
        </Text>
        <Text variant="p" className="mt-4 text-base text-zinc-600 max-w-2xl">
          Explore is an exciting thing. Travels, music, designs and technologies
          are areas of my interests. I like meeting and making new friends 🤙
        </Text>
        <Text variant="p" className="mt-4 text-base text-zinc-600 max-w-2xl">
          Do you wanna meet with me? You can find me on;
        </Text>
      </Content>
    </Layout>
  );
};

export default AboutPage;
