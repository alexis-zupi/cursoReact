import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function NavListDrawer({ navArrayLinks, NavLink, setOpen }) {
    return (
        <Box>
            <nav>
                <List>
                    {navArrayLinks.map(item => (
                        <ListItem 
                            disablePadding 
                            key={item.id}
                        >
                            <ListItemButton
                                component={NavLink}
                                to={item.path}
                                onClick={() => setOpen(false)}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>{item.title}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </nav>
        </Box>
    )
}