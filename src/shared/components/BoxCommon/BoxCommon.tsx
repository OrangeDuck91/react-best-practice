import { Box, CssBaseline, AppBar, Toolbar, Typography, Drawer, Divider, List, ListItem, ListItemText, Button } from "@mui/material"
import { FunctionComponent, PropsWithChildren } from "react"
import { NavLink, useLocation } from "react-router-dom"
import Info from "../Info/Info"

type ComponentProps = {
  title: string;
}

type BoxCommonProps = PropsWithChildren<ComponentProps>

const BoxCommon: FunctionComponent<BoxCommonProps> = (props: BoxCommonProps) => {
  const { title, children } = props;
  const links = [
    {
      title: "Employées",
      path: "employees"
    },
    {
      title: "Clients",
      path: "clients"
    },
    {
      title: "Fournisseurs",
      path: "fournisseurs"
    }
  ]
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
          <img src="./sii-canada-logo-website-72x110.png"
            alt="SII journal Logo : SII letters on blue background"
            style={{ margin: '1.5rem auto' }} />
        </Toolbar>
        <Divider />
        <List>
          {links.map(({ title, path }, index) => (
            <NavLink key={index} to={`/${path}` + location.search}>
              <ListItem button key={title}>
                <ListItemText primary={title} />
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Info />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default' }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>)
}

export default BoxCommon