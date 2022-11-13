import { NextApiRequest, NextApiResponse } from 'next';

interface ProjectDto {
   id: number;
   image: string;
   title: string;
   description: string;
   link: string;
}

const handler = (_: NextApiRequest, res: NextApiResponse) => {
   return res.status(200).send(
      [
         {
            id: 1,
            image: "/svg/github.svg",
            title: "go-http-client",
            description: "An enhanced http client for Golang",
            link: "https://github.com/bozd4g/go-http-client",
         }
      ] as ProjectDto[]
   );
};

export type { ProjectDto };
export default handler;
