import React, {useState , useEffect} from 'react';
import {Typography , Toolbar , Avatar , Button} from '@material-ui/core';
import {Link ,useNavigate , useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import Appbar from '@material-ui/core/AppBar';
import useStyles from './styles';
import Memories from '../../images/memories.png';

export const NavBar = () => {
    const classes = useStyles();
    const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT'});
        navigate('/');
        setUser(null);
    }

    console.log(user);

    useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
     

    return (
    <Appbar className = {classes.appBar} position = "static" color = "inherit">
        <div className = {classes.brandContainer}> 
            <Typography component = {Link} to ='/' className = {classes.heading} variant = "h2" align = "center">Memories
            <img className = {classes.image} src = {Memories} alt= "memories" height = "60" />
            </Typography>
        </div>
        <Toolbar className = {classes.toolbar} >
            {user ? (
                <div className = {classes.profile}>
                    <Avatar className = {classes.purple} alt= {user.result.name} src = {user.result.imageUrl} >{user.result.name.charAt(0).toUpperCase()}</Avatar>
                    <Typography className = {classes.userName} variant = "h6" >{user.result.name}</Typography>
                    <Button className= {classes.logout} variant = "contained" color = "secondary" onClick = {logout}>LogOut</Button>
                </div>
            ) : (
                <Button component = {Link} to = '/auth' color="secondary" variant = "contained"> Sign In </Button>
            )}
        </Toolbar>
    </Appbar>
    )
}
