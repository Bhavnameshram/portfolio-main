import {motion} from "framer-motion"
import m1 from "../assets/m1.PNG"
import m2 from "../assets/m2.PNG"
import w1 from "../assets/w1.PNG"
import w2 from "../assets/m1.PNG"

const testimonials = [
  {
    name: "Gaurav Dhande",
    role: "Software Developer",
    review:
      "Bhavna is a visinary developer . she attention to details and creastivity below us away. Our projects was a massive  success because of her",
    image: m1,
  },
  {
    name: "Sapna Devre",
    role: "Software Developer",
    review:
      "Bhavna is a visinary developer . she attention to details and creastivity below us away. Our projects was a massive  success because of her",
    image: w1,
  },
  {
    name: "Harsh Dashriya",
    role: "Software Developer",
    review:
      "Bhavna is a visinary developer . she attention to details and creastivity below us away. Our projects was a massive  success because of her",
    image: m2,
  },
  {
    name: "Vansh Bondre",
    role: "Software Developer",
    review:
      "Bhavna is a visinary developer . she attention to details and creastivity below us away. Our projects was a massive  success because of her",
    image: w2,
  },
  
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative min-h-screen bg-black text-white flex flex-col items-center justify-between px-6 py-20">
  <motion.h2 className="text-4xl font-bold mb-16"
   initial={{opacity :0, y:-50}}
   animate={{opacity :1, y:0}}
   transition={{duration:0.6}}
   >
    What People Say
  </motion.h2>
    </section>
  )
}