import Topo from "./components/Topo";
import "./globals.css";

export const metadata = {
  title: "Router example",
  description: "this application was created to traning a development of SPA with react",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topo/>
        {children}
      </body>
    </html>
  );
}
