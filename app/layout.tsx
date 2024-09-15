import "@/assets/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini-story App",
  description: "A supplement for Effortless English learners",
  keywords: "effortless english, english",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
