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
    <div className="flex flex-col  md:flex-row">
      <div >
        {/* Filter */}
        <h1 className="p-2 font-semibold m-2 text-xl">FILTERS</h1>
        <div className="border-2 w-52 m-4 h-fit p-6">
          <h1>CATEGORIES</h1>
          <div>
            <input
              type="checkbox"
              className="p-6"
              id="men"
              value="men"
              onChange={(e) => handleFilterChange(e, "category")}
            />
            <label className="p-3" htmlFor="men">Men</label><br/>
            <input
              type="checkbox"
              className="p-6"
              id="women"
              value="women"
              onChange={(e) => handleFilterChange(e, "category")}
            />
            <label className="p-3" htmlFor="women">Women</label><br/>
            <input
              type="checkbox"
              className="p-6"
              id="kids"
              value="kids"
              onChange={(e) => handleFilterChange(e, "category")}
            />
            <label className="p-3" htmlFor="kids">Kids</label><br/>
          </div>
        </div>
        <div className="border-2 w-52 m-4 h-fit p-6">
          <h1 className="p-2 font-semibold">Type</h1>
          <div>
            <input
              type="checkbox"
              className="p-6"
              id="Topwear"
              value="topwear"
              onChange={(e) => handleFilterChange(e, "type")}
            />
            <label className="p-3" htmlFor="Topwear">Topwear</label><br/>
            <input
              type="checkbox"
              className="p-6"
              id="Bottomwear"
              value="bottomwear"
              onChange={(e) => handleFilterChange(e, "type")}
            />
            <label className="p-3" htmlFor="Bottomwear">Bottomwear</label><br/>
            <input
              type="checkbox"
              className="p-6"
              id="Winterwear"
              value="winterwear"
              onChange={(e) => handleFilterChange(e, "type")}
            />
            <label className="p-3" htmlFor="Winterwear">Winterwear</label><br/>
          </div>
        </div>
      </div>
      <div className="w-full">
        {/* Products */}
        <div className="flex flex-row justify-around w-full text-center">
          <h1 className="p-2 font-semibold m-2 text-xl">PRODUCTS</h1>
          <select
            name="sort"
            className="border-2 w-fit h-10 p-2 m-2"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="Low to High">Sort By: Low to High</option>
            <option value="High to Low">Sort By: High to Low</option>
          </select>
        </div>
        <div className="flex flex-wrap flex-row justify-center">
          {filteredProducts.map(product => (
            <Product key={product.id} id={product.id} name={product.name} price={product.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
