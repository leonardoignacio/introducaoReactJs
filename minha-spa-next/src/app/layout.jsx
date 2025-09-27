import Header from './components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ padding: '1rem' }}>{children}</main>
      </body>
    </html>
  );
}