import React from 'react';
import { motion } from 'framer-motion';

interface IProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function Button({ children, className, onClick }: IProps): JSX.Element {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 1.2 }}
      type="button"
      className={`${className} bg-transparent z-40 transform hover:bg-opacity-50 hover:scale-105 hover:border-transparent duration-500 hover:bg-white  text-xs lg:text-base rounded-md border px-10 py-2`}>
      <p className="">{children}</p>
    </motion.button>
  );
}

export default Button;