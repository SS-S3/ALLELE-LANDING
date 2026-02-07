import React from 'react'
import { Header } from '../component/Header.jsx'
import { TypewriterLine } from '../component/Discription.jsx'
import { MacbookScrollDemo } from '../component/Mac.jsx'
import {BentoGridSecondDemo} from '../component/grid.jsx'
import { LinkPreviewDemo } from '../component/Preview.jsx'
import {ExpandableCardDemo} from '../component/Card.jsx'
import { TooltipCardDemo } from '../component/About.jsx'
import {FocusCardsDemo} from '../component/Techstack.jsx'
import { DNAHelix, GenomicSequence } from '../component/DNAHelix.jsx'
import { FloatingDockDemo } from '../component/sidebar.jsx'
import Footer from '../component/Footer.jsx'
import { BiotechBackground } from '../component/BiotechBackground.jsx'

function Home() {
  return (
    <BiotechBackground>
      {/* Sidebar */}
      <FloatingDockDemo />
    
    <div className="biotech-bg min-h-screen">
      {/* Background Layers */}
      <div className="dna-pattern" />
      <div className="genomic-particles" />
      <div className="grid-lines" />
      <div className="bio-glow-top" />
      <div className="chromosome-bands" />
      <div className="variant-markers" />
      <div className="helix-trail" />
      
      {/* DNA Helix Decorations */}
      <DNAHelix position="left" />
      <DNAHelix position="right" />
      <GenomicSequence />
      
      {/* Main Content */}
      <div className="content-layer w-full">

      {/* Hero sectionn */}
        <div className="w-full mx-auto text-center  px-6 pt-6">
            <Header />
        </div>

        <div>
          <TypewriterLine />
        </div>

        <div className="w-full bg-transparent">
          <MacbookScrollDemo />
        </div>

        {/* Mid section */}
        <div id="analysis" className='mt-10'>
             <BentoGridSecondDemo />
        </div>

        <div className='-mt-10'>
           <LinkPreviewDemo/>
        </div>

        <div id="techstack" className='py-20 -mt-25'>
             <FocusCardsDemo/>
        </div>
        {/* Bottom section  */}
        <div id="products" className='mt-10'>
           <ExpandableCardDemo/>
        </div>

        <div id="about" className='text-xl mt-10'>
            <TooltipCardDemo/>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className='mt-10'>
       <Footer/>
    </div>
    </BiotechBackground>
  )
}

export default Home