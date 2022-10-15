import { PhoneboockInputStyled, PhoneboockLabelStyled } from "../Form/phoneboock-form.styled";
import React, {Component} from "react";
import { nanoid } from 'nanoid';

const searchInputId = nanoid()


class SearchInput extends Component {
state = {
searchValue: '',
};
    handleInputChange = e => {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value})
    }
    
    handleSearch = e => {
        this.props.onSearch(e.currentTarget.value)
    }

render() {
    return (
<PhoneboockLabelStyled id={searchInputId}>
Search
<PhoneboockInputStyled
id={searchInputId}      
type="text"
name="search"
value={this.state.search}
onChange={this.handleSearch} />
</PhoneboockLabelStyled>    
    )
 }

};

export default SearchInput;
