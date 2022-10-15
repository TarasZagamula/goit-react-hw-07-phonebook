import {ContactListStyled, ContactListItemStyled, ContactListNameStyled,ContactListNumberStyled} from "./ContactList.styled";
import {PhoneboockButtonStyled} from "../Box/Button.styled"


export const ContactList = ({numberList, onDeleteItem}) => {
    return(
        <ContactListStyled>
            {numberList.map(i => {
                return (          
                      <ContactListItemStyled key={i.id}>
                        <ContactListNameStyled>{i.name}</ContactListNameStyled>
                        <ContactListNumberStyled>{i.tel}</ContactListNumberStyled>
                        <PhoneboockButtonStyled type="button" children="del" onClick={() => {onDeleteItem(i.id)}}/>
                        </ContactListItemStyled>
                )
        })}
        </ContactListStyled>
    )

};

