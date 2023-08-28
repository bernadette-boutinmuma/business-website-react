const Nav = () => {
  return (
    <div
      style={{
        zIndex: 100,
        backgroundColor: "#fff",
        boxShadow: "0 0 16px rgba(0,0,0,0.1)",
        position: "fixed",
        inset: "0 0 0 0",
        bottom: "unset",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 48px",
          margin: "0 auto",
        }}
      >
        <a href="#">
          <img src="./logo-s.png" alt="PChem Regulatory Consultant logo" height={42} width={99.5} />
        </a>
        <nav style={{ display: "flex", justifyContent: "center", gap: 32 }}>
          <a href="#our-journey">Our Journey</a>
          <a href="#our-mission">Our Mission</a>
          <a href="#what-we-do">What We Do</a>
          <a href="#our-services">Our Services</a>
          <a href="#location">Location</a>
          <a href="#contact-us">Contact Us</a>
        </nav>
      </div>
    </div>
  )
}

export default Nav
