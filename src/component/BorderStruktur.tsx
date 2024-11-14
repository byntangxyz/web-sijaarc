import React from "react";

interface BorderStrukturProps {
  Jabatan: string;
  Nama: string;
  Width: string | number; // Width bisa berupa string (misalnya '100%') atau number (misalnya 200)
}

const BorderStruktur: React.FC<BorderStrukturProps> = (props) => {
  const { Jabatan, Nama, Width } = props;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-white text-sm mb-1">{Jabatan}</div>
      <div
        className={`bg-white text-black rounded-3xl text-[0.8rem] px-2 py-[0.30rem] text-center font-semibold`}
        style={{ width: Width }}
      >
        {Nama}
      </div>
    </div>
  );
};

export default BorderStruktur;
