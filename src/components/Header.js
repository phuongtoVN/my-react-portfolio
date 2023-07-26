import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';


export const Header= ({ setSection }) => {


    const handleSectionClick = (option) => {
        setSection(option);
    }
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h2" style={{ marginRight: '90px'}}> 
                        Phuong To   
                    </Typography>
                    <Button 
                        style={{ marginRight: '90px'}}
                        variant="contained"
                        onClick={() => {
                            handleSectionClick('about')
                        }} 
                    ><Typography variant="h4" color="inherit">About Me</Typography></Button>
                    <Button
                        style={{ marginRight: '90px'}}
                        variant="contained"
                        onClick={() => {
                            handleSectionClick('portfolio')
                        }}
                    ><Typography variant="h4" color="inherit">Portfolio</Typography></Button>
                    <Button
                        style={{ marginRight: '90px'}}
                        variant="contained"
                        onClick={() => {
                            handleSectionClick('contact')
                        }}
                    ><Typography variant="h4" color="inherit">Contact</Typography></Button>
                    <Button
                        style={{ marginRight: '90px'}}
                        variant="contained"
                        onClick={() => {
                            handleSectionClick('resume')
                        }}
                    ><Typography variant="h4" color="inherit">Resume</Typography></Button>
                </Toolbar>
            </AppBar>
        </div>
    )
};
