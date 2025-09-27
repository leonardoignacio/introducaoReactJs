import Link from 'next/link';

export default function Header() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#334155' }}>
      <Link href="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
      <Link href="/about" style={{ color: 'white' }}>Sobre</Link>
    </nav>
  );
}