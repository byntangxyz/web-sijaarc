function Structure() {
  return (
    <>
      <section id="structure">
        <div className="container mx-auto py-10">
          <h2 className="text-center text-3xl font-bold mb-8 text-white">
            Struktur Kepengurusan Kelas
          </h2>

          {/* Wrapper untuk seluruh struktur */}
          <div className="flex flex-col items-center gap-4 relative">
            {/* Wali Kelas */}
            <div className="flex flex-col items-center">
              <div className="bg-white dark:bg-slate-800 text-center rounded-lg shadow-md p-4 w-48">
                <h3 className="text-xl font-semibold">Wali Kelas</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Nama Wali Kelas
                </p>
              </div>
              <div className="h-6 w-1 bg-gray-300 dark:bg-gray-500 -mt-1"></div>{" "}
              {/* Garis ke Ketua */}
            </div>

            {/* Ketua */}
            <div className="flex flex-col items-center">
              <div className="bg-white dark:bg-slate-800 text-center rounded-lg shadow-md p-4 w-48">
                <h3 className="text-xl font-semibold">Ketua Kelas</h3>
                <p className="text-gray-700 dark:text-gray-300">Nama Ketua</p>
              </div>
              <div className="h-6 w-1 bg-gray-300 dark:bg-gray-500 -mt-1"></div>{" "}
              {/* Garis ke Wakil */}
            </div>

            {/* Wakil Ketua */}
            <div className="flex flex-col items-center">
              <div className="bg-white dark:bg-slate-800 text-center rounded-lg shadow-md p-4 w-48">
                <h3 className="text-xl font-semibold">Wakil Ketua</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Nama Wakil Ketua
                </p>
              </div>
              <div className="h-6 w-1 bg-gray-300 dark:bg-gray-500 -mt-1"></div>{" "}
              {/* Garis bercabang ke Sekretaris dan Bendahara */}
            </div>

            {/* Sekretaris dan Bendahara */}
            <div className="flex justify-center items-start gap-16 relative">
              {/* Garis cabang dari Wakil Ketua ke Sekretaris dan Bendahara */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-3 w-32 border-t border-gray-300 dark:border-gray-500"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-[60px] w-1 h-6 bg-gray-300 dark:bg-gray-500 -mt-1"></div>
              <div className="absolute top-0 right-1/2 transform translate-x-[60px] w-1 h-6 bg-gray-300 dark:bg-gray-500 -mt-1"></div>

              {/* Sekretaris */}
              <div className="bg-white dark:bg-slate-800 text-center rounded-lg shadow-md p-4 w-48">
                <h3 className="text-xl font-semibold">Sekretaris</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Nama Sekretaris
                </p>
              </div>

              {/* Bendahara */}
              <div className="bg-white dark:bg-slate-800 text-center rounded-lg shadow-md p-4 w-48">
                <h3 className="text-xl font-semibold">Bendahara</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Nama Bendahara
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Structure;
