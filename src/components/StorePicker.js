import React from 'react';
import {getFunName} from '../helpers';


class StorePicker extends React.Component{

    goToStore(event){
        event.preventDefault();
        //first grab text from input
            console.log(this.storeInput.value);
        // second transition url
        console.log('Url Changed');
    }

    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
                {/*HELLO COMMENTO*/}
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
                <button type="submit" >Visit Store</button>
            </form>

        )
    }
}


export default StorePicker;