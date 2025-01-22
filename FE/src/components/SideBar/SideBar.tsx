import { ExpandLess, ExpandMore } from "@mui/icons-material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;
const collapsedWidth = 60;

interface SidebarProps {
  isDrawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  setTitleHeader: any;
}

const SideBar = ({
  isDrawerOpen,
  setDrawerOpen,
  setTitleHeader,
}: SidebarProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setOpenMenus({
        product: false,
        user: false,
      });
    }
  }, [isDrawerOpen]);

  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
    product: false,
    user: false,
  });

  const handleToggleMenu = (menu: string) => {
    setOpenMenus((prev) =>
      Object.keys(prev).reduce(
        (acc, key) => ({
          ...acc,
          [key]: key === menu ? !prev[key] : false,
        }),
        {}
      )
    );
  };

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div>
      <Drawer
        variant="permanent"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          width: isDrawerOpen ? drawerWidth : collapsedWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isDrawerOpen ? drawerWidth : collapsedWidth,
            transition: "width 0.3s ease-in-out",
            overflowX: "hidden",
            boxSizing: "border-box",
            // "&:hover": {
            //   width: drawerWidth,
            // },
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: isDrawerOpen ? "" : "center",
            alignItems: "center",
            "@media (min-width:600px)": {
              padding: "0",
            },
          }}
        >
          <div
            style={{
              backgroundColor: "#74512d",
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: isDrawerOpen ? "space-between" : "center",
              alignItems: "center",
            }}
          >
            {isDrawerOpen ? (
              <h3 style={{ marginLeft: "15px", whiteSpace: "nowrap" }}>
                Coffee House
              </h3>
            ) : (
              ""
            )}
            <IconButton onClick={() => setDrawerOpen(!isDrawerOpen)}>
              {isDrawerOpen ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </Toolbar>

        <List sx={{ color: "black !important" }}>
          {/* Product */}
          <ListItem
            onClick={() => {
              handleToggleMenu("product");
            }}
          >
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Product" />
            {openMenus.product ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openMenus.product} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* List Product */}
              <ListItem
                component={Link}
                onClick={() => setTitleHeader("List Product")}
                to="product/list-product"
                sx={{
                  pl: 4,
                  backgroundColor: isActive("/admin/product/list-product")
                    ? "#ccc"
                    : "",
                }}
              >
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText sx={{ color: "black" }} primary="List Product" />
              </ListItem>

              {/* Add Product */}
              <ListItem
                component={Link}
                onClick={() => setTitleHeader("Add Product")}
                to="product/add-product"
                sx={{
                  pl: 4,
                  backgroundColor: isActive("/admin/product/add-product")
                    ? "#ccc"
                    : "",
                }}
              >
                <ListItemIcon>
                  <AddCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Add Product" />
              </ListItem>
            </List>
          </Collapse>

          {/* User */}
        </List>
      </Drawer>
    </div>
  );
};

export default SideBar;
