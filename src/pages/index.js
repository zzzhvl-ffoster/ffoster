import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Layout from "../components/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Layout>
    <div className="min-h-screen flex flex-col bg-gray-100 p-4">

      {/* Основной контент */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold text-gray-800">Портфолио иллюстратора</h1>
        <p className="text-lg text-gray-600 mt-2">Добро пожаловать! Здесь собраны лучшие работы.</p>

        {/* Галерея */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <img src="/illustrations/work1.jpg" className="rounded-lg shadow-md" />
          <img src="/illustrations/work2.jpg" className="rounded-lg shadow-md" />
          <img src="/illustrations/work3.jpg" className="rounded-lg shadow-md" />
        </div>
      </div>
    </div>
    </Layout>
  );
}