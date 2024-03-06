import './ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNav from './ui/dashboard/sidenav';
import { lusitana } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lusitana.className}>{children}</body>
    </html>
  );
}
