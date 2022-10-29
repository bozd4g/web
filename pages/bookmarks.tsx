import useSWR from "swr";
import Bookmark from "../components/bookmark";
import Content from "../components/content";
import Layout from "../components/layout";
import Spinner from "../components/spinner";
import Text from "../components/typography";
import { BookmarkDto } from "../lib/raindrop";

const bookmarkFetcher = () => fetch("/api/bookmarks").then((res) => res.json());

const BookmarksPage = () => {
  const { data, error } = useSWR("/api/bookmarks", bookmarkFetcher);
  return (
    <Layout title="bookmarks">
      <Content>
        <Text
          variant="h1"
          className="pt-10 tracking-normal text-zinc-800 max-w-2xl"
        >
          What I liked, might you will too.
        </Text>
        <Text
          variant="p"
          className="mt-6 text-base text-zinc-600 max-w-2xl"
        >
          I checking my flow every day and saving bookmarks what I liked. You
          can see and be inspired too.
        </Text>

        {error && <p>Failed to load.</p>}
        {!data ? (
          <Spinner layout="center" />
        ) : (
          <div className="mt-10 flex flex-col gap-16">
            {data.map((bookmark: BookmarkDto) => (
              <Bookmark
                key={bookmark._id}
                title={bookmark.title}
                description={bookmark.excerpt}
                date={new Date(bookmark.created)}
                link={bookmark.link}
              />
            ))}
          </div>
        )}
      </Content>
    </Layout>
  );
};

export default BookmarksPage;
