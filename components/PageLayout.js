import Header from "../admin-lte/Header";
import SideBar from "../admin-lte/SideBar";
import Breadcumb from "../admin-lte/Breadcumb";

const PageLayout = ({title, children}) => {
    return (
        <div className="wrapper">
            <Header />
            <SideBar />
            <div className="content-wrapper">
                <Breadcumb title={title} />
                <section className="content">
                    <div className="container-fluid">
                        {children}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PageLayout