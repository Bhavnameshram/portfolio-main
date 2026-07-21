import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion"

const socials = [
  { Icon: FaGithub, label: "GitHub", href: "href:/" },
  { Icon: FaLinkedin, label: "Linkeddin", href: "href:/" },
  { Icon: FaXTwitter, label: "X", href: "href:/" },
]
const glowVarients = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba (0,0,0,0))" },
  hover: {
    scale: 1.2, y: -3,
    filter: "drop-shadow (0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 10px rgba(16, 185, 129,0.8))",
    transition: { type: "spring ", stiffness: 300, damping: 15 }

  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.88 } }
}



export default Footer() ;{
  return (
    <footer className=" relative overflow-hidden bg-black">
      <motion.div className=" relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-semibold leading-none text-white text-center select-none"
          style={{
            fontSize: "clamp(3rem,5vw,14rem)",
            letterSpacing: "o.02em",
            lineHeight: 0.9,
            padding: "0.3vw",
            whiteSpace: "nowrap",
            textShadow: "0 2px 18px rgba(0,0,0,0.45)"

          }}>
          Bhavna Meshram
        </h1>
        <div className=" h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-[#0d58cc] via-cyan-300 to-emerald-400" />
      
      <div className=" flex gap-5 text-2xl md:text-3xl">
        {}
        </div></motion.div>
    </footer>
  )
}
