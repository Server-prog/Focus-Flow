import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="flex flex-col items-center gap-4"
      >
        <motion.img
          src="public/logo 1.svg"
          alt="Logo"
          className="w-32 h-32"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.h1
          className="text-3xl font-mochiy text-black dark:text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Focus Flow
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
