
/*
 * action types
 */
export const SOME_ACTION = 'SOME_ACTION'

export const SOME_ACTION_PARAMS = 'SOME_ACTION_PARAMS'

/*
 * action creators
 */

export const someDoAction = () => {
    return {
      type: SOME_ACTION,
      data: {},
    }
  }

export const someDoActionWithParams = params => {
  return {
    type: SOME_ACTION_PARAMS,
    data: { ...params },
  }
}


