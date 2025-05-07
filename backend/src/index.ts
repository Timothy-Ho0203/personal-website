import express from "express";
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from "dotenv";
import path from 'path';

dotenv.config({path: path.resolve(__dirname, "../../.env")});

const app = express();
const PORT = process.env.PORT || 5000;
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express with TypeScript! fooo" });
});

app.get('/test', (req, res) => {
  console.log("Test route hit");
  res.send("OK");
});

app.get("/cheatsheets/:filename", async (req, res) => {
  const { filename } = req.params;

  const { data, error } = await supabase
      .storage
      .from("cheatsheets")
      .createSignedUrl(filename, 60);
    
  if (error) {
    return res.status(500).json({error: error.message});
  }

  res.json({ url: data.signedUrl });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});