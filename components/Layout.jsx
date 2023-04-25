import Navbar from "./Navbar"

export default function Layout({children}){
    return(
        <>
            Esse é o layout:
            <Navbar />
            <div>{children}</div>
        </>
    )
}