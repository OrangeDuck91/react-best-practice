import { Box, CssBaseline, AppBar, Toolbar, Typography, Drawer, Divider, List, ListItem, ListItemText, Button } from "@mui/material"
import { FunctionComponent, PropsWithChildren } from "react"
import { NavLink, useLocation } from "react-router-dom"

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

  const handleClick = () => {
    alert(title + ' - Appelez nous au 376-383-2009')
  }

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
          {links.map(({ title, path }, index) => (
            <NavLink key={index} to={`/${path}` + location.search}>
              <ListItem button key={title}>
                <ListItemText primary={title} />
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Button variant="contained" sx={{ width: '10rem', ml: '1rem' }} onClick={handleClick}
        >Nous contacter</Button>
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