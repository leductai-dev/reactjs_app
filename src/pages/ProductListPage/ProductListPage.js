import React, { Component } from 'react'
import ProductList from '../../components/ProductList/ProductList'
import {
    Link
} from "react-router-dom";
import ProductItem from '../../components/ProductItem/ProductItem'
import products from '../../reducers/products'
import { connect } from 'react-redux'
import callApi from './../../utils/ApiCaller.js'
import {Action_Fetch_API,Fetch_API} from './../../Redux-action/actions.js'


class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        console.log("bat dau dispatch");
        console.log(this.props);
        // this.props.getData();
        this.props.getData();
         console.log("end dispatch");
    }

// vậy đó a, nó chạy đc nhưng ko render đc sản phẩm //  em log ra dât thu xem, e log rồi mà
    /* getId =(id)=>{
       console.log(`id lấy được là ${id}`);
       this.state.products.forEach((product,index) =>{
        if(product.id === id){
           var tempData = this.state.products.filter((a,b)=>{
               return a !== product
           })
           this.setState({
            products: tempData
        })
        }
       
    })
    } */

    getId = (id) => {
        callApi('DELETE', `http://localhost:3000/items/${id}`).then(res => {
            console.log(res);
            if (res.status === 200) {
                console.log('here');
                var pro = [...this.props.products];
                var tmp = this.findIndex(id);
                if(tmp !== -1){
                pro.splice(tmp, 1);
                console.log(pro);
                this.props.setData(pro);
                }
                else{
                    console.log(tmp);
                }
            }
        });
    }

    findIndex = (id) => {
        var result = -1;
        this.props.products.forEach((item, index) => {
            if (item.id == id) {
                    result = index;
            }
        })
        return result;
    }



    render() {
        var {products} = this.props;
        return (
            <div>
                <div className="container mt-5">
                    <h1  className="text-center">Danh sách sản phẩm</h1>
                    <Link to="/addProducts" className="add"><i className="fa fa-plus" aria-hidden="true">   Thêm mới sản phẩm</i></Link>
                    <ProductList>{this.showProduct(products)}</ProductList>
                </div>
            </div>
        );
    }
    showProduct(products) {
        return products.map((product, index) => {
            return (
                <ProductItem
                    key={index}
                    product={product}
                    index={index}
                    getId={this.getId}
                />
            )
        });
    }


}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
 const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getData: () => {
            dispatch(Action_Fetch_API());
        },
        setData: (data) =>{ 
            dispatch(Fetch_API(data));
        }
    }
} 
export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage)

