import React from 'react'
import NewPostHeader from '../../components/NewPost/NewPostHeader';
import NewPostFooter from '../../components/NewPost/NewPostFooter';
import ImageCatpion from '../../components/NewPost/ImageCaption';
import NewPostBody from '../../components/NewPost/NewPostBody';


export default function AddPost() {
    return (
        <div>
            <NewPostHeader/>
            <ImageCatpion/>
            <NewPostBody/>
            <NewPostFooter/>
        </div>
    )
}
