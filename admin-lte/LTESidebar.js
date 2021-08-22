import Logo from "../public/assets/dist/img/AdminLTELogo.png";
import Link from 'next/link'
import UserProfile from "../public/assets/dist/img/user2-160x160.jpg";

const LTETitleApp = ({appName}) => {
    return (
        <Link href="/">
            <a className="brand-link">
                <img src={Logo.src} alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                     style={{"opacity": ".8"}}/>
                <span className="brand-text font-weight-light">{appName ? appName : "SCHOOL ADMIN"}</span>
            </a>
        </Link>
    )
}

const LTEAside = ({children}) => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {children}
        </aside>
    )
}

const LTESidebar = ({children}) => {
    return (
        <div className="sidebar" id="sidebar">
            {children}
        </div>
    )
}

const LTEProfileUser = ({name}) => {
    return (
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img src={UserProfile.src} className="img-circle elevation-2" alt="User Image"/>
            </div>
            <div className="info">
                <Link href="/profile">
                    <a className="d-block">{name}</a>
                </Link>
            </div>
        </div>
    )
}

const LTENavigation = ({children}) => {
    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                {children}
            </ul>
        </nav>
    )
}

const LTENavMenu = ({path, title, icon, event = ""}) => {
    return (
        <li className="nav-item">
            <Link href={path}>
                <a className="nav-link">
                    <i className={`nav-icon ${icon}`}/>
                    <p>
                        {title}
                        {event !== "" && (<span className="right badge badge-danger">{event}</span>)}
                    </p>
                </a>
            </Link>
        </li>
    )
}

const LTENavMenuDropdown = ({title, icon, children}) => {
    return (
        <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
                <i className={`nav-icon ${icon}`}/>
                <p>
                    {title}
                    <i className="right fas fa-angle-left"/>
                </p>
            </a>

            <ul className="nav nav-treeview">
                {children}
            </ul>
        </li>
    )
}

const LTESubmenuDropdown = ({title, path}) => {
    return (
        <li className="nav-item">
            <Link href={path}>
                <a className="nav-link">
                    <i className="far fa-circle nav-icon"/>
                    <p>{title}</p>
                </a>
            </Link>
        </li>
    )
}

const LTESectionMenu = ({sectionName}) => {
    return (
        <li className="nav-header">{sectionName}</li>
    )
}

export {LTENavMenu, LTENavMenuDropdown, LTESidebar, LTENavigation, LTETitleApp, LTEAside, LTEProfileUser, LTESubmenuDropdown, LTESectionMenu}