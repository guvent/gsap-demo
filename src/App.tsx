import { useContext, useRef } from 'react'
import './App.css'
import { useGSAP } from '@gsap/react';
import { GsapContext } from './gsapContext';

function App() {
  const ref = useRef<HTMLDivElement>();
  const container = useRef<HTMLDivElement>();
  const gsap = useContext(GsapContext);

  

    // const sections: any = container.current?.childNodes;

  useGSAP(() => {
    // gsap?.effects?.fade(ref.current);

    // ref.current?.childNodes?.forEach((children: any) => {
    //   children.addEventListener("mouseenter", () => {
    //     gsap?.effects?.fade(children);
    //   })

    //   console.log(children);

    // })

    const sections = gsap.utils.toArray(".panel");


    !!sections && sections.length > 0 && gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + container.current?.offsetWidth
      }});
    });


    return (
      <>
        {/* <div ref={ref as any}>
          <h2>GSAP Effects Simple Demo</h2>
          <div className="box green"></div>
          <div className="box purple"></div>
          <div className="box orange"></div>
          <div className="box green"></div>
          <div className="box purple"></div>
          <div className="box orange"></div>
          <div className="box green"></div>
          <div className="box purple"></div>
        </div> */}

        <div className="firstContainer">
          <h1>Testing horizontal scrolling w/ three sections</h1>
          <h2>First Container</h2>
        </div>
        <div className="container" ref={container}>
          <section className="panel red">
            ONE
          </section>
          <section className="panel orange">
            TWO
          </section>
          <section className="panel blue">
            THREE
          </section>
        </div>
        <div className="lastContainer">
          Last Container
        </div>
      </>
    )
  }

export default App
