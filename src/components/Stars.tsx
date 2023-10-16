import { FC } from 'react'
import Star from './Star'
import '../App.css'

type props = {
    count: number;
}
const Stars: FC<props> = ({count}) => {
    const arrayStars: number[] = new Array(count).fill(0)
  return (
    <>
        {arrayStars.length > 0 && arrayStars.length < 6 && (
        <ul className="card-body-stars u-clearfix">
            {arrayStars.map((_star,index) => {
                return <Star key={Math.random() * index}/>
            })}
        </ul>
        )}
    </>
  )
}

export default Stars


