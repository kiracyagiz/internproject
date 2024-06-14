import React from 'react'
import CategoryCard from '../Card/CategoryCard'

const Categories = () => {

    const categoryNames =["TATTO SUPPLIES","BODY JEWELERY","PIERCING SUPPLIES","MEDICAL SUPPLIES","PERMANENT MAKEUP"]
  return (
    <div className='flex flex-col lg:flex-row   lg:mx-auto lg:justify-between lg:text-center justify-center  lg:items-center py-4 '>
    {
        categoryNames.map((dt,i) => (
            <CategoryCard title={dt} key={i}/>
        ))
    }
    </div>
  )
}

export default Categories
