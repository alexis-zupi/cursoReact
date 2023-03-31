import { Button } from "@mui/material";
import { Box } from "@mui/system";

export default function NavList({ navArrayLinks, NavLink }) {
    return (
        <Box sx={{ display: { xs:"none", sm:"block" } }}>
            {navArrayLinks.map(item => (
                <Button 
                    color="inherit" 
                    key={item.id} 
                    component={NavLink}
                    to={item.path}
                >
                    {item.title}
                </Button>
            ))} 
        </Box>
    )
}