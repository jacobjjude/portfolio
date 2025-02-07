import "./globals.css";
import Nav from "@/components/Nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col justify-center items-center min-h-screen max-w-screen">
          <Nav />
          <main className="flex items-center bg-gray-700 min-h-[300] w-10/12 md:w-10/12 lg:w-9/12 rounded-lg shadow-lg">{children}</main>
        </div>
      </body>
    </html>
  );
}
