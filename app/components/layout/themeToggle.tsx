"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
 
      const { theme, setTheme } = useTheme();



    return (
        <button
            onClick={  ()=>setTheme(theme==="dark"  ? "light" : "dark")}
            type="button"
            className="cursor-pointer rounded-full p-1.5 transition duration-200 hover:bg-white/10"
        >
            {theme === "dark" ?
                <Sun size={25} className="text-primary transition duration-200 hover:rotate-12" />
                :
                <Moon size={25} className="text-primary transition duration-200 hover:rotate-12" />
            }
        </button>
    );
}