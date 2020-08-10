import React, { Component } from 'react';
import { Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import { GalleryItem, MockGalleryList } from '../models/GalleryItem'

const SingleItem = (props) => {
    const { list } = props;
    const { itemId } = useParams();
    const item = list[itemId];
    return (
        <div>
            <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{/*This should be an a link*/}
                    Read More...
                </p>
        </div>
    )
}

const ListItems = (props) => {
    const list = props.list;
    const { url } = useRouteMatch();
    return (
        <div>
            {list.map(item =>
                <div>
                    {item.getImg()}
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link to={`${url}/${item.id}`}>Read More...</Link>
                </div> 
            )}
        </div>
    )
}

const Routing = (props) => {
    const { path } = useRouteMatch();
    const list = props.list;
    return (
        <div>
            <Switch>
                <Route exact path={path}>
                    <ListItems list={list}/>
                </Route>
                <Route path={`${path}/:itemId`}>
                    <SingleItem list={list}/>
                </Route>
            </Switch>
        </div>
    )
}

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
            <Routing list={list}/>
        );
    }

}

export default Gallery;