import { useState } from 'react';
import './create.css'
const Create = () => {
   const [error,setError] = useState({title: '',description:'', category:'', price:'',logo_url:''})
   const [values, setValues] = useState({
    title: "",
    description : "",
    category:"",
    price:"",
    logo_url:""
    });
  const { title, description, category, price, logo_url } = values;
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  const sendRequest = async (e) => {
    e.preventDefault();
      if(title.length===0){
        setError({title: 'Title is required!'})
      }else if(description.length===0){
        setError({ description: 'Description is required!'})
      }else if(price.length===0){
        setError({price: 'Price is required!'})
      }else if(category.length===0){
        setError({category: 'Category is required!'})
      }else if(logo_url.length===0){
        setError({ logo_url: 'Logo URL is required!'})
      }else{
        alert("success");
      }      
      return true;
   }
  return (
    <div className='create section__padding'>
      <div className="create-container">
        <h1>Create new addon</h1>
        
       
        <form className='writeForm' onSubmit={sendRequest} autoComplete='off'>
          
          <div className="formGroup">
            <label>Title *</label>
            <input type="text" onChange={handleChange("title")} value={title} placeholder='Title' autoFocus={true} />
            {error.title && 
                <span className='error' >{error.title}</span>}
          </div>
          <div className="formGroup">
            <label>Description *</label>
            <textarea type="text" onChange={handleChange("description")} value={description} rows={4}
          placeholder='Decription of your item' 
          ></textarea>
          {error.description && 
                <span className='error' >{error.description}</span>}
          </div>
          <div className="formGroup">
            <label>Price *</label>
              <input type="text" onChange={handleChange("price")} value={price} placeholder='Price'  />
              {error.price && 
                <span className='error' >{error.price}</span>}
          </div>
          <div className="formGroup">
            <label>Category *</label>
            <select  onChange={handleChange("category")}>
               <option>Travel</option>
               <option>Shopping</option>
               <option>Sports</option>
               <option>Food</option>
            </select>
            {error.category && 
                <span className='error' >{error.category}</span>}
          </div>
          <div className="formGroup">
            <label>Logo Url *</label>
            <input type="text" onChange={handleChange("logo_url")} value={logo_url} placeholder='Logo Url' autoFocus={true} />
            {error.logo_url && 
                <span className='error' >{error.logo_url}</span>}
          </div>
          <div className="formGroup">
            <label>External Link</label>
            <input type="text" placeholder='Company Website Link'/>
          </div>
          <button className='writeButton'>Create Item</button>
        </form>
      </div>
    </div>
   
  )
};

export default Create;
