import { ReactElement } from "react"
import "@/assets/styles/globals.css"

export const metadata = {
    title: "Mini-story App",
    description: "A supplement for Effortless English learners",
    keywords: "effortless english, english"
}
const Layout = ({ children }: {children: ReactElement}) => {
    return (
        <html lang="en">
            <body>
                <div>{ children }</div>
            </body>
        </html>
    )
}

export default Layout