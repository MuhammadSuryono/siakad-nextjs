import PageLayout from "../components/PageLayout";
import Link from "next/link";

export default function CustomPageNotFound(props) {
    return (
        <PageLayout title="404 Not Found">
            <div className="error-page">
                <h2 className="headline text-warning"> 404</h2>

                <div className="error-content">
                    <h3><i className="fas fa-exclamation-triangle text-warning"/> Oops! Page not found.</h3>
                    <p>
                        We could not find the page you were looking for.
                        Meanwhile, you may <Link href="/"><a>return to dashboard</a></Link> or try using the search
                        form.
                    </p>

                    <form className="search-form">
                        <div className="input-group">
                            <input type="text" name="search" className="form-control" placeholder="Search"/>

                            <div className="input-group-append">
                                <button type="submit" name="submit" className="btn btn-warning"><i
                                    className="fas fa-search"/>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </PageLayout>
    )
}