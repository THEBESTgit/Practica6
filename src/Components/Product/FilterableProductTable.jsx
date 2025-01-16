import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { products } from "../../data/products";

const FilterableProductTable = () => {
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleSearch = (text) => setFilterText(text);
    const handleInStockChange = (inStock) => setInStockOnly(inStock);

    const filteredProducts = products.filter(product => {
        const matchesFilterText = product.name.toLowerCase().includes(filterText.toLowerCase());
        const matchesStockStatus = inStockOnly ? product.stocked : true;
        return matchesFilterText && matchesStockStatus;
    });

    return (
        <div className="container mt-4">
            <h2 className="text-center">Product Table</h2>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onSearch={handleSearch}
                onInStockChange={handleInStockChange}
            />
            <ProductTable products={filteredProducts} />
        </div>
    );
};

export default FilterableProductTable;
