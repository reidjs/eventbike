export const DEMO_USER = 'DEMO_USER';
export const FLASH_MESSAGE = "FLASH_MESSAGE";

export const demoUser = (demoUser) => ({
  type: DEMO_USER,
  demoUser
})

export const flashMessage = (message) => ({
  type: FLASH_MESSAGE,
  message
})