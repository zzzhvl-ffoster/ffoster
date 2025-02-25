import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

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
    <div className="min-h-screen flex flex-col bg-gray-100 p-4">
      {/* Навигация */}
      <nav className="w-full bg-white shadow-md py-4 px-6">
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-gray-700 hover:text-gray-900">Главная</Link></li>
          <li><Link href="/about" className="text-gray-700 hover:text-gray-900">Обо мне</Link></li>
        </ul>
      </nav>

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
  );
}