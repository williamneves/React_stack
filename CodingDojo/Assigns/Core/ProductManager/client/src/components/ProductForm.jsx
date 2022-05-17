import React, { useState } from 'react'
import axios from 'axios';
export default ({submited}) => {
    //keep track of what is being typed via useState hook
    const [Title, setTitle] = useState(""); 
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post( 'http://localhost:8000/api/product/create', {
            Title,
            Price,
            Description
        } )
            .then( res => {
                submited();
                console.log( res )
            })
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <div style={ { margin: 'auto', width:'177px' }}>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={Title}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="text" onChange={(e)=>setPrice(e.target.value)} value={Price}/>
                </p>
                <p>
                    <label>Descripton</label><br/>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} value={Description}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}

