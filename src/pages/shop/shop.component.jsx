import React from 'react';
import SHOP_DATA from './shop.data';
import Collections from '../../components/collections/collections.component';

class Shop extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return(
            <div>
                <h1>Collections</h1>
                {
                    this.state.collections.map(({id, ...otherCollectionProps}) => {
                        return(
                            <Collections key={id} {...otherCollectionProps}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default Shop;