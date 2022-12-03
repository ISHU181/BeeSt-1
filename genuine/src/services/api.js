import axios from 'axios';


const usersUrl = 'http://localhost:9000/server';

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/post`, user);
}

export const getUsers = async (user) => {
    return await axios.get(`${usersUrl}/get`,user);
}

export const getUser = async (id) => {
    return await axios.get(`${usersUrl}/get/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.patch(`${usersUrl}/patch/${id}`, user)
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/delete/${id}`);
}