import Footer from "./Footer/Footer"
import Header from "./Header/header"


function Layout({children}) {
  return (
    <div>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout