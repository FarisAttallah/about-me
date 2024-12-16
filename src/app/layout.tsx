
import '../styles/globals.css';

import Navbar from '../component/navbar';
import Footer from '../component/footer';
import BootstrapClient from '../component/BootstrapClient.jsx';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
      <Navbar/>
      <main>{children}

      <BootstrapClient />

      </main>
      <Footer/>
      </body>
    </html>
  )
}

