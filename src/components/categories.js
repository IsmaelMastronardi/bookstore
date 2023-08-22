import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const { categoriesArr } = useSelector((store) => store.categoriesStore);
  useEffect(() => {
    dispatch(checkStatus('construction'));
  }, []);
  return (
    <p>{categoriesArr}</p>
  );
};
export default Categories;
