export interface LoginDto {
  email: string
  password: string
}

export interface SignUpLoginDto {
  email: string
  password: string
}

export interface ChangeEmailDto {
  email: string
}

export interface UpdatePassword {
  password: string
}
