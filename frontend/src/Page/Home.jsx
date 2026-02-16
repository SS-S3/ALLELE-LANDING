import React, { Suspense, lazy } from 'react'
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
import { DownloadSection } from '../component/Download.jsx'
import { useMobileOptimization } from '../hooks/useMobileOptimization.js'

// Loading fallback for lazy components


function Home() {
  const { shouldReduceEffects } = useMobileOptimization();

  return (
    <BiotechBackground>
      {/* Sidebar */}
      <FloatingDockDemo />
    
    <div className="biotech-bg min-h-screen">
      {/* Background Layers - Only render on desktop */}
      {!shouldReduceEffects && (
        <>
          <div className="dna-pattern" />
          <div className="genomic-particles" />
          <div className="grid-lines" />
          <div className="bio-glow-top" />
          <div className="chromosome-bands" />
          <div className="variant-markers" />
          <div className="helix-trail" />
        </>
      )}
      
      {/* DNA Helix Decorations - Component handles its own mobile detection */}
      <DNAHelix position="left" />
      <DNAHelix position="right" />
      <GenomicSequence />
      
      {/* Main Content */}
      <div className="content-layer w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Hero section */}
          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            <div className="text-center pt-4 sm:pt-6 lg:pt-8">
              <Header />
            </div>

            <div className="w-full">
              <TypewriterLine />
            </div>

            <div className="w-full bg-transparent ">
              <MacbookScrollDemo />
            </div>
          </div>

          {/* Mid section - Reduced spacing */}
          <div className="w-full space-y-4 sm:space-y-6 lg:space-y-8">
            <div id="analysis" className="w-full">
              <BentoGridSecondDemo />
            </div>

            <div className="w-full">
              <LinkPreviewDemo/>
            </div>

            <div id="techstack" className="w-full">
              <FocusCardsDemo/>
            </div>
          </div>

          {/* Bottom section */}
          <div id="products" className="w-full">
            <ExpandableCardDemo/>
          </div>

          {/* Download section */}
          <div id="download" className="w-full">
            <DownloadSection/>
          </div>

          <div id="about" className="w-full -mt-2">
            <TooltipCardDemo/>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <Footer/>
    </BiotechBackground>
  )
}

export default Home