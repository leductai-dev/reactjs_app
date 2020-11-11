import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class Contact extends Component {
render() {
return (
<div>
 
</div>
);
}
}
 
const mapStateToProps = (state, ownProps) => {
return {
prop: state.prop
}
}
 
const mapDispatchToProps = (dispatch, ownProps) => {
return {
dispatch1: () => {
dispatch(actionCreator)
}
}
}
 
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(component)