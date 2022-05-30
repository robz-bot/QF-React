import axios from "axios";
import {  DEV_BASE_URL } from "../Utils/constants";

const DEV_SUB_URL  = 'api/post/'

class PostService{
    getPosts(){
        return axios.get(DEV_BASE_URL+DEV_SUB_URL);
    }
    newPost(post){
        return axios.post(DEV_BASE_URL + DEV_SUB_URL + 'newPost',post );
    }
    getPostById(id){
        return axios.get(DEV_BASE_URL+DEV_SUB_URL+'getPost/'+id);
    }
}

export default new PostService();