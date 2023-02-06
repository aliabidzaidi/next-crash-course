import React from 'react'
// import { Navbar, Button, Link, Text, Card, Radio } from '@nextui-org/react'
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

export const Nav = () => {
  const [variant, setVariant] = React.useState('sticky')

  const variants = ['static', 'floating', 'sticky']

  return (
    // <Navbar isBordered variant={variant}>
    //   <Navbar.Brand>
    //     <Text b color="inherit" hideIn="xs">
    //       CrashCourse
    //     </Text>
    //   </Navbar.Brand>
    //   <Navbar.Content hideIn="xs">
    //     <Navbar.Link href="">Home</Navbar.Link>
    //     <Navbar.Link href="/about">About</Navbar.Link>
    //   </Navbar.Content>
    //   <Navbar.Content>
    //     <Navbar.Link color="inherit" href="#">
    //       Login
    //     </Navbar.Link>
    //     <Navbar.Item>
    //       <Button auto flat as={Link} href="#">
    //         Sign Up
    //       </Button>
    //     </Navbar.Item>
    //   </Navbar.Content>
    // </Navbar>
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
