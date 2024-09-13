import "@/assets/styles/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Mini-story App",
    description: "A supplement for Effortless English learners",
    keywords: "effortless english, english"
}
export default function RootLayout({ children, profile }: Readonly<
    {
        children: React.ReactNode
        profile: React.ReactNode
    }>) {

    const isAdmin = true

    return (
        <html lang="en">
            <body>
                <div>{ children }</div>
                <div>{ isAdmin && profile }</div>
            </body>
        </html>
    )
}
