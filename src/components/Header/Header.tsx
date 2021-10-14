import React, { FC } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";



export const Header: FC = () => {

    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;