import { useMemo, useState } from 'react';
import { useGetProductsQuery, type Product } from "../app/productsApi";
import ProductCard from "./ProductCard";

const Products = () => {
    const [sortBy, setSortBy] = useState<string>("default");

    const { data, isLoading, isError } = useGetProductsQuery();
    const products = useMemo(() => data?.products ?? [], [data]);

    const [visibleCount, setVisibleCount] = useState<number>(4);

    const sortedProducts = useMemo(() => {
        const sorted = [...products];
        if (sortBy === "priceLowToHigh") return sorted.sort((a, b) => a.price - b.price);
        if (sortBy === "priceHighToLow") return sorted.sort((a, b) => b.price - a.price);
        if (sortBy === "nameAZ") return sorted.sort((a, b) => a.name.localeCompare(b.name));
        if (sortBy === "nameZA") return sorted.sort((a, b) => b.name.localeCompare(a.name));
        return sorted;
    }, [sortBy, products]);


    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 4);
    };

    if (isLoading) return <p className="product-text">Loading products...</p>
    if (isError) return <p className="product-text">Error loading products.</p>

    return (
        <>
            <div className="product-container">
                <div className="product-description">
                    <h4>Featured Products</h4>
                    <h3>BESTSELLER PRODUCTS</h3>
                    <p>Problems trying to resolve the conflict between </p>
                </div>

                <div className="product-sortbar">
                    <label htmlFor="sort">Sort by:</label>
                    <select id="sort" onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                        <option value="">-- Default --</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                        <option value="nameAZ">Name: A to Z</option>
                        <option value="nameZA">Name: Z to A</option>
                    </select>
                </div>


                <div className="product-card-container">
                    {sortedProducts.slice(0, visibleCount).map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {visibleCount < products.length && (
                    <div>
                        <button onClick={handleLoadMore} className="product-button">LOAD MORE PRODUCTS</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Products;