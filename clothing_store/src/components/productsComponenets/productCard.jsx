import { useCart } from "../../context/CartProvider";

const ProductCard = ({ product }) => {
    // const { name, image, rating, priceCents, category, subCategory, description } = product
    const { addToCart } = useCart()

    return (
        <div className="bg-white border border-gray-100 rounded-xl w-72 overflow-hidden">

            <div className="relative bg-green-50 h-52 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="h-44 w-full object-contain px-4" />
                <span className="absolute top-3 left-3 bg-green-50 border border-green-300 text-green-800 text-xs font-medium px-2 py-1 rounded-lg">
                    {product.category}
                </span>
                <button className="absolute top-3 right-3 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-400">
                    ♡
                </button>
            </div>

            <div className="p-4">
                <p className="text-xs text-gray-400 mb-1">{product.subCategory}</p>
                <h3 className="text-base font-medium mb-2">{product.name}</h3>

                <div className="flex items-center gap-2 mb-3">
                    <span className="text-amber-500 text-sm">★ {product.rating.stars}</span>
                    <span className="text-xs text-gray-400">({product.rating.count} reviews)</span>
                </div>

                <p className="text-xs text-gray-500 mb-3 line-clamp-2">{product.description}</p>

                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-medium">${(product.priceCents / 100).toFixed(2)}</span>
                    <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-lg">In stock</span>
                </div>

                <div className="flex gap-2">
                    <button onClick={() => {
                        addToCart(product)
                    }} className="flex-1 bg-green-600 text-white rounded-lg py-2 text-sm font-medium cursor-pointer hover:scale-105 transition-transform duration-200 active:bg-green-700">
                        Add to cart
                    </button>

                </div>
            </div>
        </div>
    )
}


export default ProductCard;