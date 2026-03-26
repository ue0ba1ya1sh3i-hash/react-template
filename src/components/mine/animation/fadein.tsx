// This file is a component that makes it easy to add fade-in animations.

import { motion } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"

export function FadeinAnimation({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 25,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
