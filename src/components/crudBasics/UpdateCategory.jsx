import React, { useEffect, useState } from "react";
import ApiBaseUrl from "../../services/api";

function UpdateCategory() {
    const [categories, setCategories] = useState([]);
    const [selectedId, setSelectedId] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: "",
        status: true,
    });

    // Fetch categories to select which one to update
    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await ApiBaseUrl.get('/category');
                setCategories(response.data.data);
                console.log(response, 'response');
            } catch (error) {
                console.error("Failed to fetch categories", error);
            }
        }
        fetchCategories();
    }, []);

    // When user selects a category, fill form with its details
    const handleSelectCategory = (e) => {
        const id = e.target.value;
        setSelectedId(id);
        const category = categories.find((c) => c.id === parseInt(id));
        if (category) {
            setFormData({
                name: category.name,
                description: category.description,
                image: category.image,
                status: category.status,
            });
        }
    };

    // Handle form changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle update submit
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await ApiBaseUrl.put(`/category/${selectedId}`, formData);
            alert("Category updated successfully");
            setSelectedId(null);
            setFormData({
                name: "",
                description: "",
                image: "",
                status: true,
            });
        } catch (error) {
            alert("Failed to update category");
            console.error(error);
        }
    };

    return (
        <form className="update-category-form">
            <h1>Update Category</h1>

            <div>
                <label>Select Category to Update</label>
                <select value={selectedId} onChange={handleSelectCategory}>
                    <option value="">-- Select --</option>
                    {categories && categories.map((c) => (
                        <option key={c.id} value={c.id}>
                            {c.name}
                        </option>
                    ))}
                </select>
            </div>

            {selectedId && (
                <>
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter Category Name"
                        />
                    </div>

                    <div>
                        <label>Description</label>
                        <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter Description"
                        />
                    </div>

                    <div>
                        <label>Image URL</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="Enter Image URL"
                        />
                    </div>

                    <div>
                        <label>Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option value="true">Active</option>
                            <option value="false">Inactive</option>
                        </select>
                    </div>

                    <button onClick={handleUpdate}>Update Category</button>
                </>
            )}
        </form>
    );
}

export default UpdateCategory;
