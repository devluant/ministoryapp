import "@/assets/styles/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Mini-story App",
    description: "A supplement for Effortless English learners",
    keywords: "effortless english, english"
}
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body>
                <nav>
                    <ul className="flex justify-between bg-neutral-900 text-neutral-50 p-4">
                        <li>Home</li>
                        <li>Courses</li>
                    </ul>
                </nav>
                <div>{ children }</div>
            </body>
        </html>
    )
}
