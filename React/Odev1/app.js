import axios from "axios";

export default async(userid)=>{
  try{
        const {data:user}=await axios(`https://jsonplaceholder.typicode.com/users/${userid}`); //get user
        

        const {data:posts}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`); //get posts for user

      return { ...user, posts:posts };
  }catch(e){
    return "userid Number must be a value"
  }
}



