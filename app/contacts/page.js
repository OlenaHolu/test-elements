'use client'

import { NavBar } from "@/components/ui/tubelight-navbar";
import { HomeIcon, InfoIcon } from "lucide-react";

export default function Contacts() {
    return (
        <>
            <NavBar
                items={[
                    { name: "Home", url: "/", icon: HomeIcon },
                    { name: "About", url: "/about", icon: InfoIcon },
                    { name: "Projects", url: "/projects", icon: InfoIcon },
                    { name: "Contacts", url: "/contacts", icon: InfoIcon }
                ]}
                className="class"
            />
            <h1>Contacts page</h1>
        </>
    );

}