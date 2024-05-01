
import { AuthProvider } from "@/Provider";
import "./globals.css";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Bits and Bytes",
  description: "The latest edition of Bits and Bytes, where we continue our journey of exploring computing technology, prose, poetry, folk, fiction, non-fiction, and digital literature.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="poppins-font newMain">
        <AuthProvider>
          {children}
          <ToastContainer />
        </AuthProvider>
      </body>
    </html>
  );
}
