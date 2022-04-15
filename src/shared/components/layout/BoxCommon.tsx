import { Box, CssBaseline, AppBar, Toolbar, Typography, Drawer, Divider, List, ListItem, ListItemText } from "@mui/material"
import { FunctionComponent, PropsWithChildren } from "react"
import { NavLink, useLocation } from "react-router-dom"

type ComponentProps = {
  title: string;
  path: string;
}

type BoxCommonProps = PropsWithChildren<ComponentProps>

const BoxCommon: FunctionComponent<BoxCommonProps> = (props: BoxCommonProps) => {
  const { title, path, children } = props;
  let location = useLocation();
  const drawerWidth = 240;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          Inage SII
        </Toolbar>
        <Divider />
        <List>
          {['Employées', 'Clients', 'Fournisseurs'].map((text, index) => (
            <NavLink key={index} to={`/${path}` + location.search}>
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          {children}
        </Typography>
      </Box>
    </Box>)
}

export default BoxCommon