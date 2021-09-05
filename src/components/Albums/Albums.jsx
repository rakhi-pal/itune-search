import React, { useEffect, useState } from 'react';
import MediaCard from '../MediaCard/MediaCard';
import {useStyles} from './Albums.css';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import DateAndTimePickers from '../DateAndTimePickers/DateAndTimePickers';

const Albums = ({handleFavouritesClick, albums, originalAlbums, setAlbums, artist}) => {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilterList, setCategoryFilterList] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState([]);

    useEffect(() => {
        if(artist !== "All Artists") {
            let tempAlbums = [...originalAlbums];
            tempAlbums = tempAlbums.filter(album => artist === album['im:artist'].label);
            setAlbums(tempAlbums);
        } else{
            setAlbums(originalAlbums);
        }
    }, [])
    useEffect(() => {
        if(searchTerm === '' && artist === "All Artists")
            filterAlbums();
        else if (searchTerm !== '') {
            filterAlbums();
        }
    }, [searchTerm]);

    useEffect(() => {
        if(categoryFilter.length === 0 && artist === "All Artists")
            filterAlbums();
        else if(categoryFilter.length)
            filterCategory();
    }, [categoryFilter]);

    useEffect(() => {
        setCategoryFilterMap();
    }, [originalAlbums]);

    useEffect(() => {
        console.log('updates');
    }, [albums]);

    const setCategoryFilterMap = () => {
        let tempCategory = [];
        originalAlbums.forEach(album => {
            if(!tempCategory.includes(album.category.attributes.label))
                tempCategory.push(album.category.attributes.label)
        });
        setCategoryFilterList([...tempCategory]);
    }

    const filterAlbums = () => {
        let newAlbums = originalAlbums.filter(album => {
            return album['im:name'].label.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setAlbums(newAlbums);
    }

    const filterCategory = () => {
        let newAlbums = originalAlbums.filter(album => {
            return album.category.attributes.label.toLowerCase().includes(categoryFilter.length ? categoryFilter.toLowerCase(): '');
        });
        setAlbums(newAlbums);
    }
    const handleSearch = search => {
        setSearchTerm(search);
    }

    const onCategoryUpdate = select => {
        setCategoryFilter(select)
    }

    const handleDateTimeChange = value => {
        let newAlbums = originalAlbums.filter(album => {
            return album['im:releaseDate'].label.includes(value);
        });
        setAlbums(newAlbums);
    }


    return(<React.Fragment>
        <div className={classes.filteringAndSearching}>
            <Search updateAlbumsCallback={handleSearch}></Search>
            <Filter categoryFilter={categoryFilterList} onCategoryUpdate={onCategoryUpdate}></Filter>
            <DateAndTimePickers handleDateTimeChange={handleDateTimeChange}></DateAndTimePickers>
        </div>
        
        <div className={classes.root}>
            {albums.length > 0 ? albums.map(album => {
                return(
                    <div className={classes.card} key={album.id.attributes['im:id']}>
                        <MediaCard 
                            handleFavouritesClick={handleFavouritesClick}
                            album={album}>
                        </MediaCard>
                    </div>
                    );
            })                 : <div>No Data found!</div>} 
        </div>
    </React.Fragment>);
}

export default Albums;