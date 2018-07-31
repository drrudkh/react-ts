import React from 'react';

import { IProductDetailsProps } from '../../../interfaces/product_details.interface';
import './_product-description.scss';

const ProductDescription: React.SFC<IProductDetailsProps> = props => {
  const { title, author, language, pages } = props.data;
  return (
    <div className="product-body">
      <img
        src="https://www.wallpaperup.com/uploads/wallpapers/2015/06/02/708335/c72310c801d4d992b1a55c7052acb782.jpg"
        onClick={props.onToggleModal}
      />
      <div className="metadata">
        <h2>{title}</h2>
        <h3>{author} - {language}</h3>
        <h3 className="product-price">{`${pages} $`}</h3>
        {props.children}
      </div>
    </div>
  );
};

export default ProductDescription;
