import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {
  Switch,
  Route,
  Link as RouterLink
} from "react-router-dom";
import Favorites from '../Favorites/Favorites';
import {useStyles} from './PrimaryAppBar.css';
import FilterTabs from '../FilterTabs/FilterTabs';

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [appTitle, setAppTitle] = useState("");
  const [favoriteList, setFavoriteList] = useState([]);
  const [originalAlbums, setOriginalAlbums] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [artistFilterList, setArtistFilterList] = useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const setAppTitleParent = (title) => {
    setAppTitle(title);
  }
  const onFavoriteList = (favList) => {
    setFavoriteList(favList);
  }

  useEffect(() => {
    setIsLoading(true);
    const url = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        setAlbums(data.feed.entry);
        setOriginalAlbums(data.feed.entry);
        setAppTitleParent(data.feed.title.label);
        setIsLoading(false);
    });
}, []);

useEffect(() => {
  setArtistFilterMap();
}, [originalAlbums]);

const setArtistFilterMap = () => {
  let tempArtist = ['All Artists'];
  albums.forEach(album => {
      if(!tempArtist.includes(album['im:artist'].label))
      tempArtist.push(album['im:artist'].label)
  });
  setArtistFilterList(tempArtist.splice(0, 10));
}


const removeByAttr = function(arr, attr, innerAttr, value){
  var i = arr.length;
  while(i--){
     if( arr[i] 
         && arr[i].hasOwnProperty(attr) 
         && (arguments.length > 2 && arr[i][attr][innerAttr] === value ) ){ 

         arr.splice(i,1);

     }
  }
  return arr;
}
const handleFavouritesClick = (album) => {
  let tempAlbum = []
  if(album.isFavorite) {
      album.isFavorite = false;
      tempAlbum = [...favoriteList];
      removeByAttr(tempAlbum, "im:name", "label", album['im:name'].label)
  } else {
      album.isFavorite = true;
      tempAlbum = [...favoriteList, album];
  }
 
  onFavoriteList(tempAlbum);
}

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {appTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Albums'].map((text, index) => (
            <ListItem button key={text} component={RouterLink} to="/" onClick={() => handleDrawerClose()}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Favorites'].map((text, index) => (
            <ListItem button key={text} onClick={() => handleDrawerClose()} component={RouterLink} to="/favorites" >
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
          <div>
            <Switch>
              <Route path="/favorites">
                <Favorites favoriteList={favoriteList} handleFavouritesClick={handleFavouritesClick} />
              </Route>
              <Route path="/">
                <FilterTabs artistFilterList={artistFilterList}
                  originalAlbums={originalAlbums}
                  albums={albums} handleFavouritesClick={handleFavouritesClick}
                  onFavoriteList={onFavoriteList} 
                  setAlbums={setAlbums}
                  isLoading={isLoading}></FilterTabs>
              </Route>
            </Switch>
          </div>
        
      </main>
    </div>
  );
}
