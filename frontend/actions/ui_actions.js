export const DEMO_USER = 'DEMO_USER';
export const REMOVE_FLASH = 'REMOVE_FLASH' 

export const demoUser = (demoUser) => ({
  type: DEMO_USER,
  demoUser
})

export const hideFlash = (payload) => ({
  type: REMOVE_FLASH,
  payload
});