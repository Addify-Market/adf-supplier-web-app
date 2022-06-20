import { useEffect, useState } from "react";
import "./create.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAddon, getCategory } from "./actions";
const Create = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState({
    title: "",
    description: "",
    categoryId: "",
    price: "",
    logo: "",
    link : "",
    voucherCodes: ""
  });
  const [values, setValues] = useState({
    price: "",
    categoryId: "",
    link: "",
    title: "",
    description: "",
    logo: "",
    voucherCodes: ""
  });
  const { price,categoryId,link, title, description, logo,voucherCodes } = values;
  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  };
  // const createAddon = () => {
  //   navigate("/supplier/myaddons");
  // };
  useEffect(() => {
    categoryList();
  }, []);
  const sendRequest = async e => {
    e.preventDefault();
    if (title.length === 0) {
      setError({ title: "Title is required!" });
    } else if (description.length === 0) {
      setError({ description: "Description is required!" });
    } else if (price.length === 0) {
      setError({ price: "Price is required!" });
    } else if (categoryId.length === 0) {
      setError({ category: "Category is required!" });
    } else if (logo.length === 0) {
      setError({ logo_url: "Logo URL is required!" });
    } else {
      // alert("success");
      
      await dispatch(createAddon({...values}));
      navigate("/supplier/myaddons");
    }
    return true;
  };
  const categoryList = async () =>{
    const category = await dispatch(getCategory());
    console.log("category",category);
    // return category;
    setCategories(category);
  }
  return (
    <div className="create section__padding">
      <div className="create-container">
        <h1>Create new addon</h1>

        <form className="writeForm" onSubmit={sendRequest} autoComplete="off">
          <div className="formGroup">
            <label>Title *</label>
            <input
              type="text"
              onChange={handleChange("title")}
              value={title}
              placeholder="Title"
              autoFocus={true}
            />
            {error.title && <span className="error">{error.title}</span>}
          </div>
          <div className="formGroup">
            <label>Description *</label>
            <textarea
              type="text"
              onChange={handleChange("description")}
              value={description}
              rows={4}
              placeholder="Decription of your item"
            ></textarea>
            {error.description && (
              <span className="error">{error.description}</span>
            )}
          </div>
          <div className="formGroup">
            <label>Price *</label>
            <input
              type="text"
              onChange={handleChange("price")}
              value={price}
              placeholder="Price"
            />
            {error.price && <span className="error">{error.price}</span>}
          </div>
          
          <div className="formGroup">
            
            <label>Category *</label>
            <select onChange={handleChange("categoryId")}>
              {categories.map((category) => (
                <option key={category.categoryId} value={category.categoryId}>{category.categoryName}</option>
              ))}
            </select>
            {error.category && <span className="error">{error.categoryId}</span>}
          </div>
          <div className="formGroup">
            <label>Logo Url *</label>
            <input
              type="text"
              onChange={handleChange("logo")}
              value={logo}
              placeholder="Logo Url"
              autoFocus={true}
            />
            {error.logo_url && <span className="error">{error.logo}</span>}
          </div>
          <div className="formGroup">
            <label>External Link</label>
            <input type="text" onChange={handleChange("link")}
              value={link} placeholder="Company Website Link" />
          </div>
          <div className="formGroup">
            <label>Voucher Codes</label>
            <input type="text" onChange={handleChange("voucherCodes")}
              value={voucherCodes} placeholder="Voucher Codes" />
          </div>
          <button className="writeButton">
            Create Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
