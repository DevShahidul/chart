import { 
    //useLoaderData, //implement in future if needed
    useOutlet 
} from "react-router-dom";
//import auth provider here when needed

export const RootLayout = () => {
    const outlet = useOutlet();

    return (
        <div className="
            container 
            min-h-screen
            h-full
            border-l-2 border-r-2
        ">
            {outlet}
        </div>
    )
}