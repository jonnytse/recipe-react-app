// eslint-disable-next-line
import React, { Component } from "react";
import styles from './FavouriteList.module.scss';


class FavouriteList extends Component {
    
    render() {
        return (
            <>  
            <div>
                <p>"hello"</p>
            </div>
            <div onClick={this.props.signOut}>
                <button className={styles.signoutButton}>
                    Sign out
                </button>
            </div>
            </>    
        );
    }
}

export default FavouriteList;