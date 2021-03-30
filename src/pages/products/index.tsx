import React from 'react'
import { connect } from 'umi'
import ProductList from '@/components/ProductList'

interface Products {
  name: string
}

const Products: React.FC<{ dispatch: any; products: Products[] }> = ({
  dispatch,
  products,
}) => {
  function handleDelete(id: number) {
    dispatch({
      type: 'products/delete',
      payload: id,
    })
  }

  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  )
}

//({ products }: { products: Products[] }) => ({
//   products,
// })
const func = function (state: any): any {
  return {
    products: state.products,
  }
}

function f(state: any): any {
  return {
    products: state.products,
  }
}

const func1: (state: any) => any = function (state) {
  return {
    products: state.products,
  }
}

interface FUNC2 {
  (state: any): any
}

const func2: FUNC2 = function (state) {
  return {
    products: state.products,
  }
}

export default connect(func)(Products)
