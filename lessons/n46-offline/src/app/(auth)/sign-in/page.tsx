'use client'
import Link from "next/link";
import {useState} from "react";
import {Button} from "@heroui/react";
import {ThemeSwitcher} from "@/components/theme-switcher";

export default function SignIn() {
    const [count, setCount] = useState(0)
    return(
        <div>
            <Link href={'/'}>Home</Link>
            <h1>Sign In</h1>
            {count}
            <Button onPress={() => setCount(count + 1)}>+</Button>
            <Button onPress={() => setCount(count - 1)}>-</Button>

            <div>dwadwa</div>
            <ThemeSwitcher/>
        </div>
    )
}