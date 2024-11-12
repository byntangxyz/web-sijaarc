import MainPages from "./pages/MainPage";

function App() {
  return (
    <>
      <div className="relative">
        <div
          className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>

          {/* Logo kiri atas */}
          <img
            src="/logo-sija.jpg"
            alt="Logo Sija"
            width={80}
            className="absolute top-5 left-5 z-10 rounded-full"
          />

          {/* Title */}
          <h1 className="relative text-3xl md:text-5xl font-bold text-white z-10 text-center px-4 md:px-0">
            X SIJA ARC{" "}
            <span className="block text-5xl md:text-7xl lg:text-9xl">
              STEMBAYO
            </span>
          </h1>

          {/* Logo kanan atas */}
          <img
            src="/logo-stembayo.png"
            alt="Logo Stembayo"
            width={80}
            className="absolute top-5 right-5 z-10"
          />
        </div>

        {/* Main Pages */}
        <MainPages />
      </div>
    </>
  );
}

export default App;