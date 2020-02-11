import React from 'react';

export class GalleryItem {
    constructor(id, imgSrc, title, description, type) {
        this.id = id;
        this.imgSrc = imgSrc;
        this.title = title;
        this.description = description;
        this.type = type;
    }

    getImg() {
        if (this.imgSrc != null) return <img src={this.imgSrc} />;
    }
}

export const MockGalleryList = [
    new GalleryItem(0, null, "Sue's Wedding", 'A Good ole time with flower arrangel6ments', 'wedding'),
    new GalleryItem(1, null, 'Baby Showerama', 'Sisters with the same due date share a baby shower', 'event'),
    new GalleryItem(2, null, 'Gala', 'The gala to end all galas.', 'event'),
    new GalleryItem(3, null, "Johnny's B-day Bonanza", 'Celebrate Johnn\'s birthday with rustic decor to match', 'event'),
    new GalleryItem(4, null, null, "This was a wedding", 'wedding')
]

