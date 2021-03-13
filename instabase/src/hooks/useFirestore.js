import React from 'react';
import {useEffect,useState} from 'react' ;
import {projectFirestore} from './firebase/config.js';

function useFirestore(component){
const [data,setdata]=useState([]);  
useEffect(()=>{

},[component]);
}
export default useFirestore;