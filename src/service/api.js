import axios from "axios";
const api_url = "http://localhost:8080"

export const addUser = async (data) =>{
    try{
        return await axios.post(`${api_url}/user`, data);
    }
    catch(error){
        console.log("error is: ", error.message);
    }  
}
export const getUsers = async()=>{

    try{
        return await axios.get(`${api_url}/users`);
    }  
    catch(error){
        console.log("error is: ", error.message);
    } 
}


export const updateUser = async(id, user)=>{
    try{
        return await axios.put(`${api_url}/user`, user);
    }
    catch(error){
        console.log("error is: ", error.message);
    } 
}

export const deleteUser = async(id)=>{
    try{
        return await axios.delete(`${api_url}/user/${id}`);
    }
    catch(error){
        console.log("error is: ", error.message);
    }
}

export const getUser = async(id) =>{
    try{
        return await axios.get(`${api_url}/users/${id}`);
    }
    catch(error){
        console.log("error is: ", error.message);
    } 
}