import React from 'react';

const Post = props => {
    // only this example(one line below)
    const post = props.post[id];  

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </article>
    )
}

export default Post;