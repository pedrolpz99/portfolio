import { Nunito } from "next/font/google";
import Footer from "./components/footer/footer.jsx";
import Navigation from "./components/navigation/index.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";

import "devicon/devicon.min.css";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio | Pedro López",
  description:
    "Portafolio de Pedro López, desarrollador web Full Stack: proyectos, experiencia y contacto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={nunito.className}>
        <header className="md:hidden">
          <Navigation />
        </header>
        <div className="mx-auto flex min-h-screen w-full max-w-4xl gap-12 px-8">
          <Sidebar />
          <div className="flex h-min w-full flex-col gap-16 overflow-visible py-8 md:gap-24 md:py-20">
            <main className="flex flex-col gap-16 md:gap-24">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
