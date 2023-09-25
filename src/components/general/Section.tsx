import { CSSProperties } from "react"

type TSectionProps = {
  id: string
  children: JSX.Element | JSX.Element[]
  style?: CSSProperties
}

const Section = ({ id, children, style }: TSectionProps) => {
  return (
    <div style={{ padding: " 0 0 48px 0", ...style }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <div id={id} style={{ height: 72 }}></div>
        {children}
      </div>
    </div>
  )
}

export default Section
