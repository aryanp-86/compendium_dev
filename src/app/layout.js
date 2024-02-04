
import "./globals.css";


export const metadata = {
  title: "Bits and Bytes",
  description: "The latest edition of Bits and Bytes, where we continue our journey of exploring computing technology, prose, poetry, folk, fiction, non-fiction, and digital literature.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="poppins-font">{children}</body>
    </html>
  );
}
