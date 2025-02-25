import Layout from "../components/Layout";

export default function About() {
    return (
      <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
        <h1 className="text-3xl font-bold">Обо мне</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-xl text-center">
          Я иллюстратор детских книг, создаю волшебные миры с помощью красок и кисти.
        </p>
      </div>
      </Layout>
    );
  }
  