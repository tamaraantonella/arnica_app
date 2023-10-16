import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
//@ts-ignore
import logo from '../../assets/logosinbc.png';
import { db } from '../../firebaseConfig';
import { CartWidget } from '../cart-widget';
import { getCollectionFromDb } from '@utils/get-collection-from-db';
import { CategorySchema } from 'src/types/category';

interface NavbarProps {
  isFooter: boolean;
}

interface Category {
  id: string;
  name?: string;
  route?: string;
}

export const Navbar = ({ isFooter }: NavbarProps) => {
  const [categories, setCategories] = React.useState<Category[]>([]);

  useEffect(() => {
    getCollectionFromDb({
      cb: setCategories,
      collectionName: 'categorias',
      dataSchema: CategorySchema.array()
    });
  }, []);

  if (isFooter) {
    return (
      <nav className="max-w-[1300px] mt-4 flex my-0 mx-auto h-28 justify-around items-center bg-light-bg">
        <ul className="flex justify-around items-center list-none m-0 p-0 gap-4">
          <Link to="/" className="decoration-0 text-main-dark hover:text-main-light">
            {' '}
            <li className="mt-2">Home</li>
          </Link>
          {categories?.map((cat) => {
            return (
              <li key={cat.id} className="mt-2">
                <NavLink
                  to={`/category/${cat.route}`}
                  className="decoration-0 text-main-dark hover:text-main-light"
                >
                  {cat.name}
                </NavLink>
              </li>
            );
          })}
          <AiOutlineInstagram className="mt-2 decoration-0 text-main-dark hover:text-main-light" />
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="max-w-[1300px] flex my-0 mx-auto h-28 justify-around items-center bg-light-bg">
        <div className="flex flex-col justify-around items-center list-none m-0 p-0">
          <div className="w-12 h-10">
            <img className="object-cover w-full h-full" src={logo} alt="logo" />
          </div>
          <Link to="/" className="decoration-0 text-main-dark hover:text-main-light">
            <p className="hidden">Árnica Yoga</p>
          </Link>
        </div>
        <ul className="flex justify-around items-center list-none m-0 p-0 gap-4">
          <NavLink to="/" className="decoration-0 text-main-dark hover:text-main-light">
            {' '}
            <li className="mt-2">Home</li>
          </NavLink>
          <NavLink
            to="/category/mats"
            className="decoration-0 text-main-dark hover:text-main-light"
          >
            {' '}
            <li className="mt-2">YogaMats</li>
          </NavLink>
          <NavLink to="/category/acc" className="decoration-0 text-main-dark hover:text-main-light">
            {' '}
            <li className="mt-2">Accesories</li>
          </NavLink>
        </ul>
        <Link to="/cart" className="decoration-0 text-main-dark hover:text-main-light">
          <CartWidget />
        </Link>
      </nav>
    );
  }
};
