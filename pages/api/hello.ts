import { NextApiResponse } from 'next';

const handler = (_, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' })
}

export default handler;
