import { Stack, Box , TextField,Button } from "@mui/material";
import PostItem from "../component/PostItem"
import { useContext } from "react";
import {PostContext} from '../context/PostContext'

function Feed() {
  return (
    <Box backgroundColor='#eeeeee'>
      <Stack spacing={4} sx={{alignItems: 'center'}} pt={4} >
        <TextField sx={{width:'450px'}} size='small' />
        <Button variant='contained' sx={{width:'450px'}}>Create Post</Button>
        <PostItem />
        <PostItem />
        <PostItem />

      </Stack>
    </Box>
  );
}

export default Feed;
