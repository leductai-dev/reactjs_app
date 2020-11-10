import React, { Component } from 'react'
import callApi from '../../utils/ApiCaller';
import {
    Link
} from 'react-router-dom';
import {connect} from 'react-redux'


export default class ProductItem extends Component {
  delete = (id) => {
      this.props.getId(id);
  } 
  send = (item_x) =>{
    this.props.getItem(item_x);
  }
  
  render() {
    var { product, index } = this.props;
    var statusClass = product.status ? "badge-primary" : "badge-warning";
    var statusName = product.status ? "Còn hàng" : "Hết hàng"
    return (

      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td><span>{product.description}</span></td>
        <td><span>{product.price}</span></td>
        <td className="text-center "><span className={`badge badge-pill ${statusClass}`}>{statusName}</span></td>
        <td>
          <div className="btn-group">
            <Link to={`/product/${product.id}/edit`} className="btn btn-primary" /* onClick={(item_x)=>this.send(product)} */>Sửa</Link>
            <button type="button" onClick={(id)=>this.delete(product.id)} className="btn btn-success">Xóa</button>
          </div>
        </td>
      </tr>

    )
  }
}

/* const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getItem: (items) => {
      dispatch({
        type : "getItem",
        getitem : items
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductItem) */


