import { Link } from "react-router"

export const ItemCard = ({data}) => {
    return (
        <Link to={`/product/${data.id}`}>
            <article className="card">
                <img src={data.thumbnail} alt="" />
                <div>
                    <h4>{data.category}. {data.brand}</h4>
                    <h2>{data.title}</h2>
                    <h3>${data.price}</h3>
                </div>
            </article>
        </Link>
    )
}