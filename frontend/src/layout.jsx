import Background from "../component/Background";
import Navbar from "../Pages/Navbar";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="app">
          <Background />
          <Navbar />
          <main className="app-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
