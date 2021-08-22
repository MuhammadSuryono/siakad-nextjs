import {
    LTEAside,
    LTENavigation,
    LTENavMenu,
    LTENavMenuDropdown,
    LTEProfileUser, LTESectionMenu,
    LTESidebar, LTESubmenuDropdown,
    LTETitleApp
} from "./LTESidebar";
import {useEffect} from "react";

const SideBar = (props) => {

    useEffect(() => {
        initMenu()
    }, [])

    const initMenu = () => {
        let matchingMenuItem = null;
        let ul = document.getElementById("sidebar");
        let items = ul.getElementsByTagName("a");
        let pathname = window.location.pathname

        for (let i = 0; i < items.length; ++i) {
            if (`/${pathname}` === items[i].pathname || (pathname === "/" && items[i].pathname === "/dashboard")) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            activateParentDropdown(matchingMenuItem);
        }
    }

    const activateParentDropdown = item => {
        item.classList.add("active");
        const parent = item.parentElement;

        console.log(parent)

        if (parent) {
            parent.classList.add("menu-open");
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add("mm-show");

                const parent3 = parent2.parentElement;

                if (parent3) {
                    parent3.classList.add("mm-active"); // li
                    parent3.childNodes[0].classList.add("mm-active"); //a
                    const parent4 = parent3.parentElement;
                    if (parent4) {
                        parent4.classList.add("mm-active");
                    }
                }
            }
            return false;
        }
        return false;
    };

    return (
        <LTEAside>
            <LTETitleApp appName="SMK YADIKA LLG" />
            <LTEProfileUser name="Muhammad Suryono" />
            <LTESidebar>
                <LTENavigation>
                    <LTENavMenu path="/dashboard" title="Dashboard" icon="fas fa-home" />
                    <LTESectionMenu sectionName="DATA MASTER SEKOLAH" />
                    <LTENavMenuDropdown title="Data Master" icon="fas fa-database" >
                        <LTESubmenuDropdown title="Guru" path="/data-master/guru"/>
                        <LTESubmenuDropdown title="Siswa" path="/data-master/siswa" />
                        <LTESubmenuDropdown title="Kelas" path="/data-master/kelas" />
                    </LTENavMenuDropdown>
                </LTENavigation>
            </LTESidebar>
        </LTEAside>
    )
}

export default SideBar