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
            { name: "Projects", url: "/projects", icon: InfoIcon }
          
          ]}
          className="class"
        />

        <Globe></Globe>
        <HandWrittenTitle 
          title="Olena Holub" 
          subtitle="Diseño De Interfaces WEB">
        </HandWrittenTitle>
      </BackgroundBeamsWithCollision>
      <footer className="bg-gray-900 text-white text-center">
        <div className="container mx-auto flex flex-col items-center space-y-4">
          <p className="text-sm opacity-75">© {new Date().getFullYear()} Todos los derechos reservados</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400 transition">Instagram</a>
            <a href="#" className="hover:text-gray-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-gray-400 transition">GitHub</a>
          </div>
        </div>
      </footer>
    </>
      
    
  );
}
