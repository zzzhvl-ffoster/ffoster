import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Навигация */}
      <nav className="w-full bg-white shadow-md py-4 px-6">
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-gray-700 hover:text-gray-900">Главная</Link></li>
          <li><Link href="/about" className="text-gray-700 hover:text-gray-900">Обо мне</Link></li>
        </ul>
      </nav>

      {/* Основной контент */}
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
}