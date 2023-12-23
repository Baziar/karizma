import type { NextApiRequest, NextApiResponse } from 'next';
import { coins } from '@/utils/coins';

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  return new Promise<void>((resolve, reject) => {
    const searchStr: string = req.query.searchStr as string;

    const filteredCoins =
      searchStr === 'All'
        ? coins
        : coins.filter(
            (coin) => coin.name.includes(searchStr) || coin.symbol.toLowerCase().includes(searchStr)
          );

    setTimeout(() => {
      res.status(200).json({ coins: filteredCoins });
      resolve();
    }, 3000 - searchStr?.length * 500);
  });
}
