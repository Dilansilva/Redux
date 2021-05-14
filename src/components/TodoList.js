import React,{useEffect,useState} from 'react';

const TodoList = () => {
    
const [posts,setPosts] = useState([]);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))   
    .catch(e => console.log(e))
});

        const postItems = posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));

    return(
            
        <div>
            <h1>Hello World</h1>
           {postItems}
        </div>
    );
}

export default TodoList;