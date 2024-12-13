import { Link } from "react-router"


export const ItemCardSingle = ({data}) => {
    return (
        <Link to={`/product/${data.id}`}>
        <article className="itemCardSingle"> 
            <img src={data.images[1] ? data.images[1] : data.images[0]} alt="" />
            <div>
                <h4>{(data.category).toUpperCase().replace('-', ' ')}. {data.brand}</h4>
                <h2>{data.title}</h2>
                <h5>{data.description}</h5>
                <h3>${data.price}</h3>
            </div>
        </article>
        </Link>
    )
}