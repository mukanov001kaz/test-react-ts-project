import "@/shared/styles/App.scss";
import viteLogo from "@/shared/assets/vite.svg";
import { useGetCountryQuery } from "../shared/api/country-api";

function App() {
    const { data, isLoading, error } = useGetCountryQuery();

    console.log(data);

    return (
        <>
            <h1>Hello React</h1>
            <img className="header" src={viteLogo} alt="" />
            <img src={viteLogo} alt="" />
        </>
    );
}

export default App;
