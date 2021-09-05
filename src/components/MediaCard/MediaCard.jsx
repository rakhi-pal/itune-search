import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import { useStyles } from './MediaCard.css';

export default function MediaCard({handleFavouritesClick, album}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card id={album.id.attributes['im:id']} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={album['im:image'][2].label}
          title={album['im:name'].label}
        />
        <CardContent>
          <div className={classes.name}>
            {album['im:name'].label}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton onClick={() => handleFavouritesClick(album)}>
        <div
						className={`${classes.overlay} d-flex align-items-center justify-content-center`}
					>
						{album.isFavorite?<FavoriteIcon/>: <FavoriteBorderIcon/>}
					</div>
          
        </IconButton>
        <Button size="small" color="primary" 
          aria-describedby={popoverId} 
          onClick={handleClick}>
          More Info
        </Button>
        <InputLabel size="small" color="primary">
          {album['im:price'].label}
        </InputLabel>
      </CardActions>
      <Popover
        id={album.id.attributes['im:id']}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className={classes.popover}>
          <div><b>Description</b> :{album.title.label}</div>
          <div><b>Artist : </b>{album['im:artist'].label}</div>
          <div><b>Release Date :</b>{album['im:releaseDate'].attributes.label}</div>
        </div>
      </Popover>
    </Card>
  );
}
