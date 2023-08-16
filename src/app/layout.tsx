import './globals.css';
import { Nunito } from 'next/font/google';
import { Navbar } from '@/app/components/ui/Navbar';
import { getCurrentUser } from '../actions/getCurrentUser';
import { ToasterProvider } from '@providers/ToasterProvider';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb Clone',
  description: 'This is a clone of the Airbnb website.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang='en'>
      <body className={font.className}>
        <ToasterProvider />
        <Navbar currentUser={currentUser} />
        <div className='pb-20 pt-28'>{children}</div>
      </body>
    </html>
  );
}
