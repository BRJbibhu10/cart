import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            title: "Mobile Phone",
            price: "999",
            qty: "1",
            img: ''
        }
        //this.increaseQuantity=this.increaseQuantity.bind(this);
    }

    increaseQuantity = () => {
        console.log('this',this)
    }

    render(){
        const {title,price,qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Price: Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                </div>
                <div className="cart-item-actions">
                    {/* Buttons need to be added */}
                    <img 
                    alt="increase" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png"
                    onClick={this.increaseQuantity}
                    />
                    <img 
                    alt="decrease" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                    />
                    <img 
                    alt="delete" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/2907/2907762.png"
                    />
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;