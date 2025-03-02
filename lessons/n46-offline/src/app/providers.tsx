'use client';
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {HeroUIProvider} from "@heroui/react";

export default function Providers({children}: {children: React.ReactNode}) {
    return (
        <HeroUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
            {children}
        </NextThemesProvider>
    </HeroUIProvider>
    )

}