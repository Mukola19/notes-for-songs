import {  searchText} from "../../../Redux/Reducer/HeaderReducer"
import { Header } from "./Header"
import { connect } from "react-redux"


let mapStateToProps = state => ({
    valueText: state.bigState.valueText
})


export const HeaderConteiner = connect(mapStateToProps,{searchText})(Header)