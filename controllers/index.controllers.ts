import {Response,Request,Context,helpers} from "https://deno.land/x/oak/mod.ts";
// import db from '../db/mongodb.ts';

// // //para mongo
// // //const userCollection =db.collection('/users');
// // export const getAllUsers =async (context:Context) => {
// //    const users = await usersColletion.find().toArray();
// //    context.response.body={
// //    status:"success",
// //    payload:users 
// //   }
// // }

const users = [
    {id:1,first_name:"Lucas",last_name:"Rodriguez"},
    {id:1,first_name:"Franco",last_name:"Garman"}
]

export const getAllUsers =async (context:Context) => {
    context.response.body={
        payload:users
    }
}
export const getUserById=(context:Context)=>{
    const {id} = helpers.getQuery(context,{mergeParams:true})
    console.log(id)
    context.response.body=id;
} 
export const getQuery = ({request,response}:{request:Request,response:Response})=>{
    const query = request.url.searchParams.get('uid')
    console.log(query);
    response.body=query;
}
export const saveUser = async({request,response}:{request:Request,response:Response})=>{
    const body = await request.body();
    const values = await body.values;
    //console.log(values);
    //console.log(body);
    response.body=values;
    //para mongo userCollection.insertOne
}