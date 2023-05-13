import React from 'react'
import ObjList from './productsUI/ObjList'

const ProductMenu = () => {
  return (
    <div className=''>
        <h1 className='text-2xl font-semibold'>Kategorie</h1>
        <br/>
        <ObjList menuItems={[{label:"Okna",href:"xd",subMenu:[{label:'pe78',href:'/oferta/okna/Pe78',},{label:'pe78n',href: '/subcategory1-1',},{label:'pe78n-slim',href: '/subcategory1-1',},{label:'pe78nHL',href: '/subcategory1-1',},{label:'pe96',href: '/subcategory1-1',}]},
        {label:"Systemy przesuwne",href:"xd",subMenu:[{label:'Subcategory 1-1',href: '/subcategory1-1',},{label:'Subcategory 1-1',href: '/subcategory1-1',},{label:'Subcategory 1-1',href: '/subcategory1-1',}]},
        {label:"Drzwi",href:"xd",subMenu:[{label:'Subcategory 1-1',href: '/subcategory1-1',},{label:'Subcategory 1-1',href: '/subcategory1-1',},{label:'Subcategory 1-1',href: '/subcategory1-1',}]},
        {label:"Ochrona przeciwsloneczna",href:"xd",subMenu:[{label:'Subcategory 1-1',href: '/subcategory1-1',},{label:'Subcategory 1-1',href: '/subcategory1-1',},{label:'Subcategory 1-1',href: '/subcategory1-1',}]},]}/>
    </div>
  )
}

export default ProductMenu