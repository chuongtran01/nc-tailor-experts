'use client';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Header } from '@/components/Header/Header';
import { HeroBullets } from '@/components/HeroBullets/HeroBullets';

export default function HomePage() {
  return (
    <>
      <Header />
      {/* <Welcome /> */}
      <HeroBullets />
      <ColorSchemeToggle />
    </>
  );
}
