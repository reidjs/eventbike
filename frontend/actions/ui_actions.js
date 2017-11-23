export const DEMO_USER = 'DEMO_USER';
export const FLASH_MESSAGE = "FLASH_MESSAGE";
export const CLEAR_FLASH = "CLEAR_FLASH";

export const demoUser = (demoUser) => ({
  type: DEMO_USER,
  demoUser
})

export const flashMessage = (message) =>
  {
    // console.log('flash message action')
    return ({
      type: FLASH_MESSAGE,
      message
    })
}

export const clearFlash = () => {
  return ({
    type: CLEAR_FLASH
  })
}