import {AppBar,Toolbar,styled,Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #ffffff;
`;

const Tabs = styled(NavLink)`
    color: darkorange;
    font-size: 22px;
    font-family: 'Monospace', cursive;
    margin-right: 20px;
    text-decoration: none;
`;
const Navbar = () =>{
    return(
        <Header position='static'>
            <Toolbar>
                <Typography
                    variant="h4"
                    sx={{
                        mr: 2,
                        display: { md: 'flex' },
                        fontFamily: 'Monospace',
                        fontWeight: 600,
                        letterSpacing: '.2rem',
                        color: 'darkgreen',
                        textDecoration: 'none',
                    }}
                >
                    RecruitPep
                </Typography>
                <Tabs to='/'>Home</Tabs>
                <Tabs to='/lis'>Lists</Tabs>
                <Tabs to='/reg'>Register</Tabs>
            </Toolbar>
        </Header>
    )
}

export default Navbar;