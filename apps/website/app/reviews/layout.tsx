import { Header } from '@ems/common-ui';

export const metadata = {
  title: 'Reviews',
  description: 'Nice SEO metadata',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto">
      <Header>Reviews</Header>
      <main className="py-4">{children}</main>
    </div>
  );
}
