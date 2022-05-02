import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Navbar.css';

export interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Navbar className=' px-auto header'>
      <Container>
        <h4 className='header-text'>{props.title}</h4>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end '>
          <h6 className='header-text'>{props.subtitle}</h6>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
