import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector'; 
import { useParams } from 'react-router-dom';
import './category.styles.scss'
import { useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
  const {category} = useParams();
  console.log('render')
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(()=>{
    console.log('effect fired')
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])

  return (
    <div className='category-preview-container'>
    <h2 className="title">{category.toUpperCase()}</h2>
      <div className="preview">
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    
    </div>
  );

}

export default Category;