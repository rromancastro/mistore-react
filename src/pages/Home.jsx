import { useEffect, useState } from 'react'
import { Layout } from '../Layout'
import { ItemListContainer } from '../components'
import { useGetProductsByCategory } from '../hooks'
import { Link } from 'react-router'


export const Home = () => {

    const [categorySelect, setCategorySelect] = useState('mens-shoes')
    const { products } = useGetProductsByCategory(categorySelect)
    
    return (
        <Layout>
            <section id='homeHeader'>
                <div id='homeHeaderInfo'>
                    <h1>OUTLET</h1>
                    <h2>50% off on sunglasses</h2>
                    <h3><Link to={'./products/:sunglasses'}>VIEW</Link></h3>
                    
                </div>
            </section>
            <section id='homeSecondSection'>
                <h1>Featured Products</h1>
                <div id='homeSecondSectionSelect'>
                    <h3 className={categorySelect == 'mens-shoes' ? 'sit' : ''} onClick={() => {setCategorySelect('mens-shoes')}}>Mens Shoes</h3>
                    <h3 className={categorySelect == 'womens-shoes' ? 'sit' : ''} onClick={() => {setCategorySelect('womens-shoes')}}>Womens Shoes</h3>
                    <h3 className={categorySelect == 'laptops' ? 'sit' : ''} onClick={() => {setCategorySelect('laptops')}}>Laptops</h3>
                    <h3 className={categorySelect == 'home-decoration' ? 'sit' : ''} onClick={() => {setCategorySelect('home-decoration')}}>Home Decoration</h3>
                    <h3 className={categorySelect == 'womens-bags' ? 'sit' : ''} onClick={() => {setCategorySelect('womens-bags')}}>Womens Bags</h3>
                </div>
                <ItemListContainer products={products}/>
            </section>
        </Layout>
    )
}