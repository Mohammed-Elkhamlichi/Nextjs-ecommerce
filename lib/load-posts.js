export const loadPosts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    if (!res.ok) {
        throw new Error(`Faild to fetch data, received status ${res.status}`);
    }
    return products;
};
