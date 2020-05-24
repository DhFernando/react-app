import React from 'react'
import Button from '@material-ui/core/Button';

import {connect} from 'react-redux'
import {Provider} from 'react-redux'
import store from '../redux/store'

import {buyCake} from '../redux/index'
function  ReduxPractice(props) {
        return (
            <Provider store={store}>
                <div>
                    Redux Practice

                    <h4>Num of cakes -{props.numOfCakes} </h4>
                    <Button onClick={props.buyCake}>Buy cake</Button>
                </div>
            </Provider>
        )
    
}

const mapStateToProps = state => {
    return{
        numOfCakes : state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxPractice)