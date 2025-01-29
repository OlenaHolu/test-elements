'use client'

import { NavBar } from "@/components/ui/tubelight-navbar";
import { WavyBackground } from "@/components/ui/wavy-background";
import { HomeIcon, InfoIcon } from "lucide-react";

export default function Projects() {
    return (
        <>
            <WavyBackground>
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Project "Diseño de interfaces WEB"
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>
            </WavyBackground>
        </>
    );

}