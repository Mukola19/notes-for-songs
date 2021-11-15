import { showText } from "../../../Redux/Reducer/HeaderReducer"
import { SearchContent } from "./SeachContent"
import { connect } from "react-redux"



const mapStateToProps = state => ({
    newStateContent: state.bigState.newStateContent,
})

export const SeachContentConteiner = connect(
  mapStateToProps,
  {showText}
)(SearchContent)