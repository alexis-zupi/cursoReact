import { AppBar, Box, Icon, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavList from "./NavList";
import NavDrawer from "./NavDrawer";
import CartWidget from "./CartWidget";
import { Container } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import ButtonCategory from "./ButtonCategory";

export default function NavBar() {
    const [open, setOpen] = useState(false);

    const navArrayLinks = [
        {
            id:"1", 
            title:"Home", 
            path:"/home",
            icon:<InboxIcon/>
        },
        {
            id:"2", 
            title:"Catalogo", 
            path:"/Catalogo",
            icon:<DraftsIcon/>
        },
    ];
    
    return (
        <>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            size="large"
                            onClick={() => setOpen(true)}
                            sx={{ display: { xs:"flex", sm:"none" } }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <NavLink
                            to="/"
                            style={{ textDecoration:"none", flexGrow: 1 }}
                        >
                            <Typography 
                                variant="h6" 
                                color="white"
                            >
                                ShoppZupp
                            </Typography>
                        </NavLink>
                        <NavList 
                            navArrayLinks={navArrayLinks} 
                            NavLink={NavLink} 
                        />  
                        <ButtonCategory />
                        <CartWidget />
                    </Toolbar>
                </Container>
            </AppBar>

            <NavDrawer 
                open={open}
                navArrayLinks={navArrayLinks} 
                NavLink={NavLink} 
                setOpen={setOpen}        
            />
        </>
    )
}