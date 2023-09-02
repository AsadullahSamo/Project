import Slide from "@/components/Slide";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Head from "next/head";
import styles from '../styles/Home.module.css'
import { TypeAnimation } from "react-type-animation";
import VerticalMenu from "@/components/VerticalMenu";

export default function Home() {

  
  const [activeIndex, setActiveIndex] = useState(0);
  const imgArray = ["rat_park.jpg", "the_non_pro.jpg", "take_fountain.jpg", "freaks_of_the_industry.jpg", "rat_park_audio_book.jpg", "excerpts.png", "podcast.png", "rat_park_shirt.png", "adam_novak.jpg"]
  const pArray = [
                  "Enter Rat Park at your own risk. Lose the cage. Find yourself. An L.A. power couple orders an A.I. sex droid to escape their marital prison. What happens to them could happen to you. With his fourth novel, Adam Novak shows us how it takes a village of automatons to augment your humanity, feed your deceptive compulsive sexual addiction, and forget why you ever got married in the first place.",
                  "In the spirit of Elmore Leonard's Get Shorty and the HBO series Entourage, Adam Novak's crime novel, The Non-Pro, skewers the Hollywood scene like a picador to a bull. When movie industry insider Jerry Makos dies under mysterious circumstances, his brother Josh seeks the killer while trying not to get sucked into the abyss of the movie industry. Who would want his brother dead? That was the problem. . .the list of social climbers and celebrity parasites seemed to be endless. Just when it seems like Josh will never find the killer, the planets align for a perfect third act.",
                  `A podcast transcript is turned in to a small publishing house in Los Angeles. It turns out to be a piece of missing evidence in a murder investigation that ran cold. Take Fountain is the reprinting of that transcript, and only by reading the entire conversation can the murder be solved.
                  Take Fountain is a truly unique novel that slowly simmers to boil as an interview between two filmmakers gives hints to the anatomy of a brutal murder.`,
                  `In the tradition of Mark Z. Danielewski's House of Leaves and P.T. Anderson's Magnolia, Adam Novak explores the city of angels and demons in his third novel Freaks of the Industry\n.
                   Studio executive Rodney Muir quits the business after a prostitution scandal and returns home to Washington, DC where he falls for two women, the unhappy wife of a diplomat who harbors a dark secret and a federal agent investigating a Starbucks triple homicide who uncovers a White House conspiracy that threatens them all.
                   Low-budget horror filmmaker Thor Rosenthal gets a shot at the big time when homeless junkie turned Oscar-winning movie star Antwon Legion agrees to star in his desert thriller about a carpenter named Jesus investigating a serial killer stalking Mary Magdalene in Golgotha. The only problem is the movie star playing the messiah might be the Anti-Christ.
                   Larry Mersault works at the oldest talent agency in Hollywood as the script reader for Antwon Legion. Juggling the insatiable daughter of the agency chairman with endless script coverage requests, Larry is ordered to assassinate Legion by the chairman and break up with his daughter, forced choose between a career he loves and the people he loves the most.`,
                  "Enter Rat Park at your own risk. Lose the cage. Find yourself. An L.A. power couple orders an A.I. sex droid to escape their marital prison. What happens to them could happen to you. With his fourth novel, Adam Novak shows us how it takes a village of automatons to augment your humanity, feed your deceptive compulsive sexual addiction, and forget why you ever got married in the first place.",
                  "",
                  "",
                  "",
                  ""
                 ]
  const imgWidthArray = [350, 450, 450, 400, 650, 85, 85, 30, 35];              
  const btnText = ["Buy Now", "Buy Now", "Buy Now", "Buy Now", "Listen Now", "Excerpt1", "Spotify", "Buy Swag", "Email me"]
  const alt = ["Rat Park", "The Non-Pro", "Take Fountain", "Freaks of the industry", "Rat park audio book", "Excerpts", "Podcast", "Rat park shirt", "Adam Novak"]
  const sec2Height = [93, 93, 93, 93, 93, 730, 630, 93, 93]
  const bgColorSection1 = ["#232d36", "#b7c7d8", "#27212e", "#2c2a28", "#161617", "#000", "#000", "#000", "#000"];
  const bgColorSection2 = ["#27323c", "#162b42", "#2b2533", "#312f2d", "#19191a", "#000", "#000", "#000", "#000"];
  const href = ["https://a.co/d/0p21mCR", "https://www.simonandschuster.com/books/The-Non-Pro/Adam-Novak/9781627934473", "https://a.co/d/a9RdKLg", "https://a.co/d/hEKXbFR", "https://a.co/d/a6r7baw", "", "", "", ""]

  const [isMobileMode, setIsMobileMode] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if(window.innerWidth <= 824){
        setIsMobileMode(true);      
      } else {
        setIsMobileMode(false);      
      }
    })
  })

  return (

    <>
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/assets/favicon.png" />
      <title> Take Novak </title>
    </Head>

    <main className="text-[#b7c7d8] bg-[#19191a]">
    
    { isMobileMode &&
      <div className="mt-5">
        <VerticalMenu activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      </div>
    }
    
      
      <div className="lg:flex-row flex-col min-h-screen flex justify-center items-center md:mr-3">
      <>
        {
          <Slide
            img={imgArray[activeIndex]}
            alt={alt[activeIndex]}
            imgWidth={imgWidthArray[activeIndex]}
            pText={pArray[activeIndex]}
            btnText={btnText[activeIndex]}
            secHeight={sec2Height[activeIndex]}
            activeIndex={activeIndex}
            bgColorSection1={bgColorSection1[activeIndex]}
            bgColorSection2={bgColorSection2[activeIndex]}
            href={href[activeIndex]}
          />
        }
      </>
      
      { !isMobileMode && 
        <Navbar activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      }
    

      </div>      

      <div className={`${styles.font} text-slate-300 w-[70%] m-auto`}>
        {activeIndex < 5 && 
            <TypeAnimation
            sequence={[
                "\"The craziest goddamn thing I've read in a long time.\"  \n ~ Alexander Payne \n Academy-Award winning writer/director of Sideways and The Descendants", 1000,
                "\" Strange genius mixed with stomach-turning madness. \" \n ~ Matt Greenberg \n screenwriter of 1408 and Pet Sematary", 1000,
                "\"So successfully strange it's almost its own genre. Holding a mirror, if not a hall of mirrors to our culture where we disappear and find ourselves at the same time.\" \n ~ Jerry Stahl \n author of Permanent Midnight and Bad Sex on Speed", 1000,
                "I'm sniffing a breakthrough. It's like Bret Easton Ellis and Philip K. Dick had a baby, and the baby wrote a book. \" \n ~ Arias Janigan \n author of Waiting for Lipchitz at Chateau Marmont", 1000,
                "\" Adam Novak has a merciless eye for a society in which striving replaces every consideration of morality. \" ~ Michael Tolkin \n AUTHOR OF THE PLAYER", 1000
            ]}
            speed={50}
            style={{ whiteSpace: 'pre-line'}}
            repeat={Infinity}
            />
        }
      </div>
    </main>

    
    </>

  )
}

