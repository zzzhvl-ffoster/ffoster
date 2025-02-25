import { useState } from "react";
import { db, storage, addDoc, collection, ref, uploadBytes, getDownloadURL } from "../firebase";
import Login from "../components/Login";
import { auth } from "../firebase"; // Проверка аутентификации
import { signOut } from "firebase/auth";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !image) {
      alert("Заполните все поля!");
      return;
    }

    // Загружаем изображение в Firebase Storage
    const storageRef = ref(storage, `projects/${image.name}`);
    await uploadBytes(storageRef, image);
    const imageUrl = await getDownloadURL(storageRef);

    // Сохраняем данные в Firestore
    await addDoc(collection(db, "projects"), {
      title,
      imageUrl,
    });

    alert("Проект добавлен!");
    setTitle("");
    setImage(null);
  };

  const [user, setUser] = useState(auth.currentUser); // Проверяем, залогинен ли пользователь

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return user ?  (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold">Админка</h1>
      <p>Добро пожаловать, {user.email}!</p>
      <button onClick={logout}>Выйти</button>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="Название проекта"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Добавить проект
        </button>
      </form>
    </div>
   ) : (
    <Login onLogin={setUser} />
  );
}
