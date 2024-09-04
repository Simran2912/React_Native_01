import axios from 'axios';

export const getUserApi = async()=>{
    return await axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
        return response.data;
    })
    .catch(error=>{
        console.log(error);
        throw error;
    });
};

export const getTodoApi = async()=>{
    return await axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response=>{
        return response.data;
    })
    .catch(error=>{
        console.log(error);
        throw error;
    });
};
