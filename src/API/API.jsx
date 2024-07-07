import React from 'react';
export default class API{
    static async getInfoByPage(seed,page){
        const response =await fetch(
            'https://randomuser.me/api/?page='+page+'&results=100&inc=name,gender,email&noinfo&seed='+seed
        ).then((response)=>response.json())
        return response
    }
};

