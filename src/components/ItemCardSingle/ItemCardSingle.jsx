import { Link } from "react-router"
import { Skeleton } from '@chakra-ui/react'
import { useState } from "react"


export const ItemCardSingle = ({data}) => {

    const [loading, setLoading] = useState(true)

    return (
        <Link to={`/product/${data.id}`}>
        <article className="itemCardSingle">
            <Skeleton isLoaded={!loading} startColor='grey' endColor='white'>
                <img src={data.images[1] ? data.images[1] : data.images[0]} alt={data.title} onLoad={() => {setLoading(false)}}/>
            </Skeleton>

            
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