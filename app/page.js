'use client'

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Globe } from "@/components/ui/globe";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { HomeIcon, InfoIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <BackgroundBeamsWithCollision>
        <NavBar
          items={[
            { name: "Home", url: "#", icon: HomeIcon },
            { name: "About", url: "/about", icon: InfoIcon },
            { name: "Projects", url: "/projects", icon: InfoIcon },
            { name: "Contacts", url: "/contacts", icon: InfoIcon }
          
          ]}
          className="class"
        />

        <Globe></Globe>
        <HandWrittenTitle 
          title="Olena Holub" 
          subtitle="Diseño De Interfaces WEB">
        </HandWrittenTitle>
      </BackgroundBeamsWithCollision>
    </>
      
    
  );
}
