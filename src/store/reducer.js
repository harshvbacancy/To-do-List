import * as actionTypes from './actions'

const intialState = {
    items:[],
    id:0,
    item:"",
    editItem: false,
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
    
        case actionTypes.ADD_TASK:
                const title= action.item
              console.log(title)
            return {
                ...state,
                items: state.items.concat({id: new Date(),title}),
                editItem: false 
                
            }
        case actionTypes.EDIT_TASK:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.Itemid),
                editItem: true

            }
        case actionTypes.DELETE_TASK:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.Itemid)
            }
        default :
            return state;  
    }


}

export default reducer;
