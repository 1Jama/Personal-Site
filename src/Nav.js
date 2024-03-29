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

export default function Nav() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <p justify='left' className='font-bold text-inherit'>
          ACME
        </p>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' aria-current='page'>
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
          <Button as={Link} color='primary' href='#' variant='flat'>
            Resume
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
