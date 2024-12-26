const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGN_UP: '/sign-up',
  EMAIL_VERIFICATION: '/email-verification',
  FORGOT_PASSWORD: '/forgot-password',
  ONBOARDING: '/onboarding',
  MY_PROFILE: '/my-profile',
  EDIT_PROFILE: '/edit-profile',
  SETTINGS: '/my-profile/settings',
  CHANGE_EMAIL: '/my-profile/settings/change-email',
  CONFIRM_CHANGE_EMAIL: '/my-profile/settings/change-email/confirm',
  SUCCESS_CHANGE_EMAIL: '/my-profile/settings/change-email/success',
  CHANGE_PASSWORD: '/my-profile/settings/change-password',
  CONFIRM_CHANGE_PASSWORD: '/my-profile/settings/change-password/success',
  COMPANY_DETAILS: ({ id }: { id: string }) => `/my-companies/${id}`,
  EDIT_COMPANY: ({ id }: { id: string }) => `/my-companies/${id}/edit`,
  JOB_SEEKER_PROFILE: ({ id }: { id: string }) => `/job-seekers/${id}`
}

export { ROUTES }
