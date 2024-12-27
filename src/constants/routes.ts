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
  CREATE_JOB_POST: ({ id }: { id: string }) =>
    `/my-companies/${id}/jobs/create`,
  JOB_POST_COMPANY: ({ id, companyId }: { id: string; companyId: string }) =>
    `/my-companies/${companyId}/jobs/${id}`,
  EDIT_JOB_POST: ({ id, companyId }: { id: string; companyId: string }) =>
    `/my-companies/${companyId}/jobs/${id}/edit`,
  JOB_POST_DETAIL: ({ id }: { id: string }) => `/jobs/${id}`,
  JOB_SEEKER_PROFILE: ({ id }: { id: string }) => `/job-seekers/${id}`
}

export { ROUTES }
