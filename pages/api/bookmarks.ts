import { NextApiRequest, NextApiResponse } from 'next';
import Raindrop, { BookmarkDto } from "../../lib/raindrop";

const raindrop = new Raindrop();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
   const { query: { page } } = req;

   const response = await raindrop.getBookmars(parseInt(page as string));
   if (!response.ok)
      return res.status(500).json({ error: "Failed to fetch bookmarks" });

   const data = await response.json();
   const items = data.items.map((item: BookmarkDto) => {
      return {
         _id: item._id,
         title: item.title,
         excerpt: item.excerpt,
         link: item.link,
         created: item.created
      }
   })
   
   return res.status(200).send(items);
};

export default handler;
