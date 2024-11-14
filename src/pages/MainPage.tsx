import Navbar from "../component/Navbar";
import FotoSlider from "../component/FotoSlider";
import Structure from "./structure";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000, // Durasi animasi
  once: false, // Animasi hanya sekali
});
AOS.refresh();

function MainPages() {
  const [currentDaySchedule, setCurrentDaySchedule] = useState("");

  const schedules = [
    "Senin:" + "Informatika - Bu Ratna | DDK 3 Pemro - Pak Eka | PPKN - Bu ",
    "Selasa: DDK 2 SISKOM - Bu Endah | DDK 1 JARKOM - Pak Yun",
    "Rabu: Olga - Mr. W | B. INDO - Bu Fani | B. JAWA - Pak Fajar | Senbud - Bu Mukti",
    "Kamis: MTK - Bu Hartitik | B. INGGRIS - Mrs. Rossi | Agama - Bu Fera | Sejarah - Bu Bakti",
    "Jumat: IPAS - Bu | B. INGGRIS - Mrs. Rossi",
  ];

  useEffect(() => {
    const dayIndex = new Date().getDay();
    if (dayIndex >= 1 && dayIndex <= 5) {
      setCurrentDaySchedule(schedules[dayIndex - 1]);
    } else {
      setCurrentDaySchedule("Libur - Tidak ada jadwal pembelajaran hari ini");
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-black via-slate-900 to-gray-950 overflow-hidden">
        <div className="bg-dots-pattern bg-repeat bg-opacity-10 min-h-screen">
          <div className="pt-36 flex flex-col items-center" id="main">
            <div className="container mx-auto flex flex-col lg:flex-row gap-6 px-4">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/2 overflow-hidden box-border">
                <h2 className="text-2xl font-bold mb-4">SIJA ARC STEMBAYO</h2>
                <p className="mb-4">
                  Gaza ganteng. Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Reprehenderit numquam facere quae molestiae
                  impedit suscipit amet fugit dicta. Porro, pariatur!
                </p>
                <FotoSlider />
              </div>

              <div className="flex flex-col w-full lg:w-1/2 gap-6">
                <div data-aos="zoom-in-left">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">
                      Jadwal Pelajaran
                    </h2>
                    <p className="mb-4">
                      Jadwal pelajaran kelas X SIJA A Semester 1 2024/2025.
                    </p>
                    <div className="text-gray-700 dark:text-gray-300">
                      <p>{currentDaySchedule}</p>
                    </div>
                  </div>
                </div>

                <div data-aos="zoom-in-left">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">
                      Informasi Lainnya
                    </h2>
                    <p className="mb-4 ">
                      Website ini dibuat oleh{" "}
                      <a
                        href="https://instagram.com/byntangxyz"
                        className="text-blue-700"
                      >
                        Bintang Maulana
                      </a>{" "}
                      atas dasar gabut.
                    </p>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="https://instagram.com/sijaarc_"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 dark:text-blue-400"
                        >
                          Instagram
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Structure />
        </div>
      </div>
    </>
  );
}

export default MainPages;
