type TSectionProps = {
  id: string
  children: JSX.Element | JSX.Element[]
  backgroundColor?: string
}

const Section = ({ id, backgroundColor, children }: TSectionProps) => {
  return (
    <div style={{ backgroundColor: backgroundColor ?? "#fff", padding: " 0 0 48px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div id={id} style={{ height: 48 }}></div>
        {children}
      </div>
    </div>
  )
}

export default Section
