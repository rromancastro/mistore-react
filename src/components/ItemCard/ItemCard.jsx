import { Skeleton } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router"

export const ItemCard = ({data}) => {

    const [loading, setLoading] = useState(true)

    return (
        <Link to={`/product/${data.id}`}>
            <article className="card">
                <Skeleton isLoaded={!loading}  startColor='grey' endColor='white'>
                <img src={data.thumbnail} alt={data.title} onLoad={() => {setLoading(false)}}/>
                </Skeleton>
                <div>
                    <h4>{data.category}. {data.brand}</h4>
                    <h2>{data.title}</h2>
                    <h3>${data.price}</h3>
                </div>
            </article>
        </Link>
    )
    }