import axios from "axios";

export default async(userid)=>{
        const {data:user}=await axios(`https://jsonplaceholder.typicode.com/users/${userid}`);
        

        const {data:posts}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`);

      // console.log({"User":user,"Posts":posts})
      return {...user, posts:posts };
}

//2.yöntem

//  const data=(userid)=>{
//     return new Promise(async (resolve,reject)=>{
//         if(typeof(userid) ==='number'){
//             const {data:user}=await axios(`https://jsonplaceholder.typicode.com/users/${userid}`);
            
//             const {data:posts}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
//             resolve({"User":user,"Posts":posts});
//         }
//         else{
//             reject("userid Number değer olmalı.");
//         }
//     })
// }

//  export default async()=>{
//     try{
//         const lastdata=await data(1);
//         console.log(lastdata);
//     }
//     catch(e){
//         console.log(e);
//     }
// }

