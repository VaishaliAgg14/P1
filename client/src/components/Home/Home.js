import React, { useEffect , useState } from 'react';
import { Container ,Grow , Grid} from '@material-ui/core';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import {getPosts} from '../../actions/posts.js';

import { useDispatch } from 'react-redux';


export const Home = () => {
    const [currentId , setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => { 
    dispatch(getPosts());
    }, [currentId , dispatch]);

    return (
        <Grow in>
        <Container>
          <Grid container justifyContent = "space-between" spacing ={3} alignItems = "center">
            <Grid item xs ={12} sm = {7} >
              <Posts setCurrentId = {setCurrentId} />
            </Grid>
            <Grid item xs ={12} sm = {4} >
              <Form currentId = {currentId} setCurrentId = {setCurrentId} />
            </Grid>
          </Grid>
        </Container>
        </Grow>
    )
}
