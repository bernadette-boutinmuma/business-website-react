export const COLORS = {
  primary: "#268534",
  lightGrey: "#f8f8f8",
} as const

export const CONTACT_US_FORM = {
  subject: "subject",
  content: "content",
} as const

export const bannerImgStyle = {
  backgroundPosition: "center",
  position: "absolute",
  backgroundSize: "cover",
  inset: 0,
} as const

export const imageMuskStyle = {
  position: "absolute",
  inset: 0,
  backgroundColor: COLORS.primary,
  opacity: 0.75,
  filter: "brightness(40%)",
} as const

export const textContentCtnStyle = {
  textAlign: "center",
  position: "absolute",
  color: "#fff",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
} as const
