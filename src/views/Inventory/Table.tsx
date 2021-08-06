import React from 'react'
import { Table, Tag, Space } from 'antd'
interface Item{
  id: string
  name: string
  type: string
  price: number
  stock: number
}
const data: Item[] = [
  {
    id: '1',
    name: 'vaso',
    type: 'cocina',
    price: 10.2,
    stock: 0
  },
  {
    id: '2',
    name: 'peluche',
    type: 'juguete',
    price: 5,
    stock: 4
  },
  {
    id: '3',
    name: 'pelota',
    type: 'juguete',
    price: 20,
    stock: 20
  },
  {
    id: '4',
    name: 'toalla',
    type: 'cocina',
    price: 7.99,
    stock: 10
  }
]
export const InventoryTable:React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text:string) => <a>{text}</a>
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'Stock',
      key: 'stock',
      dataIndex: 'stock',
      render: (tag:number) => {
        let color = tag > 5 ? 'geekblue' : 'volcano'
        if (tag === 0) {
          color = 'red'
        }
        return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
        )
      }
    },
    {
      title: 'Action',
      key: 'action',
      render: (text:string, record:any) => (
      <Space size="middle">
        <a>View</a>
      </Space>
      )
    }
  ]
  return (
    <Table columns={columns} dataSource={data} rowKey='id'/>
  )
}
