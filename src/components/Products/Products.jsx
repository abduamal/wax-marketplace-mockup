import React from 'react'
import Grid from '@material-ui/core'
import Product from './Product'

const products = [
  {
    id: 1,
    shop_id: 1,
    name: 'Black Soap',
    price: 20,
    description: '2lb brick of black soap produced by mothers in Nigeria.'
  },
  {
    id: 2,
    shop_id: 1,
    name: 'Shea Butter',
    price: 40,
    description: '5lb brick of shea butter produced by mothers in Ghana.'
   }
]

function Products() {
  <main>
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product}/>
        </Grid>
      ))}
    </Grid>
  </main>
}

export default Products
