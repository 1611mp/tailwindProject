import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Species = {
  id: number;
  name: string;
  description: string;
  image?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const filePath = path.join(process.cwd(), "data/organism.json");
      if (!fs.existsSync(filePath)) {
        return res.status(200).json([]); // no data yet
      }

      const data = fs.readFileSync(filePath, "utf-8");
      const species: Species[] = JSON.parse(data);

      res.status(200).json(species);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to read species data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
