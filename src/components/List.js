import React from 'react';
import { useDispatch } from 'react-redux';
import { updateList } from './../store/list/listSlice';
import { useState } from "react";

const List = ({id,content}) => {
    const dispatch = useDispatch();
    const [updateValue,setUpdateValue] = useState('');
    const onUpdate = (e) =>{
        e.preventDefault();
        if(updateValue){
            dispatch(updateList({id,content:updateValue}))  
            setUpdateValue('')
        }else{
            console.log('수정할값을 입력하세요')
        }
    }
    return (
        <div>
            <div>
                <h3>{id}</h3>
                <p>{content}</p>
            </div>
            <div>
                <input type='text' value={updateValue} onChange={(e)=>{setUpdateValue(e.target.value)}} />
                <button type='button' onClick={onUpdate}> 수정하기 </button>
            </div>
            <div>
            </div>
        </div>
    );
};
export default List;