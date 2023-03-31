import { Drawer } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import ButtonCategory from "./ButtonCategory";

export default function NavDrawer({ open, setOpen, navArrayLinks, NavLink }) {
    return (
        <Drawer
            open={open}
            anchor="left"
            onClose={() => setOpen(false)}
            sx={{ display: { xs:"flex", sm:"none" } }}
        >
            <NavListDrawer 
                navArrayLinks={navArrayLinks} 
                NavLink={NavLink} 
                setOpen={setOpen}        
            />
            <ButtonCategory />
        </Drawer>
    )
}