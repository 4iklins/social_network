const initialState = {
  isLogined: false,
};
type AuthStateType = typeof initialState;
type ActionsType = ReturnType<typeof authMeAC>;

const authReducer = (state = initialState, action: ActionsType): AuthStateType => {
  switch (action.type) {
    case 'AUTH-ME':
      return { ...state, isLogined: action.isLogined };
    default:
      return state;
  }
};

export const authMeAC = (isLogined: boolean) => {
  return { type: 'AUTH-ME', isLogined } as const;
};

export default authReducer;
