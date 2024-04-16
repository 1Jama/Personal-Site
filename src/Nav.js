import React from 'react';
import './Nav.css';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
//import { useRouter } from 'next/router';

export default function Nav() {
  //const router = useRouter();
  return (
    <Navbar isBordered>
      <NavbarBrand justify='start'>
        <p justify='left' className='font-bold text-inherit'>
          Jama
        </p>
        <p
          justify='left'
          className='font-bold text-inherit'
          style={{ color: '#22D3EE', marginLeft: '0.4rem' }}
        >
          Farah
        </p>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link
            color='foreground'
            href='/about'
            //isActive={router.asPath === '/about'}
          >
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#' aria-current='page' style={{ color: '#22D3EE' }}>
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button
            as={Link}
            style={{ color: '#22D3EE' }}
            href='#'
            variant='flat'
          >
            Resume
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
