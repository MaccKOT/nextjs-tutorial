// http://localhost:3000/api/echo/42

import { NextApiRequest, NextApiResponse } from 'next';

export default function getById(req: NextApiRequest, res: NextApiResponse) {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'application/json');
  // res.end(
  //   JSON.stringify({
  //     message: req.query.id,
  //   })
  // );
  res.json({ yourId: req.query.id });
}
