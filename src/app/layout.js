import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { IBM_Plex_Sans } from 'next/font/google'
import Footer from "./components/footer";


// Customize the font
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500','600', '700'],
  variable: '--font-ibm',
  display: 'swap',
})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JustPaid",
  description: "Just Paid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ibmPlexSans.variable}>
   
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
  <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
