import "./globals.css";
import Nav from "@/components/Nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col justify-center items-center min-h-screen w-screen">
          <Nav />
          <main className="bg-gray-700 w-10/12 md:w-10/12 lg:w-9/12 p-8 rounded-lg shadow-lg">{children}</main>
        </div>
      </body>
    </html>
  );
}
