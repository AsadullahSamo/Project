import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { useState, useEffect, useRef } from 'react'
import styles from '../styles/Home.module.css'
import Button from './Button'
import Navbar from './Navbar'
export default function Slide(props) {

  
const [activeIndex, setActiveIndex] = useState(0);


const renderButtons = () => {
    switch (props.activeIndex) {
      case 5: // For slide 6
        return (
          <div className='text-center'>
            <h1 className={`lg:mt-0 -mt-80 ${styles.fontFamily} text-slate-300 text-[33px] text-center font-semibold`}> Excerpts </h1> 
            <br />
            <h1 className={`${styles.fontFamily} text-slate-300 text-[33px] text-center font-semibold`}> Rat Park </h1> 
            <ul className={`m-2 flex mr-12 justify-evenly gap-7 flex-wrap mb-5 ${styles.btnUl}`}>
                <Button btnText="Excerpt1" href="https://theartifactuals.com/rat-park/"/>
                <Button btnText="Excerpt2" href="https://theartifactuals.com/excerpt-2-from-rat-park/ "/>
                <Button btnText="Rue Morgue" href="https://rue-morgue.com/exclusive-interview-navigate-the-streets-of-rat-park-with-wme-head-of-story-adam-novak/ "/>
                <Button btnText="Residence11" href="https://residence11.com/short-stories/fiction/fiction-excerpt-rat-park-by-adam-novak "/>
                <Button btnText="Book Soup" href="https://www.youtube.com/watch?v=DKIgmHT6lZ4 "/>
            </ul>

            
            <h1 className={`mt-12 ${styles.fontFamily} text-white text-[25px] text-center font-semibold`}> Freaks of the Industry </h1> 
            <ul className={`m-2 flex justify-center gap-5 flex-wrap mb-5 ${styles.btnUl}`}>
                <Button btnText="Excerpt1" href="https://theartifactuals.com/in-honor-of-the-oscars-2022-from-freaks-of-the-industry/ "/>
                <Button btnText="WME News" href="https://www.hollywoodreporter.com/news/general-news/wme-img-vet-adam-novak-dishes-new-novel-rules-fight-club-1026322/amp/ "/>
            </ul>

            <h1 className={`mt-12 ${styles.fontFamily} text-white text-[25px] text-center font-semibold`}> Take Fountain </h1> 
            <ul className={`m-2 flex justify-center gap-5 flex-wrap mb-5 ${styles.btnUl}`}>
                <Button btnText="Foreward" href="https://www.forewordreviews.com/reviews/take-fountain/ "/>
                <Button btnText="Variety" href="https://variety.com/2015/voices/columns/take-foundation-adam-novak-wme-1201552772/amp/?fbclid=PAAaZn-W5PyNVVdEPL7WKKZUpOl7nej-24PjkvxZzaMT30T6JexIsWqT5tvtk_aem_Aezi9ir8SBr0YhOjQsWp0vpbAPWS_5kud_Me0Icz0_m7hUzkUgvnQ6LPr1Hg7eQsmRE "/>
            </ul>
            
          </div>
        );
      case 6: // For slide 7
      return (
          <div className='text-center'>
            <h1 className={`lg:mt-0 -mt-80 ${styles.fontFamily} text-white text-[33px] text-center font-semibold`}> Podcasts </h1> 
            <br />
            <p className={`mb-2 ${styles.fontFamily} text-white text-[33px] text-center font-semibold`}> Rare Bird Radio - Conversation with Tyler Knight </p> 
            <ul className={`mb-10 flex justify-start gap-3 ${styles.btnUl}`}>
                <Button btnText="Sound Cloud" href="https://soundcloud.com/rarebirdlit/adam-novak-in-conversation-with-tyler-knight"/>
                <Button btnText="iTunes" href="https://podyssey.fm/podcast/itunes1024191458/episode17505388-Novak-conversation-Tyler-Knight-Rare-Bird-Radio"/>
            </ul>

            
            <p className={`${styles.fontFamily} text-white text-[33px] text-center font-semibold`}> Final Draft - Freaks of the Industry </p> 
            <ul className={`flex justify-start gap-3 mb-10 ${styles.btnUl}`}>
                <Button btnText="Final Draft" href="https://blog.finaldraft.com/write-on-with-wmes-head-of-story-adam-novak?hs_amp=true "/>
            </ul>

            <p className={`${styles.fontFamily} text-white text-[33px] text-center font-semibold`}> What Bubbles Up - Rat Park </p> 
            <ul className={`m-2 flex justify-start gap-3 mb-5 ${styles.btnUl}`}>
                <Button btnText="Spotify" href="https://open.spotify.com/episode/4V7tHEKMPM53G213WHPDSr "/>
            </ul>
            
          </div>
        );
      case 7: // For slide 8
        return (
          <div className='text-center mt-48'>
          
            <p className={`${styles.pMargin} ${styles.fontFamily} m-auto text-slate-200 text-[40px] w-[80%] font-semibold`}> Show your support and nab some Swag! </p> 
            <br />
            <ul className={`flex justify-start gap-3`}>
                <Button btnText="Buy Swap" href="https://www.funnyshirts.org/design/4142349/Rat+Park+w%2F+back"/>
            </ul>

          </div>
        );
      case 8: // For slide 8
        return (
          <div className='text-justify mt-36'>
          
            <p className={`lg:mt-0 -mt-80 ${styles.fontFamily} text-slate-200 text-[20px] text-center m-auto w-[80%] font-semibold`}> Adam Novak is the author of the novels Rat Park, The Non-Pro, Freaks of the Industry, and Take Fountain. He divides his time between Beachwood Canyon and Fort Washington, Maryland. </p> 
            <br />
            <ul className={`flex justify-start gap-3 mb-10 ${styles.btnUl}`}>
                <Button btnText="Email me" href="mailto:anovak@icloud.com"/>
            </ul>

          </div>
        );
      default:
        return (
          <Button btnText="Buy Now" href={props.href}/>
        );
    }
}

  

const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    
    let section1 = document.getElementById("section1");
    section1.classList.add(prevIndex < props.activeIndex ? "animate__slideInRight" : "animate__slideInLeft");

    setTimeout(() => {
      section1.classList.remove("animate__slideInRight");
      section1.classList.remove("animate__slideInLeft");
    }, 1000);

    setPrevIndex(props.activeIndex);
  }, [props.activeIndex]);

  // Function to get animation class
  

  return (
    <>
      
        <section id='section1'
          className={`lg:mt-5 mt-10 w-[79%] h-[90vh] animate__animated`}
          // style={{ backgroundColor: props.bgColorSection1 }}
        >
          <img src={`/assets/${props.img}`} alt={props.alt} className={`${styles.img} object-cover`} loading='lazy'/>
        </section>
      
      
      <section className={`w-[79%] bg-[${props.bgColorSection2}] flex flex-col justify-center`}> {/* h-[93vh]  w-[79%]*/}
          

        <p style={{marginBottom: '100px' }} className={`${styles.font} md:text-slate-300 w-[80%]`}>{props.pText}</p>         
        
        <div className={`flex justify-center my-8 ${styles.section2Margin}`}>
          {/* <button className={`transition-all duration-1000 ${styles.btn} m-auto bg-[#0974d4] font-sans text-[22px] text-[#fff] px-3 py-1`} > {props.btnText} </button> */}
          {renderButtons()}
        </div>
        
        
      {/* <Navbar activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>  */}
      </section>
    </>    
  )
}


