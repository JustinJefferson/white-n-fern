import React, { Component } from 'react';
import { GalleryItem, MockGalleryList } from '../models/GalleryItem'

class Gallery extends Component{
    constructor(props) {
        super(props);

        this.state = {
            list: MockGalleryList,
        }
    }

    render() {
        const {list} = this.state;
        return (
            <div>
                {list.map(item =>
                   <div>
                       {item.getImg()}
                       <h3>{item.title}</h3>
                       <p>{item.description}</p>
                       <p>{/*This should be an a link*/}
                            Read More...
                       </p>
                   </div> 
                )}
            </div>
        );
    }

}

export default Gallery;