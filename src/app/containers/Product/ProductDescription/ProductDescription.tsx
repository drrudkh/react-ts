import React from 'react';

interface IProps {
  metadata: any;
  toggleModal: () => void;
  addToCart: () => void;
}

const ProductDescription: React.SFC<IProps> = props => {
  const { title, author, language, pages } = props.metadata;
  return (
    <div className="product-body">
      <img
        src="http://thebookcovermachine.com/wp-content/uploads/2014/02/premade-exclusive-book-cover-601.jpg"
        onClick={props.toggleModal}
      />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <h3>{language}</h3>
      <h2 className="product-price">{`${pages} $`}</h2>
    </div>
  );
};

export default ProductDescription;
