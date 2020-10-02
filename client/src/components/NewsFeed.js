import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getFeed } from '../store/News';


const NewsFeed = () => {
    const dispatch = useDispatch();
    const { feed, imgs } = useSelector(state => state.News)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        if (feed.length > 1) {
            setIsLoading(false)
            return
        }
        dispatch(getFeed())
        setIsLoading(false)
    },[]);

    if (isLoading) {
        return (
            <div>NEWS LOADING</div>
        );

    };

    return (
        <>
            <div className="news-container">
                <h3>NEWS</h3>
                    {feed && feed.map((item, i) => 
                        <>
                            <div className="news-story-container">
                                <p className="news-story-date">{item.pubDate.split(" ").slice(0,3).join(" ")}</p>
                                <img className="news-story-pic" key={imgs[i]}src={imgs[i]}/>
                                <a target="_blank" className="news-story-link" href={item.link} key={item.link}>{item.title}</a>
                                <p className="news-story-snippet">
                                    {item.contentSnippet.length > 200 ? `${item.contentSnippet.slice(0,200)}...` : item.contentSnippet}
                                </p>
                            </div>
                        </>    
                    )}
            </div>
        </>
    )
}

export default NewsFeed;