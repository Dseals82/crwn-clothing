import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items, id}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...restOfItemProps}) => (
                    <CollectionItem key={id} {...restOfItemProps} />
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;