import { NEW_POST , FETCH_POSTS } from './types'

export const fetchPosts = () => dispatch =>{
   
        dispatch({
            type:FETCH_POSTS,
            payload : [
                { id:1 , title : "test post 01" , body : "test 1 body" },
                { id:2 , title : "test post 02" , body : "test 2 body" }
            ]
        })
    
}