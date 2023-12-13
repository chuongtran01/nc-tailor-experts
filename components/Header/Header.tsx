import { useEffect, useState } from 'react';
import { Container, Group, Burger, Title, createTheme, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import cx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/services', label: 'Services' },
  { link: '/contact', label: 'Contact' },
];

const theme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
      }),
    }),
  },
});

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(pathname === '/' ? links[0].link : pathname);

  useEffect(() => {
    console.log(pathname);
  });

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        router.push(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <MantineProvider theme={theme}>
      <header className={classes.header}>
        <Container size="responsive" className={classes.inner}>
          <Link className={classes.titleLink} href="/">
            <Title className={classes.title}>Tailor Experts</Title>
          </Link>
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Container>
      </header>
    </MantineProvider>
  );
}
