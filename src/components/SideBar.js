import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Dashboard, Inventory, ShoppingCart, Menu } from '@mui/icons-material';
import '../styles/Sidebar.css';

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Pharmacy</h3>
        <IconButton color="primary">
          <Menu/>
        </IconButton>
      </div>

      <List>
        <ListItem
          button
          className={props.activePage === 'dashboard' ? 'active' : ''}
          onClick={() => props.Navigate('dashboard')}
        >
          <Dashboard />
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem
          button
          className={props.activePage === 'inventory' ? 'active' : ''}
          onClick={() => props.Navigate('inventory')}
        >
          <Inventory />
          <ListItemText primary="Inventory" />
        </ListItem>

        <ListItem
          button
          className={props.activePage === 'orders' ? 'active' : ''}
          onClick={() => props.Navigate('orders')}
        >
          <ShoppingCart />
          <ListItemText primary="Orders" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
