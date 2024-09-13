"use client"
import { useRouter } from "next/navigation"
import { ChangeEvent } from "react"


export default function HomePage() {
    const router = useRouter()

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]

        if (file === undefined) return

        setInterval(() => {
            router.push("/lesson")
        }, 3000)
    }
    return (
        <div>
            <h1>HomePage</h1>
            <input type="file" accept=".mp3" onChange={handleChange} />
        </div>
    )
}