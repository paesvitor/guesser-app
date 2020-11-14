function reducer(state = {}, action){
    switch(action.type){
      case 'message':
        return Object.assign({}, {message:action.data});
      default:
        return state;
    }
  }

export default reducer