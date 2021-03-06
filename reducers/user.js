import {FETCH_USERS} from "../actions/types"
import * as ACTIONS from "../actions/user"


const UsersReducer = (state= [], action)=>{
		
			switch(action.type){

						case FETCH_USERS:
							return [...state, ...action.payload]
							break;
							default:
							return state
			}
}


export default UsersReducer