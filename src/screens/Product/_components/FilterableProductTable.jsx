import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { useSelector, useDispatch } from 'react-redux';

import { setProducts } from '../../../redux/product/productActions';

/*
const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];
Aqui pasaba por parametro el array de Products*/
const FilterableProductTable = () => {
    const product = useSelector((state) => state.product)
    const dispatch = useDispatch();
  
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  //aca podriamos llamar a la API, al array de productos vacio lo inicializa con estos valores
  useEffect(() => {
    dispatch(    
        setProducts([ //payload
            { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
            { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
            { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
            { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
            { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
            { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
    ]))
  },[]);

  return (
    <form action="">
      <div className='contenedor'>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
        />
      </div>
      <div className='contenedor'>
        <ProductTable
          products={product.PRODUCTS}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    </form>
  );
};

export default FilterableProductTable;