/*
 * action types
 */
export const INIT_DATA = 'INIT_DATA'

export const SOME_ACTION_PARAMS = 'SOME_ACTION_PARAMS'

/*
 * action creators
 */

export const initData = () => {
  return {
    type: INIT_DATA,
    data: [
      { id: '1', title: 'Hello world!' },
      { id: '2', title: 'Hello Next!' },
    ],
  }
}

export const someDoActionWithParams = params => {
  return {
    type: SOME_ACTION_PARAMS,
    data: { ...params },
  }
}
