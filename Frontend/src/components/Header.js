import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Box, Button, Tab, Tabs } from "@mui/material"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"
import { authActions } from '../store'

const Header = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.isLoggedIn)

  const [value, setValue] = useState()
  return (
    <AppBar position="sticky"
      sx={{ background: "linear-gradient(90deg, rgba(58,157,100,1) 2%, rgba(49,49,116,1) 36%, rgba(0,58,161,1) 73%, rgba(69,187,252,1) 100%) " }}>
      <Toolbar>
        <Typography variant="h4">BlogApp
        </Typography>
        {isLoggedIn && <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
          <Tabs textColor='inherit' value={value} onChange={(e, val) => setValue(val)} >
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
            <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
            <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog" />
          </Tabs>
        </Box>}
        <Box display="flex" marginLeft="auto">

          {!isLoggedIn && <> <Button LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color="warning">Login</Button>
            <Button LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color="warning">Signup</Button> </>}
          {isLoggedIn && <Button onClick={() => dispatch(authActions.logout())} LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color="warning">Logout</Button>}
        </Box>
      </Toolbar>

      {/* <Box position="relative" width="100%" marginLeft={8} height="115vh" >
        <img src='blog.jpg' alt='Blogs' width="90%"  height="70%" />
      </Box>
      <Typography variant='h2' textAlign={"center"} marginBottom={5} >
        Share/Post Your Blog
      </Typography> */}
      
    </AppBar>

  )
}
// LinkComponent={Link} to="/blogs"
export default Header;
