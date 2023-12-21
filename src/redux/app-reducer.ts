type AppStateType = {
  status: RequestStatusType;
};
export type RequestStatusType = 'loading' | 'succeeded' | 'failed';
const initialState = {
  status: 'succeeded' as RequestStatusType,
};
type ActionType = ReturnType<typeof setAppStatusAC>;
const appReducer = (state = initialState, action: ActionType): AppStateType => {
  switch (action.type) {
    case 'SET-APP-STATUS':
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const setAppStatusAC = (status: RequestStatusType) => {
  return { type: 'SET-APP-STATUS', status } as const;
};
export default appReducer;
