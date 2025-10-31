import React, { useState, useEffect } from "react";
import "./styles.css";
import ApiBaseUrl from "../../services/api";

const itemsPerPage = 10;
function ReadCategory() {
    const [categoriesData, setCategoriesData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    // Fetch categories
    async function getCategories() {
        try {
            const response = await ApiBaseUrl.get("/category");
            setCategoriesData(response.data.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    // Calculate total pages
    const totalPages = Math.ceil(categoriesData.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentCategories = categoriesData.slice(startIndex, startIndex + itemsPerPage);

    // Change page
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="read-category-container">
            <h1>Categories List</h1>

            {currentCategories.length > 0 ? (
                currentCategories.map((category) => (
                    <div className="read-category-card" key={category.id}>
                        <img src={category.image} alt={category.name} />
                        <div className="read-category-info">
                            <h2>{category.name}</h2>
                            <p>{category.description}</p>
                            <p className="status">
                                Status: {category.status ? "Active" : "Inactive"}
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <p style={{ textAlign: "center", color: "#777" }}>
                    No categories available.
                </p>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={currentPage === index + 1 ? "active" : ""}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>   
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default ReadCategory;
