


import {  toast } from 'react-toastify';

const getStoreData = () =>{
    const storedData = localStorage.getItem('storProduct');
    if(storedData){
        return JSON.parse(storedData)
    }  
    return [];
}
const saveStoreData = id =>{
   
    const storedDatas = getStoreData();
    const exists = storedDatas.find(Pid => Pid === id);
    console.log(id)
    console.log(exists)
    if (exists) {
      return  toast.error('product alredey in  wishlist !')
    }
    storedDatas.push(id)
    localStorage.setItem('storProduct', JSON.stringify(storedDatas))
    toast.success('product ar added wishlist') 

    // add quantity
    const quantity = storedDatas.length
    console.log(28,quantity)
    if(quantity){
        const newQuantity = quantity + 1
        storedDatas.length = newQuantity
        console.log(34,newQuantity)
    }else{
        storedDatas.length = 0;
    }

}



export  { getStoreData, saveStoreData,}