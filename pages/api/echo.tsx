//серверный api
// http://localhost:3000/api/echo
// http://localhost:3000/api/echo?message=hello

import { NextApiRequest, NextApiResponse } from 'next';

interface MessageNextApiRequest extends NextApiRequest {
  query: {
    message?: string;
  };
}

export default function echo(req: MessageNextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      message: req.query.message ?? 'hello from echo api',
    })
  );
}
