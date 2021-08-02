import Footer from "./footer";
import Header from "./header";


function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen  text-gray-700">
      <Header />

      <main className="flex-1 w-full px-8 max-w-7xl  py-8 mx-auto  md:py-5">
        {children}
      </main>

      <Footer /> 
    </div>
  );
}



export default Layout;
