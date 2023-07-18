import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Thomas Media",
  description: "Web development, Next.js 13",
  keywords: "web development, web design, javascript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
