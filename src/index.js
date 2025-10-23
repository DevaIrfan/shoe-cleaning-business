import express from "express";
import dotenv from "dotenv";
import { supabase } from "./config/supaBaseClient.js";

dotenv.config();

const app = express();
app.use(express.json());

// CREATE - Tambah data sepatu
app.post("/items", async (req, res) => {
  const { customer_name, shoe_brand, status } = req.body;

  const { data, error } = await supabase
    .from("shoes")
    .insert([{ customer_name, shoe_brand, status }])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
});

// READ - Tampilkan semua data
app.get("/items", async (req, res) => {
  const { status } = req.query;
  let query = supabase.from("shoes").select("*").order("id", { ascending: true });

  if (status) {
    query = query.eq("status", status);
  }

  const { data, error } = await query;

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// READ by ID - Ambil data berdasarkan ID
app.get("/items/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from("shoes").select("*").eq("id", id).single();

  if (error) return res.status(404).json({ error: "Data tidak ditemukan" });
  res.json(data);
});

// UPDATE - Ubah data sepatu
app.put("/items/:id", async (req, res) => {
  const { id } = req.params;
  const { customer_name, shoe_brand, status } = req.body;

  const { data, error } = await supabase
    .from("shoes")
    .update({ customer_name, shoe_brand, status })
    .eq("id", id)
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
});

// DELETE - Hapus data sepatu
app.delete("/items/:id", async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("shoes").delete().eq("id", id);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Data berhasil dihapus" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
