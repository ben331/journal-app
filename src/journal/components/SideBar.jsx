import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({drawerWidth}) => {
  return (
    <Box
      component='nav'
      sx={{width: {sm: drawerWidth}, flexShrin: {sm:0}}}
    >
      <Drawer
        variant='permanent' //temporary
        open
        sx={{
          display: { xs: 'block'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component='div'>Benjamin Silva</Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            ['enero','febrero','marzo','abril'].map((month)=>(
              <ListItem key={ month } disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid
                    container
                  >
                    <ListItemText primary={month}/>
                    <ListItemText secondary={'Magna voluptate aute quis in eiusmod adipisicing sint.'} />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
