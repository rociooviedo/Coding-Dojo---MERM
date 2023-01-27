import React, {Component} from 'react';
import styles from './main.module.css';

class Main extends Component{
    render(){
        return <div id={styles.mainn}>{this.props.children}</div>;
    }
}
export default Main;