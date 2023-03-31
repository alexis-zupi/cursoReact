import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ButtonCategory() {
    const [anchorCategory, setAnchorCategory] = useState(null);
    const openCategory = Boolean(anchorCategory);

    const handleCloseCategory = (e) => setAnchorCategory(null);
    const handleAnchorCategory = (e) => setAnchorCategory(e.currentTarget);

    const style = {
        menuItem: {
            color: "black",
        }
    };

    return (
        <>
            <Button
                color="inherit"
                endIcon={<ExpandMoreIcon />}
                onClick={handleAnchorCategory}
                >
                Categorias
            </Button>
            <Menu
                open={openCategory}
                anchorEl={anchorCategory}
                onClose={handleCloseCategory}
            >
                <Link to={`/category/men's clothing`}>
                    <MenuItem sx={style.menuItem} onClick={handleCloseCategory}>
                        Hombre
                    </MenuItem>
                </Link>
                <Link to={`/category/women's clothing`}>
                    <MenuItem sx={style.menuItem} onClick={handleCloseCategory}>
                        Mujer
                    </MenuItem>
                </Link>
                <Link to={`/category/jewelery`}>
                    <MenuItem sx={style.menuItem} onClick={handleCloseCategory}>
                        Joyeria
                    </MenuItem>
                </Link>
                <Link to={`/category/electronics`}>
                    <MenuItem sx={style.menuItem} onClick={handleCloseCategory}>
                        Electronica
                    </MenuItem>
                </Link>
            </Menu>
        </>
    )
}