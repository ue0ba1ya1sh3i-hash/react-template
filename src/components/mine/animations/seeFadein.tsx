// This file is see fadein animation.

import { motion } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"

export function SeeFadeinAnimation({ children, delay = 0, ...props }: { children: React.ReactNode; delay?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: "0px 0px -35% 0px" }}
      transition={{
        type: "spring",
        bounce: 0,
        delay,
        
        // It is difficult for me to adjust these values!
        stiffness: 150,
        damping: 20
      }}

      {...props}
    >
      {children}
    </motion.div>
  )
}
