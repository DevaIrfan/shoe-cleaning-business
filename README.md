# 🧼 Shoe Cleaning Business API

Nama     : Caesar Deva Irfan Putra
NIM      : 21120123130062
Kelompok : 5
Shift    : 1

## Deskripsi Umum Proyek

Aplikasi ini menyediakan layanan backend API untuk bisnis cuci sepatu.  
Dengan API ini, kita dapat:
- Mendaftarkan sepatu pelanggan yang akan dicuci.
- Memantau status pengerjaan (Menunggu, Diproses, atau Selesai).
- Mengubah status saat proses berlangsung.
- Menghapus data setelah proses selesai.
  
---

## Tujuan dan Fitur Utama

### Tujuan
Membangun layanan backend sederhana yang dapat digunakan untuk mencatat dan mengelola data sepatu pelanggan dengan mudah dan efisien.

### Fitur Utama
- **Create (POST /items)**: Menambahkan data sepatu pelanggan baru.  
- **Read (GET /items)**: Melihat seluruh data sepatu yang terdaftar.  
- **Filter status (GET /items?status=Selesai)**: Menampilkan data berdasarkan status pengerjaan.  
- **Read by ID (GET /items/:id)**: Melihat detail sepatu tertentu.  
- **Update (PUT /items/:id)**: Memperbarui data pelanggan atau status cuci.  
- **Delete (DELETE /items/:id)**: Menghapus data setelah selesai.

---

## Struktur Data

Tabel utama bernama **`shoes`** di Supabase, dengan struktur sebagai berikut:

| Kolom           | Tipe Data     | Keterangan                                   |
|-----------------|----------------|----------------------------------------------|
| `id`            | `bigint` (PK) | Primary key (auto increment)                 |
| `customer_name` | `text`         | Nama pelanggan                               |
| `shoe_brand`    | `text`         | Merek sepatu yang dicuci                     |
| `status`        | `text`         | Status pengerjaan: `Menunggu`, `Diproses`, `Selesai` |
| `created_at`    | `timestamp`    | Waktu data dibuat (otomatis dari Supabase)   |

---

## Contoh Request dan Response
 
`POST /items`

**Body (JSON):**
```json
{
  "customer_name": "Deva",
  "shoe_brand": "New Balance MR530",
  "status": "Selesai"
}
```

Response
```json
{
  "message": "Data berhasil ditambahkan",
  "data": {
    "id": 1,
    "customer_name": "Deva",
    "shoe_brand": "New Balance MR530",
    "status": "Menunggu",
    "created_at": "2025-10-23T07:00:00Z"
  }
}
```

---

## Link Vercel

https://shoe-cleaning-business.vercel.app/items
