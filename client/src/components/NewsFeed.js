import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getFeed } from '../store/News';


const NewsFeed = () => {
    const dispatch = useDispatch();
    const { feed, imgs } = useSelector(state => state.News)
    
    useEffect(() => {
        dispatch(getFeed())
    },[])

    return (
        <>
            <div>
                {feed && feed.map((item, i) => 
                <>
                    <div key={item.content}>
                        <img key={imgs[i]}src={imgs[i]}/>
                    </div>
                    <div key={item.title}>
                    <Link to={item.link} key={item.link}>{item.title}</Link>
                    </div>
                </>    
                )}
            </div>
        </>
    )
}

export default NewsFeed;