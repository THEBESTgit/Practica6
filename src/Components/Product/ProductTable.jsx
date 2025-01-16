import React from "react";

const ProductTable = ({ products }) => {
    const categories = [...new Set(products.map(product => product.category))];
    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <React.Fragment key={category}>
                            <tr className="table-dark">
                                <td colSpan="2">{category}</td>
                            </tr>
                            {products.filter(product => product.category === category).map(product => (
                                <tr key={product.name}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
