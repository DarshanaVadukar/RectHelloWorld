import { Dispatch } from 'redux';

export const addToFavourite = (item: any) => {
    console.log("ADD_TO_FAVORITES" , item);
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'ADD_TO_FAVORITES',
            payload: item,
        });
    }
};

export function unFavourite(item :any){
    console.log("REMOVE_FROM_FAVORITES" , item);
    return(dispatch : Dispatch)=>{
        dispatch({
            type: 'REMOVE_FROM_FAVORITES',
            payload: item,
        })
    };
}