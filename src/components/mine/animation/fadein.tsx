// This file is a component that makes it easy to add fade-in animations.

import { motion } from "framer-motion"

export function FadeinAnimation({ className, children }: { className?: string, children: React.ReactNode}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20
      }} 
    >
      {children}
    </motion.div>
  )
}
