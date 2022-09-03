import { AppBar, Container, Toolbar, Typography } from "@mui/material";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function Layout({ children }: Props) {
  return (
    <>
      <AppBar
        position="static"
        elevation={1}
        sx={{ backgroundColor: "transparent", color: "black" }}
      >
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Quick Meet
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>{children}</Container>
    </>
  );
}

export default Layout;
