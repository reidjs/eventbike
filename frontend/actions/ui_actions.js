export const ENTER_TEXT = 'ENTER_TEXT';
export const CHANGE_PATH = 'CHANGE_PATH';
export const DEMO_USER = 'DEMO_USER';

export const demoUser = (user) => ({
  type: DEMO_USER,
  user
})
export const enterText = (text) => ({
  type: ENTER_TEXT,
  text
})
export const changeHashRouterPath = (path) => ({
  type: CHANGE_PATH,
  path
})