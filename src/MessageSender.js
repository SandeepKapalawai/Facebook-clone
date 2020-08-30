import React,{useState} from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmotIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase'; 


function MessageSender() {
const [{user},dispatch] = useStateValue();
const[input,setInput] = useState('');
const[imageUrl,setImageUrl] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        db.collection('posts').add({
            message:input,
            timestamp :firebase.firestore.FieldValue.serverTimestamp(),
            profilePic : user.photoURL,
            username:user.displayName,
            image :imageUrl
        })
    };

    return (
        <div className="messageSender">
                <div className="messageSender__top">
             <Avatar src={user.photoURL} title={user.displayName}/> 
             <form>
                 <input value={input} type="text" onChange={(e) => setInput(e.target.value)} placeholder ={`What's on your mind?, ${user.displayName}`}
                 className="messageSender__input" />
                 <input value={imageUrl} type="text" onChange={(e) => setImageUrl(e.target.value)}/>
                 <button onClick={handleSubmit} type="submit">Hideen submit</button>
            </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style ={{color : 'red'}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style ={{color : 'green'}} />
                    <h3>Photo /Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmotIcon style ={{color : 'orange'}} />
                    <h3>Feeling /Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
