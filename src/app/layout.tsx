import './globals.css';
import { Nunito } from 'next/font/google';
import { Navbar } from '@ui/Navbar';
import { ToasterProvider } from '@providers/ToasterProvider';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb Clone',
  description: 'This is a clone of the Airbnb website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ToasterProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
