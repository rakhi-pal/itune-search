import React from 'react';
import MediaCard from '../MediaCard/MediaCard';
import {useStyles} from '../Albums/Albums.css';

const Favorites = ({favoriteList, handleFavouritesClick}) => {
    const classes = useStyles();
    return(<React.Fragment>
        <div className={classes.root}>
            {favoriteList.length > 0 ? favoriteList.map(album => {
                return(
                    <div className={classes.card} key={album.id.attributes['im:id']}>
                        <MediaCard 
                            album={album}
                            handleFavouritesClick={handleFavouritesClick}>
                        </MediaCard>
                    </div>
                    );
            })                 : <div>No favorites!</div>} 
        </div>
    </React.Fragment>);
}

export default Favorites;