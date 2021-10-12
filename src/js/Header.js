import TemporaryDrawer from './Drawer.js'


export default function Header() {


    return (

        <div className="header">
            {/**header navbar sections */}
            < div className="header--navBar" >
                <div>
                    <a href="/">
                        <h4>BrandName</h4>
                    </a>
                </div>
                <div className="header--navBar">
                    <a href="google.com" className="header--navBar--login">login</a>
                    <button className="header--navBar--Button">
                        Become a member
                    </button>
                    <TemporaryDrawer />
                </div>
            </div >
            {/**header section two starts */}
            < div className="header--sectionTwo" >

                <div className="header--sectionTwoDetails">

                    <h1>
                        Creating a Beautifull & UseFull Solutions

                    </h1>
                    <p>
                        we know how large objects will act but things on a
                        small scale just do not act that way.
                    </p>

                    <button className="header--sectionTwoDetails--Btn1">
                        Get Qoute Now
                    </button>
                    <button className="header--sectionTwoDetails--Btn2">
                        Learn More
                    </button>
                </div>

            </div >
            {/**header section two ends */}
            {/**header navbar section ends */}
        </div >

    )
}