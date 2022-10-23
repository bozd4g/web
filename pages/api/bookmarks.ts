import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
   const { query: { }, method, } = req;
   return res.status(200).send({ message: 'Hello World' });
};

export default handler;
