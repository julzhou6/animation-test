import React, { useEffect } from 'react';
import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
  const revealRefs = React.useRef([]);
  revealRefs.current = [];
  // pushing it into the array that needs to be animated each time
  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }
  // what happens on scroll, each item slowly fades in or out
  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(el, {
        autoAlpha: 0
      }, {
        duration: 1, 
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index+1}`, 
          trigger: el, 
          start: 'top center+=100', 
          toggleActions: 'play none none reverse'
        }
      })
    })
    gsap.fromTo('.headline',{
      opacity: 0,
      y: -20
    }, 
    {
      opacity: 1, y: 0, 
      duration: 0.6, 
      ease: 'power1.out',
      delay: 0.5, 
      stagger: 0.2
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <span class='headline'>
          <p class='title'>If Hate Is A Virus, There Is No Vaccine': Asian Photographers Speak Out</p>
          <p class='byline'>Xueying Chang</p>
        </span>
      </header>
      <section className="page-1">
        <div className="App-section" key='Title 1' ref={addToRefs}>
            <h2>Eric Lee</h2>
            <p>
            For the last year, my ngin ngin (grandmother) and ye ye (grandfather) were confined to their two-story home to protect themselves from COVID-19.
             It felt strange to ring their doorbell and walk into where I spent many days after preschool. While it felt so familiar, it was also so different. 
             There were no more birds in cages singing in the window, only plants and photos of my cousins Jen and Chrissy in their college graduation gowns. 
             The lounge chair where my oldest cousin, Tabitha, taught me how to catch Pokemon on Gameboy was gone, replaced by a calligraphy station. 
             The three '90s televisions with antennas were gone, replaced by one smart TV.</p>
            <caption className="caption">Juen Lee, 88, poses for a portrait on a patio in her home in Queens, New York / Eric Lee</caption>
        </div>
      </section>
    </div>
  );
}

export default App;
