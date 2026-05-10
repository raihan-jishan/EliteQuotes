 
import {
  Comfortaa,
  Macondo,
  Montserrat,
  Oswald,
  Poppins,
} from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/wrapper/layoutWrapper"; 

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500"],
});
const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["400", "500"],
});
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500"],
});
const macondo = Macondo({
  variable: "--font-macondo",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "EliteQuotes",
  description: "motivate everytime ...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <body
        className={`${montserrat.variable} ${comfortaa.variable} ${poppins.variable} ${macondo.variable} ${oswald.variable} antialiased`}
      >
        
        <LayoutWrapper> 
          {children}
        </LayoutWrapper>
        
       
      </body>
    </html>
  );
}
