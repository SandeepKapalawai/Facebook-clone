import React,{useState,useEffect} from 'react';
import './Feed.css';
import StoryReels from './StoryReels';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      db.collection('posts').orderBy('timestamp','desc')
      .onSnapshot(snapshot =>{
          setPosts(snapshot.docs.map(doc =>( { id: doc.id ,data: doc.data()})))
      })
     
 
    }, [])
    return (
        <div className="feed">
            <StoryReels />
            <MessageSender />
          {posts.map(post =>(
              <Post key={post.id} image={post.data.image} message={post.data.message} profilePic={post.data.profilePic} timestamp={post.data.timestamp} username={post.data.username} />
          ))}
        </div>
    )
}

export default Feed
