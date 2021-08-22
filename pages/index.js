import 'bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/dist/css/adminlte.min.css'

import PageLayout from "../components/PageLayout";
import {useEffect} from "react";

export default function Home(props) {

    useEffect(() => {
        console.log(props)
    }, [])
    return (
        <PageLayout title="Dashboard">
        </PageLayout>
    )
}
