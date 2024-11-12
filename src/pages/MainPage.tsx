import Navbar from "../component/Navbar";
import { useState, useEffect } from "react";

function MainPages() {
  const [currentDaySchedule, setCurrentDaySchedule] = useState("");

  const schedules = [
    "Senin: Informatika - Bu Ratna | DDK 3 Pemro - Pak Eka | PPKN - Bu ",
    "Selasa: DDK 2 SISKOM - Bu Endah | DDK 1 JARKOM - Pak Yun",
    "Rabu: Olga - Mr. W | B. INDO - Bu Fani | B. JAWA - Pak Fajar | Senbud - Bu Mukti",
    "Kamis: MTK - Bu Hartitik | B. INGGRIS - Mrs. Rossi | Agama - Bu | Sejarah - Bu Bakti",
    "Jumat: IPAS - Bu | B. INGGRIS - Mrs. Rossi",
  ];

  useEffect(() => {
    const dayIndex = new Date().getDay();
    if (dayIndex >= 1 && dayIndex <= 5) {
      setCurrentDaySchedule(schedules[dayIndex - 1]);
    } else {
      setCurrentDaySchedule("Libur - Tidak ada jadwal piket hari ini");
    }
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-black via-slate-900 to-gray-950">
        <div className="bg-dots-pattern bg-repeat bg-opacity-10 min-h-screen">
          <div className="pt-36 flex flex-col items-center" id="main">
            <div className="container mx-auto flex flex-col lg:flex-row gap-6 px-4">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 w-full lg:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Deskripsi Kelas</h2>
                <p className="mb-4">
                  Tambahkan deskripsi kelas dan foto kelas (Slider).
                </p>
                <div className="w-full h-32 bg-gray-300 dark:bg-slate-700 rounded-lg"></div>
              </div>

              <div className="flex flex-col w-full lg:w-1/2 gap-6">
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold mb-4">Jadwal Pelajaran</h2>
                  <p className="mb-4">
                    Jadwal pelajaran kelas X SIJA A Semester 1 2024/2025.
                  </p>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p>{currentDaySchedule}</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    Sosial Media Kelas
                  </h2>
                  <p className="mb-4">
                    Temukan kami di sosial media untuk update terbaru.
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://instagram.com/kelas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 dark:text-blue-400"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/kelas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 dark:text-blue-400"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://facebook.com/kelas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 dark:text-blue-400"
                      >
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPages;
