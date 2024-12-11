import { ItemCard } from "../ItemCard/ItemCard"
import { ItemCardSingle } from "../ItemCardSingle/ItemCardSingle"
export const ItemListContainer = ({products}) => {

    return (
        <section id="itemListContainer">
            {
            products && products.length > 0 ? <ItemCardSingle data={products[0]}/> : null
            }
            <div id="itemAllListContainer">
                {
                products.map((product) => {
                    return  <ItemCard data={product} key={product.id}/>
                })
                }
            </div>
        </section>
    )
}