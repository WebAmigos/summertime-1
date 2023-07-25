import { Menu } from '../components/Menu';
import './styles.css';

export const metadata = {
  title: 'Welcome to website',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
