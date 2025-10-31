import React, { useState } from "react";
import "./styles.css";
import ApiBaseUrl from "../../services/api";

function CreateCategory() {
    // This is state with object to handle form inputs data
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: "",
        status: true,
    });


    //   This function is used to add forms input data to formData state.
    const handleChange = (e) => {
        // here we are destructuring name and value from the target (jo bh onChage ma pass hoga)
        const { name, value } = e.target;
        // here setting user inout data into state
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    //   This funciton is called on submit button to send data into API body request
    const handleCreateCategory = async (e) => {
        e.preventDefault();
        console.log(formData, "FORM DATA AVAILABLE");

        // Send Form Data
        const response = await ApiBaseUrl.post("/category", formData)
        console.log(response, 'response');
        if (response.status) {
            alert("Category created successfully");
            setFormData({
                name: "",
                description: "",
                image: "",
                status: true,
            });
        } else {
            alert("Failed to create category");
        }
    };

    return (
        <form className="category-form">
            <h1>Create Category</h1>
            <div>
                <label htmlFor="name">Enter Category Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Category Name"
                />
            </div>

            <div>
                <label htmlFor="description">Enter Category Description</label>
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="image">Enter Category Image URL</label>
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="status">Select Category Status</label>
                <select
                    name="status"
                    id="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select>
            </div>

            <button onClick={handleCreateCategory}>Create Category</button>
        </form>
    );
}

export default CreateCategory;
