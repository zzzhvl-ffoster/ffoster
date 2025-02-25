import { Geist, Geist_Mono } from "next/font/google";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectsArray);
    };

    fetchProjects();
  }, []);

  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-gray-100 p-4">

        {/* Основной контент */}
        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-4xl font-bold text-gray-800">Illustrator Liza Gomzyakova</h1>
          <div className="text-lg text-gray-600 mt-2">
            <p>🌱Преподаю ребятишкам</p>
            <p>🌱Выпускница Школы Детской Книги</p>
            <p>🌱Иллюстрирую книги для детей</p>
          </div>

          {/* Галерея */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {projects.map((project) => (
          <div key={project.id} className="p-4 border rounded-lg shadow-md">
            <img src={project.imageUrl} alt={project.title} className="rounded-lg" />
            <p className="text-center mt-2 font-semibold">{project.title}</p>
          </div>
        ))}
      </div>
        </div>
      </div>
    </Layout>
  );
}