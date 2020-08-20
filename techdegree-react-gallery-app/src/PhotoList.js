import React from 'react';
import Photo from './Photo.js'
import NotFound from './NotFound.js'

function PhotoList(props) {
    
  const photos = props.data

  let list;
  
  if(photos.length > 0){
    list = photos.map(photo =>
       <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id}/>
    );
  } else{
    list = <NotFound />
  }
    return (
        
            <ul>
              {list}
            </ul>
      
    );
}

export default PhotoList;