import React from "react";

const SearchBar = ({ filterText, inStockOnly, onSearch, onInStockChange }) => {
    return (
        <div className="mb-3 text-center">
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Search..."
                value={filterText}
                onChange={(e) => onSearch(e.target.value)}
            />
            <div className="form-check text-center">
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={inStockOnly}
                    onChange={(e) => onInStockChange(e.target.checked)}
                />
                <label className="form-check-label">
                    Only show products in stock
                </label>
            </div>
        </div>
    );
};

export default SearchBar;

