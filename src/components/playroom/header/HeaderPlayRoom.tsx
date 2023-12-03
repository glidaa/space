// PlayRoom.tsx
import React from 'react';
import { Menu, Container, Image, Input, Button } from 'semantic-ui-react';
import Logo from '../assets/logo.png';
import Telefono from '../assets/Telefono.svg';
import Lenguajes from '../assets/Lenguajes.svg';
import Portals from '../assets/Portails.svg';
import Arror from '../assets/Arror.svg';

interface PlayRoomProps {
  logo?: string;
  colorScheme?: string;
  text?: string;
  onClick?: () => void;
  onButtonClick?: () => void;
}

const HeaderPlayRoom: React.FC<PlayRoomProps> = ({ logo, colorScheme, text, onClick, onButtonClick }) => {
  const handleButtonClick = () => {
    alert('¡Welcome!');
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <>
      <h1
        style={{
          backgroundColor: colorScheme || '#612c69',
          color: 'white',
          padding: '0 60px',
          width: '100%',
          fontSize: '12px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          fontFamily: 'sans-serif',
          lineHeight: '18px',
          fontWeight: '400px',
          boxSizing: 'none'
        }}
        onClick={onClick}
      >
        {text || 'Australia Government Website'}
      </h1>
      
      <Container>
        <div
        
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'row',
            color: '#612c69',
            border: 'none',
            borderBottom: 'none',
            justifyContent: 'space-between',
          }}
        >
          <Image
            src={logo || Logo}
            size="small"
            style={{ marginRight: '25px', height: '15%', cursor: 'pointer', width: '25%' }}
          />
          <Menu
            secondary
            style={{ border: 'none', boxShadow: 'none', borderRadius: '0', spacing: '10px' }}
          >
            <Menu.Item
              style={{
                border: 'none',
                borderBottom: 'none',
                borderRight: 'none',
                padding: '0 10px',
              }}
            >
              <Image src={Telefono} style={{ height: '30px', cursor: 'pointer' }} />
              <span style={{ marginLeft: '10px' }}>1800 035 544</span>
            </Menu.Item>
            <Menu.Item
              style={{
                border: 'none',
                borderBottom: 'none',
                borderRight: 'none',
                padding: '0 10px',
              }}
            >
              <Image src={Lenguajes} style={{ height: '30px', cursor: 'pointer' }} />
              <span style={{ marginLeft: '10px' }}>Lenguajes</span>
            </Menu.Item>
            <Menu.Item
              style={{
                border: 'none',
                borderBottom: 'none',
                borderRight: 'none',
                padding: '0 10px',
              }}
            >
              <Image src={Portals} style={{ height: '30px', cursor: 'pointer' }} />
              <span style={{ marginLeft: '10px' }}>Portals</span>
              <Image src={Arror} style={{ height: '15px', cursor: 'pointer', padding: '0 10px' }} />
            </Menu.Item>
            <Menu.Item
              style={{
                border: 'none',
                borderBottom: 'none',
                borderRight: 'none',
                padding: '0 10px',
              }}
            >
              <Input
                placeholder="Search"
                style={{ border: 'none', height: '5%', cursor: 'pointer' }}
              />
            </Menu.Item>
          </Menu>
        </div>
      </Container>
      <Container>
        <Menu secondary style={{ border: 'none', boxShadow: 'none', borderRadius: '0' }}>
          <Menu.Item
            style={{ border: 'none', borderBottom: 'none', borderRight: 'none', padding: '0 10px' }}
          >
            For participants
            <Image src={Arror} style={{ height: '15px', cursor: 'pointer', padding: '0 10px' }} />
          </Menu.Item>
          <Menu.Item
            style={{ border: 'none', borderBottom: 'none', borderRight: 'none', padding: '0 10px' }}
          >
            For providers
            <Image src={Arror} style={{ height: '15px', cursor: 'pointer', padding: '0 10px' }} />
          </Menu.Item>
          <Menu.Item
            style={{ border: 'none', borderBottom: 'none', borderRight: 'none', padding: '0 10px' }}
          >
            For workers
            <Image src={Arror} style={{ height: '15px', cursor: 'pointer', padding: '0 10px' }} />
          </Menu.Item>
          <Menu.Item
            style={{ border: 'none', borderBottom: 'none', borderRight: 'none', padding: '0 10px' }}
          >
            Resources
            <Image src={Arror} style={{ height: '15px', cursor: 'pointer', padding: '0 10px' }} />
          </Menu.Item>
          <Menu.Item
            style={{ border: 'none', borderBottom: 'none', borderRight: 'none', padding: '0 10px' }}
          >
            About
            <Image src={Arror} style={{ height: '15px', cursor: 'pointer', padding: '0 10px' }} />
          </Menu.Item>
        </Menu>
      </Container>

      <div style={{ marginBottom: '20%' }}>
        {/* This div creates a separation with 20px of margin at the bottom */}
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <hr style={{ flex: '10', borderColor: '#275D3A', backgroundColor: '#275D3A' }} />
        <div
          style={{
            width: '224px',
            height: '68px',
            backgroundColor: '#275D3A',
            borderRadius: '30px 0px 30px 0px',
            padding: '10px',
            marginLeft: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'PT Sans',
              fontSize: '16px',
              fontWeight: '700',
              lineHeight: '24px',
              letterSpacing: '0px',
              textAlign: 'center',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}
            onClick={onClick}
          >
            Contact Bureau Number: 1704NE
          </span>
        </div>
      </div>
      <Conponet/>

      <Button disabled inverted onClick={handleButtonClick}>¡Welcome!</Button>
    </>
  );
};

export default HeaderPlayRoom;
