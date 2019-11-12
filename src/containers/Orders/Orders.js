import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../wrap/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component {

    // state = {
    //     orders: [],
    //     loading: true
    // }
    componentDidMount() {
        // axios.get('/orders.json')
        //     .then(res => {
        //         const fetchedOrders = [];
        //         for (let key in res.data) {
        //             fetchedOrders.push(
        //                 {
        //                     ...res.data[key],
        //                     id: key
        //                 }
        //             )
        //         }
        //         this.setState({ loading: false, orders: fetchedOrders });
        //     })
        //     .catch(err => {
        //         this.setState({ loading: false })
        //     })
        this.props.onFetchOrders(this.props.token);
    }
    render() {
        let orders = <Spinner />
        if (!this.props.loading) {
            orders = this.props.orders.map(
                order => {
                    return <Order key={order.id} ingredients={order.ingredients} price={order.price} />
                }
            )
        }
        return (
            <div>
                {orders}
            </div>
        )
    }
}

const mapPropsToState = (state) => {
    return {
        token: state.auth.token,
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrders(token))
    }
}

export default connect(mapPropsToState, mapDispatchToState)(withErrorHandler(Orders, axios));