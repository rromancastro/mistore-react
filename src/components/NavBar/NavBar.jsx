import { Link, useLocation } from "react-router"

import { IoIosSearch, IoMdList } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    DrawerHeader,
  } from '@chakra-ui/react'
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import React from "react";


export const NavBar = () => {

    //drawer
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    //nav background
    const location = useLocation();

    const isHome = location.pathname === '/';
    const navClass = isHome ? 'navbar-transparent' : 'navbar-colored';

    return (
        <nav className={navClass}>
            <section id="navCategories">
            <button onClick={onOpen}>
            <IoMdList />Categories 
            </button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth='1px'>Categories</DrawerHeader>
                <DrawerBody id="drawerBody">
                <Accordion>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            Home
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} display={'flex'} flexDirection={'column'}>
                            <Link to={'/products/:furniture'}>Furniture</Link>
                            <Link to={'/products/:groceries'}>Groceries</Link>
                            <Link to={'/products/:home-decoratio'}>Home Decoration</Link>
                            <Link to={'/products/:kitchen-accessories'}>Kitchen Accessories</Link>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            Mens
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} display={'flex'} flexDirection={'column'}>
                            <Link to={'/products/:mens-shirts'}>Mens Shirts</Link>
                            <Link to={'/products/:mens-shoes'}>Mens Shoes</Link>
                            <Link to={'/products/:mens-watches'}>Mens Watches</Link>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            Womens
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} display={'flex'} flexDirection={'column'}>
                            <Link to={'/products/:womens-bags'}>Womens Bags</Link>
                            <Link to={'/products/:womens-dresses'}>Womens Dresses</Link>
                            <Link to={'/products/:womens-jewellery'}>Womens Jewellery</Link>
                            <Link to={'/products/:womens-shoes'}>Womens Shoes</Link>
                            <Link to={'/products/:womens-watches'}>Womens Watches</Link>
                            <Link to={'/products/:tops'}>Womens Tops</Link>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            Tecnology
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} display={'flex'} flexDirection={'column'}>
                            <Link to={'/products/:laptops'}>Laptops</Link>
                            <Link to={'/products/:smartphones'}>Smartphones</Link>
                            <Link to={'/products/:mobile-accessories'}>Mobile Accessories</Link>
                            <Link to={'/products/:womens-watches'}>Womens Watches</Link>
                            <Link to={'/products/:mens-watches'}>Mens Watches</Link>
                            
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            Vehicles
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} display={'flex'} flexDirection={'column'}>
                            <Link to={'/products/:vehicle'}>Cars</Link>
                            <Link to={'/products/:motorcycle'}>Motorcycles</Link>

                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            Beauty
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} display={'flex'} flexDirection={'column'}>
                            <Link to={'/products/:beauty'}>Make-up</Link>
                            <Link to={'/products/:fragrances'}>Fragrances</Link>
                            <Link to={'/products/:skin-care'}>Skin Care</Link>
                            <Link to={'/products/:sunglasses'}>Sunglasses</Link>

                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            Sports
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} display={'flex'} flexDirection={'column'}>
                            <Link to={'/products/:sports-accessories'}>Sports Accessories</Link>

                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
            
            </section>
            <Link to={'/'} id="brandText">MiStore</Link>
            <section id="navUtilities">
                <div id="searchContainer">
                    <input type="text" name="inputSearch" id="inputSearch" />
                    <Link><IoIosSearch className="navUtilitieItem" /></Link>
                </div>
                <FiUser className="navUtilitieItem" />
                <IoBagHandleOutline className="navUtilitieItem" />
            </section>
        </nav>
    )
}