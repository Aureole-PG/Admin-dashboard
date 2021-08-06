import React from 'react'
import { useParams } from 'react-router'
const Item: React.FC = () => {
  const params = useParams()
  console.log(params)
  return (
        <div>
            item
        </div>
  )
}

export default Item
