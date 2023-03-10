import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  ScrollArea,
  Button,
  SimpleGrid,
  Title,
  Anchor,
  ActionIcon,
  Flex,
  Box,
  Stack,
} from '@mantine/core';
//import TableExample from './ManageWillsTable';
//import ChipsExample from './ChipsExample';

// import { 
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Routes 
// } from "react-router-dom";
import Link from "next/link";
import ChipsExample from './ChipsExample';
import ApplicationContainer from '../pages/ApplicationContainer';
import { useRouter } from 'next/navigation';
import GeneralFooter from './GeneralFooter';
import { DoubleHeaderColored } from './HeaderRibbon';
import Cards from './Cards';
import AdSellerCarousel from './AdSellerCarousel';

// import Cards from './Cards';

// import { InjectedConnector } from 'wagmi/connectors/injected'
// import { useAccount, useConnect, useDisconnect } from 'wagmi';
// import WagmiWillsFormEdit from './WillsFormEdit';
// import WillsFormEdit from './WillsFormEdit';

const Applicationfooter = "2022 all copyright resverved to Inherit Blocks"
function AppShellLinkExample() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  return (
    
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300, lg:200  }}>
          <Title order={3}>Our Services</Title>
          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {/* scrollable content here */}
            <div style={{display: "flex", flexDirection: "column", padding:15 }}>
           
                   <Link href="/PrimaryCare"  style={{padding:5 }} >
                      Primary Care
                    </Link>
                   
                    <Link href="/Diagnostics"  style={{padding:5 }} >
                    Diagnostics
                    </Link>
                    <Link href="/SurgeryServices"  style={{padding:5 }} >
                    Surgery Services
                    </Link>
                    <Link href="/TravelCertificates"  style={{padding:5 }} >
                    Travel Certificates
                    </Link>
                    <Link href="/HospitalityServices"  style={{padding:5 }} >
                    Hospitality Services
                    </Link>
                </div>    
                    
                <div style={{display: "flex", flexDirection: "column", padding:15 }}>
               
          
                    <Link href="/AdvancedCare" style={{padding:5 }}>
                     Pricing & Packages
                    </Link>
                    <Link href="/ApplicationContainer" style={{padding:5 }}>
                      Feline Diabetes
                    </Link>
                    <Link href="/PetBoarding" style={{padding:5 }}>
                      Pet Boarding
                    </Link>
                    <Link href="/PetCounseling" style={{padding:5 }}>
                      Pet Counseling
                    </Link>
                    <Link href="/PreventiveCare" style={{padding:5 }}>
                      Preventive Care
                    </Link>
     
                    {/* <Anchor component="button" type="button">
                      Anchor as button
                    </Anchor>
                    <Anchor href="https://mantine.dev/" target="_blank">
                      Mantine docs
                    </Anchor> */}
              </div>

          </Navbar.Section>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 150 }}>
            

           <Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 })}>
           <Title order={4}>Others</Title>
           <Link href="/Helpfullinks">
             
             <Text  c="cyan">Helpful Links</Text>
           </Link>
           <Link href="/Faq">
           <Text  c="cyan"> FAQ</Text>
            
           </Link>
           <Link href="/ClinicPolicy">
           <Text  c="cyan"> Clinic Policy</Text>
          
           </Link>
           
           <Title order={4}>Clinic Hours</Title>
           <Text  c="blue"> Mon-Fri : 8am - 5pm </Text>
           <Text  c="teal.4">Sat : 8am - 3pm</Text>
           <Text  c="teal.4">Sun: Holiday</Text>
         </Stack>
           
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          <Text>Contact</Text>
          <Text>Location</Text>
          <Text>Hours & Info</Text>
          <GeneralFooter/>
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', justifyContent:"space-around", alignItems: 'stretch', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

           
          
            <SimpleGrid cols={7} sx={{ color: 'blue', fontSize: 18, lineHeight: 1.4, padding:5 }}
            
            spacing="lg"
            breakpoints={[
              { maxWidth: 980, cols: 3, spacing: 'md' },
              { maxWidth: 755, cols: 2, spacing: 'sm' },
              { maxWidth: 600, cols: 1, spacing: 'sm' },
            ]}
            >
            
          <div><Text><Link href="/" >Amigos Vets</Link></Text></div>
          <div><Text><Link href="/AboutUs">AboutUs</Link></Text></div>
          <div><Text><Link href="/Team">Our Team</Link></Text></div>
          <div><Text><Link href="/ContactUs">ContactUs</Link></Text></div>
          {/* <ActionIcon component="a" href="https://goo.gl/maps/z4JxxUxyLbo43riG8" aria-label="Settings" >
          Anchor element
        </ActionIcon> */}
          <div><Text><Link href="https://goo.gl/maps/z4JxxUxyLbo43riG8" target={'_blank'} >Get Directions</Link></Text></div>
          <div><Button styles = {(theme) => ({
            root: { 
                border: 0,
                height: 50,
                paddingRight: 30,
                alignItems:'center',
                
                '&:hover': {
                    paddingLeft:40 
                },
                
            }
          })} variant="gradient" gradient={{ from: 'orange', to: 'red' }} onClick={()=> router.push('/BookAppointment')}>Book Appointment</Button></div>

          <div><Button styles = {(theme) => ({
            root: {
                border: 0,
                height: 50,
                paddingRight: 60,
                '&:hover': {
                    paddingLeft:40 
                }
            }
          })} variant="gradient" gradient={{ from: 'orange', to: 'blue' }} onClick={()=> router.push('/OrderMedicine')}>Order Medicine</Button></div>
        </SimpleGrid>
        </div>
        </Header>

        
      }
      // header = {DoubleHeaderColored()}
    
    >
      {/* <Box>
      <Flex> <Cards></Cards></Flex>
      </Box> */}
    
    <AdSellerCarousel/>
    </AppShell>
   
    
  );
  
}

export default AppShellLinkExample;
