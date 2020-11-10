import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import item from '../../reducers/product_item';
import callApi from './../../utils/ApiCaller'
import { connect } from 'react-redux'

class ProductsActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'id': '',
            'name': '',
            'description': '',
            'price': '',
            'status': ''
        };
    }



    onChange = (event) => {
        var key = event.target.name;
        var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            [key]: value
        })
    }

    formSubmit = (e) => {
        var history = this.props.history;
        e.preventDefault();

        if (this.props.match) {

            var id = this.props.match.params.id;
            const { name, description, price, status } = this.state;
            console.log("Chỗ put api")
            callApi('PUT', `http://localhost:3000/items/${id}`, {
                'name': name,
                'description': description,
                'price': price,
                'status': status
            }).then(res => {
                console.log("Sửa thành công");
                history.goBack();               /*  this.props.history.goBack(); */
                /*  browserHistory.goBack(); */
            })
            
        }
        else {

            var { name, description, price, status } = this.state;
            callApi('POST', 'http://localhost:3000/items', {
                'name': name,
                'description': description,
                'price': price,
                'status': status
            }).then(res => {
                history.goBack();
                /*   browserHistory.goBack(); */
            })
            /*  var history = this.props.history; */


        }
    }


    /*  componentDidMount() {
         var { item } = this.props;
         this.setState({
             'id': item.id,
             'name': item.name,
             'description': item.description,
             'price': item.price,
             'status': item.status
         })
         console.log('didmount')
     } */
    componentDidMount() {
        if (this.props.match) {
            console.log(this.props.match.params.id);
            var id = this.props.match.params.id;
            callApi('GET', `http://localhost:3000/items/${id}`, null
            ).then(res => {
                console.log("Gọi api thành công!!");
                console.log(res.data);
                this.setState({
                    'name': res.data.name,
                    'description': res.data.description,
                    'price': res.data.price,
                    'status': res.data.status,
                    'id': res.data.id
                })
            })
        }
    }




    render() {
        if (this.props.match) {
            var id = this.props.match.params.id;
            console.log(id);
        }
        var { name, description, price, status, id } = this.state;
        var checked = status ? 'checked' : ''

        return (
            <div>
                <div className="container">
                    <div className="contain">
                        <h2>Thêm sản phẩm mới</h2>
                        <form onSubmit={this.formSubmit} action="/action_page.php">
                            <div className="form-group">
                                <label htmlFor="email">Tên sản phẩm:</label>
                                <input onChange={this.onChange} value={name} type="text" className="form-control" placeholder="Tên sản phẩm" name="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="des">Mô tả</label>
                                <textarea onChange={this.onChange} id="des" name="description" defaultValue={description} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">Giá</label>
                                <input value={price} onChange={this.onChange} type="text" className="form-control" id="pwd" placeholder="Giá" name="price" />
                            </div>
                            <div className="form-checkbox">
                                <input onChange={this.onChange} value={status} checked={checked} type="checkbox" name="status" id="check" />
                                <label htmlFor="check" className="check">Còn hàng</label>
                            </div>
                            <div className="btn-group">
                                <Link to='/products-list' href="/products-list" className="btn btn-primary mr-2">Trở lại</Link><a>
                                    <button type="submit" className="btn btn-success">{id?"Lưu lại":'Thêm mới'}</button>
                                </a></div><a>
                            </a></form></div><a>
                    </a></div><a>
                </a></div >




        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        item: state.item
    }
}
export default connect(mapStateToProps, null)(ProductsActionPage)