// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { products, productsArray } from "../../../sampleData";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<productsArray>
) {
	res.status(200).json(products);
}
