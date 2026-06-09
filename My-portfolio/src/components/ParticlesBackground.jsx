import { useEffect, useRef } from "react";


export default function ParticlesBackground() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.currentRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const particleCount = 50;
    const colors = ["rgbd (255,255,255,0.7)"];

    class Particle {
      constructor(){
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.radius = Math.random()*2+1;
      }
    }
  })
}
