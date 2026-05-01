# 🎧 Deezer Music Search App

A modern web application that allows users to search for songs by their favorite artists using the Deezer API. Built with a powerful and scalable stack, the app delivers fast performance and a smooth user experience.

---

## 🚀 Features

- 🔍 Search for tracks by artist name  
- 🎵 Display song details (title, artist, album, cover)  
- ▶️ Play music previews (30s Deezer samples)  
- ⚡ Fast performance with server-side rendering (Next.js)  
- 📱 Fully responsive and modern UI  

---

## 🛠️ Technologies Used

- Next.js, TypeScript  
- Tailwind CSS  
- Deezer API  

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repository-name.git
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Open in browser

```bash
http://localhost:3000
```

### 🔑 API Configuration

This project uses the Deezer API.

#### 1 - Visit: https://developers.deezer.com/
#### 2 - (Optional) Create an account if needed
#### 3 - Use Deezer public endpoints or configure your API access

Example request:

```bash
const searchTracks = async (artist: string) => {
  const res = await fetch(`https://api.deezer.com/search?q=${artist}`);
  const data = await res.json();
  return data;
};
```

### 📌 Usage

- Enter an artist name in the search bar
- Browse the list of tracks returned
- Play previews directly from the interface

### 📄 License

This project is open-source and available for personal or educational use.
