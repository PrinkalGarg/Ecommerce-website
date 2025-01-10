import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Product from '../component/Productdisplay';

function Collection() {
  const { products } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);
  const [sortOrder, setSortOrder] = useState("Low to High");

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleFilterChange = (e, filterType) => {
    const { value, checked } = e.target;
    if (filterType === "category") {
      setCategory(checked ? [...category, value] : category.filter(c => c !== value));
    } else if (filterType === "type") {
      setType(checked ? [...type, value] : type.filter(t => t !== value));
    }
  };

  useEffect(() => {
    const filtered = products.filter(product => {
      const categoryMatch = category.length ? category.includes(product.category) : true;
      const typeMatch = type.length ? type.includes(product.type) : true;
      return categoryMatch && typeMatch;
    });
    setFilteredProducts(filtered);
  }, [products, category, type]);

  useEffect(() => {
    const sorted = [...filteredProducts].sort((a, b) => {
      return sortOrder === "Low to High" ? a.price - b.price : b.price - a.price;
    });
    setFilteredProducts(sorted);
  }, [sortOrder]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 p-4">
        {/* Filter */}
        <h1 className="p-2 font-semibold text-xl">FILTERS</h1>
        <div className="border-2 p-4">
          <h2 className="font-semibold">CATEGORIES</h2>
          <div>
            <input
              type="checkbox"
              id="men"
              value="men"
              onChange={(e) => handleFilterChange(e, "category")}
            />
            <label htmlFor="men" className="ml-2">Men</label><br />
            <input
              type="checkbox"
              id="women"
              value="women"
              onChange={(e) => handleFilterChange(e, "category")}
            />
            <label htmlFor="women" className="ml-2">Women</label><br />
            <input
              type="checkbox"
              id="kids"
              value="kids"
              onChange={(e) => handleFilterChange(e, "category")}
            />
            <label htmlFor="kids" className="ml-2">Kids</label><br />
          </div>
        </div>
        <div className="border-2 p-4 mt-4">
          <h2 className="font-semibold">TYPE</h2>
          <div>
            <input
              type="checkbox"
              id="Topwear"
              value="topwear"
              onChange={(e) => handleFilterChange(e, "type")}
            />
            <label htmlFor="Topwear" className="ml-2">Topwear</label><br />
            <input
              type="checkbox"
              id="Bottomwear"
              value="bottomwear"
              onChange={(e) => handleFilterChange(e, "type")}
            />
            <label htmlFor="Bottomwear" className="ml-2">Bottomwear</label><br />
            <input
              type="checkbox"
              id="Winterwear"
              value="winterwear"
              onChange={(e) => handleFilterChange(e, "type")}
            />
            <label htmlFor="Winterwear" className="ml-2">Winterwear</label><br />
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/4 p-4">
        {/* Products */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-semibold text-xl">PRODUCTS</h1>
          <select
            name="sort"
            className="border-2 p-2"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="Low to High">Sort By: Low to High</option>
            <option value="High to Low">Sort By: High to Low</option>
          </select>
        </div>
        <div className="grid ml-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <Product key={product.id} id={product.id} name={product.name} price={product.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
