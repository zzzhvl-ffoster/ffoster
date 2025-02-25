import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800">Портфолио иллюстратора</h1>
      <nav>
        <ul>
          <li><Link href="/">Главная</Link></li>
          <li><Link href="/about">О нас</Link></li>
        </ul>
      </nav>
      <p className="text-lg text-gray-600 mt-2">Добро пожаловать! Здесь собраны лучшие работы!</p>

      {/* Галерея */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <img src="/illustrations/work1.jpg" className="rounded-lg shadow-md" />
        <img src="/illustrations/work2.jpg" className="rounded-lg shadow-md" />
        <img src="/illustrations/work3.jpg" className="rounded-lg shadow-md" />
      </div>
    </div>
  );
}