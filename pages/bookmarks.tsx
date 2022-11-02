import _ from "lodash";
import moment from "moment";
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
  const grouppedData = _.groupBy(data, (item: BookmarkDto) =>
    moment(item.created).format("MMMM YYYY")
  );

  return (
    <Layout title="bookmarks">
      <Content>
        <Text
          variant="h1"
          className="pt-10 tracking-normal text-zinc-800 max-w-2xl"
        >
          What I liked, might you will too.
        </Text>
        <Text variant="p" className="mt-6 text-base text-zinc-600 max-w-2xl">
          I checking my flow every day and saving bookmarks what I liked. You
          can see and be inspired too.
        </Text>

        {error && <p className="mt-5">Failed to load bookmarks.</p>}
        {!error && !data ? (
          <Spinner layout="center" />
        ) : (
          <div>
            {Object.keys(grouppedData).map((key) => {
              const bookmarks = grouppedData[key];
              return (
                <div key={key} className="flex flex-col gap-8 mt-[3em]">
                  <Text variant="h3" className="text-zinc-800 font-normal">
                    {key}
                  </Text>
                  {bookmarks.map((bookmark: BookmarkDto) => (
                    <Bookmark
                      key={bookmark._id}
                      title={bookmark.title}
                      description={bookmark.excerpt}
                      date={new Date(bookmark.created)}
                      link={bookmark.link}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </Content>
    </Layout>
  );
};

export default BookmarksPage;
