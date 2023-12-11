import React, { useEffect } from 'react';
import gsap from 'gsap';

const ParticleAnimation = () => {
  useEffect(() => {
    const count = 100;
    const particleClass = "particle";
    const particleColors = ["#00FFFF", "#ADD8E6", "#90EE90", "#98FB98", "#FFFFFF", "#F5F5F5", "#FFFF99", "#FFFACD"];

    const container = document.getElementById("container");
    const w = container.offsetWidth;
    const h = container.offsetHeight;

    const createParticle = () => {
      const elem = document.createElement('div');
      elem.className = particleClass;
      container.appendChild(elem);
    
      const size = gsap.utils.random(20, 50);
      const randomColor = particleColors[Math.floor(Math.random() * particleColors.length)]; // Select a random color from the particleColors array
    
      // Generate a semi-transparent version of the randomColor for the particle background
      const semiTransparentColor = randomColor.replace(')', ', 0.5)').replace('rgb', 'rgba');
    
      gsap.set(elem, {
        width: size,
        height: size,
        x: gsap.utils.random(0, w),
        y: gsap.utils.random(0, h) + (h * 0.5),
        backgroundColor: semiTransparentColor,
        backgroundBlendMode: 'lighten',
        borderColor: randomColor, // Set the border color to the same randomly selected color
      });
    
      animateParticle(elem);
    };
    

    const animateParticle = (elem) => {
      gsap.to(elem, gsap.utils.random(2, 10), {
        y: "-100%",
        ease: "none",
        repeat: -1,
        // delay: -10
      });

      gsap.to(elem, gsap.utils.random(1, 6), {
        x: "+=50",
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      });

      // gsap.to(elem, gsap.utils.random(1, 2), {
      //   opacity: 0,
      //   ease: "power1.inOut",
      //   repeat: -1,
      //   yoyo: true
      // });

      gsap.to(elem, gsap.utils.random(5, 10), {
        rotate: 360,
        ease: "none",
        repeat: -1,
      });
    };

    // Create particles
    for (let i = 0; i < count; i++) {
      createParticle();
    }

    // return () => {
    //   // Clean up by removing animation elements when the component unmounts
    //   const particles = document.querySelectorAll('.particle');
    //   particles.forEach((particle) => {
    //     particle.parentNode.removeChild(particle);
    //   });
    // };
  }, []);

  return <div id="container" style={{ width: '100%', height: '100vh', position:'fixed'}}></div>;
};

export default ParticleAnimation;
