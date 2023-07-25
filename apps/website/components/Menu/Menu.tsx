import Link from 'next/link';

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/employees">Employees</Link>
        </li>
      </ul>
    </nav>
  );
};
