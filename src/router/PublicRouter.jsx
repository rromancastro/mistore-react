import { BrowserRouter as Router, Routes, Route} from "react-router";
import { Home, ProductsByCategory, ItemDetail, ProductsSearch, CartView, NotFound } from '../pages'

export const PublicRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/products/:category" element={<ProductsByCategory />}/>
                <Route exact path="/product/:id" element={<ItemDetail />}/>
                <Route exact path="/products/search/:searchValue" element={<ProductsSearch />}/>
                <Route exact path="/cart-view" element={<CartView />}/>
                <Route exact path="*" element={<NotFound />}/>
            </Routes>
        </Router>
    )
}