import { BrowserRouter as Router, Routes, Route} from "react-router";
import { Home, ProductsSearch, ItemDetail } from '../pages'

export const PublicRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/products/:category" element={<ProductsSearch />}/>
                <Route path="/product/:id" element={<ItemDetail />}/>
            </Routes>
        </Router>
    )
}