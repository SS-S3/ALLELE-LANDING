import React from 'react'
import { Header } from '../component/Header.jsx'
import { TypewriterLine } from '../component/Discription.jsx'
import { MacbookScrollDemo } from '../component/Mac.jsx'
import {BentoGridSecondDemo} from '../component/grid.jsx'
import { LinkPreviewDemo } from '../component/Preview.jsx'
import {ExpandableCardDemo} from '../component/Card.jsx'
import { TooltipCardDemo } from '../component/About.jsx'
import {FocusCardsDemo} from '../component/Techstack.jsx'
import { FloatingDockDemo } from '../component/sidebar.jsx'
import Footer from '../component/Footer.jsx'
import { DownloadSection } from '../component/Download.jsx'
import LightPillarComponent from '../component/background.jsx';

function Home() {
  return (
    <div className="relative w-full">
      {/* Background - positioned fixed so it doesn't affect layout */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0 overflow-hidden">
        <LightPillarComponent
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={0.8}
          rotationSpeed={0.2}
          glowAmount={0.001}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.3}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="screen"
          quality="medium"
        />
      </div>

      {/* Main content - positioned relative so it appears above background */}
      <div className="relative z-10">
        {/* Sidebar */}
        <FloatingDockDemo />

        <div className="min-h-screen">
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
      </div>
    </div>
  );
}

export default Home