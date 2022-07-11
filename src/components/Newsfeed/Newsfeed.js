import React, { useState, useEffect } from 'react'
import './Newsfeed.css';
import profile from "./../Sidebar/profile.jpg";
import NewsfeedLogo from './NewsfeedLogo';
import { Button } from "@material-ui/core";
import Post from "./../Post";
import db from "./firebase";
import FlipMove from 'react-flip-move';
function Newsfeed() {

    const handleTweet = (e) => {
        e.preventDefault();

        db.collection('G-3MW4PNZZPM').add({
            displayName: "MuffinDon",
            username: 'anaisha',
            verified: true,
            text: tweetMessage,
            avatar: "",
        });
        setTweetMessage("");
    }

    const [tweetMessage, setTweetMessage] = useState("");
    const [posts, setPosts] = useState([[]]);
    useEffect(() => {
        db.collection('G-3MW4PNZZPM').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);
    return (
        <div className='feed'>
            <div className='feed_header'>Home</div>
            <div className='TweetBox'>
                <div className='account'>
                    <img src={profile} alt="" />


                    <input
                        value={tweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                        type="text"
                        placeholder='Whats Happening' />



                </div>
                <div className='logoandbtn'>
                    <div className='tweet_logos'>
                        <NewsfeedLogo />
                    </div>
                    <div className='button'>
                        <Button type="submit"
                            onClick={handleTweet}
                            variant="outlined" className="sidebar__tweet" > Tweet </Button>
                    </div>
                </div>

            </div>
            <div className='Post'>
                <FlipMove>

                    {posts.map(post => (

                        <Post
                        key ={""}
                            displayName={post.displayName}
                            username={post.username}
                            verified={post.verified}
                            text={post.text}
                            avatar={post.avatar}
                            image={post.image}
                        />
                    ))}
                </FlipMove>

            </div>
        </div>
    )
}

export default Newsfeed