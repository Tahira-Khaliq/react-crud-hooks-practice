import React, { useEffect, useState } from "react";
import ApiBaseUrl from "../../services/api";

function DeleteCategory() {
  const [categories, setCategories] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await ApiBaseUrl.get("/category");
        setCategories(response.data.data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    }
    fetchCategories();
  }, []);

  // Handle delete
  const handleDelete = async (e) => {
    e.preventDefault();
    if (!selectedId) {
      alert("Please select a category to delete");
      return;
    }
    try {
      await ApiBaseUrl.delete(`/category/${selectedId}`);
      alert("Category deleted successfully");
      // Refresh list
      setCategories(categories.filter((c) => c.id !== parseInt(selectedId)));
      setSelectedId("");
    } catch (error) {
      alert("Failed to delete category");
      console.error(error);
    }
  };

  return (
    <form className="delete-category-form">
      <h1>Delete Category</h1>

      <div>
        <label>Select Category to Delete</label>
        <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
          <option value="">-- Select --</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleDelete}>Delete Category</button>
    </form>
  );
}

export default DeleteCategory;
