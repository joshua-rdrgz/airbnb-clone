import './globals.css';
import { Nunito } from 'next/font/google';
import { Modal } from '@components/Modal';
import { Navbar } from '@components/Navbar';

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
        <Modal isOpen title='Hello World!' actionLabel='Submit' />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
