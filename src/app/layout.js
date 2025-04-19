"use client";
import "./globals.css"; // Assurez-vous que le chemin est correct
import Footer from "../components/footer.jsx";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        data-app="true"
        data-new-gr-c-s-check-loaded="8.929.0"
        data-gr-ext-installed=""
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
