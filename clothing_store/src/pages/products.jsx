import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/productsComponenets/productCard'
import HorizontalCrousel from '../components/productsComponenets/HorizontalCrousel'

const Product = () => {
    const [data, setData] = useState([])
    const [categoryData, setCategoryData] = useState([])
    const [isloading, setisLoading] = useState(true)
    const [error, setError] = useState("")
    const getProducts = async () => {
        try {

            const response = await axios.get('https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json')
            setData(response.data)
            setCategoryData(response.data)
            setisLoading(false)

        } catch (e) {
            setError(e)
            isloading(true)
        }



    }

    useEffect(() => {
        getProducts()


    }, [])

    const filterByCategory = (category) => {
        if (category === 'all') {
            setCategoryData(data)
        } else if (category === 'Fashion & Apparel') {
            setCategoryData(data.filter((element, index) => element.category === category))
        } else if (category === 'Beauty & Personal Care') {
            setCategoryData(data.filter((element, index) => element.category === category))
        } else if (category === 'Health & Fitness') {
            setCategoryData(data.filter((element, index) => element.category === category))
        } else if (category === 'Electronics & Gadgets') {
            setCategoryData(data.filter((element, index) => element.category === category))
        } else if (category === 'Home & Kitchen') {
            setCategoryData(data.filter((element, index) => element.category === category))
        }
    }
    return (
        <div className='h-auto bg-gray-800'>
            <HorizontalCrousel products={data.filter(element => element.rating.stars >= 4.8)} />
            <div className="flex flex-wrap p-3 justify-between ">
                <div className='flex gap-2  '>

                    <button onClick={() => { filterByCategory('all') }} className='rounded-3xl px-4 py-1 bg-gray-500 text-white active:bg-emerald-800'>All</button>
                    <button onClick={() => { filterByCategory('Fashion & Apparel') }} className='rounded-3xl px-4 py-1 bg-gray-500 text-white active:bg-emerald-800'>Fashion & Apparel</button>
                    <button onClick={() => { filterByCategory('Beauty & Personal Care') }} className='rounded-3xl px-4 py-1 bg-gray-500 text-white '>Beauty & Personal Care</button>
                    <button onClick={() => { filterByCategory('Health & Fitness') }} className='rounded-3xl px-4 py-1 bg-gray-500 text-white '>Health & Fitness</button>
                    <button onClick={() => { filterByCategory('Electronics & Gadgets') }} className='rounded-3xl px-4 py-1 bg-gray-500 text-white '>Electronics & Gadgets</button>
                    <button onClick={() => { filterByCategory('Home & Kitchen') }} className='rounded-3xl px-4 py-1 bg-gray-500 text-white '>Home & Kitchen</button>
                </div>
                <div className="dropdown">
                    <span className=' font-semibold text-white'>Sort by : </span>
                    <select className='outline-none border-2 border-black py-2 px-2 rounded-lg bg-white'>
                        <option value="">select</option>
                        <option value="">high to low price</option>
                        <option value="">low to high price </option>
                    </select>
                </div>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-4 p-3'>

                {isloading ? <h1>Loading...</h1> : categoryData.map((product, index) => {
                    return <ProductCard product={product} />
                })}
            </div>
        </div>
    )
}

export default Product