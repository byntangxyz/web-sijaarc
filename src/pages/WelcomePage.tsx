import React from "react";
import { motion } from "framer-motion";

const WelcomeAnimation: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="flex items-center justify-center h-screen bg-slate-700 text-white text-3xl font-bold text-center"
    >
      <span className="relative">Selamat Datang di</span>
      <br />
      <span className="block text-6xl">SIJA ARC</span>
    </motion.div>
  );
};

export default WelcomeAnimation;
