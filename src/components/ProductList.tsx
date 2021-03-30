import React from 'react'
import PropTypes from 'prop-types'
import { Table, Popconfirm, Button } from 'antd'

interface OnDelete {
  (id: number): void
}

interface Products {
  name: string
}

const ProductList: React.FC<{ products: Products[]; onDelete: OnDelete }> = ({
  products,
  onDelete,
}) => {
  const columns = [
    { title: 'Name', dataIndex: 'name' },
    {
      title: 'Actions',
      render(text: string, record: any) {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        )
      },
    },
  ]

  return <Table dataSource={products} columns={columns} />
}

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
}

export default ProductList
