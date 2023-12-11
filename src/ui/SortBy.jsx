import Select from "./Select.jsx";
import { useSearchParams } from "react-router-dom";

const SortBy = ({ options }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get("sortBy") || "";
    const handleChange = event => {
        searchParams.set("sortBy", event.target.value);
        setSearchParams(searchParams);
    };

    return (
        <Select
            options={options}
            type="white"
            value={sortBy}
            onChange={handleChange}
        />
    );
};

export default SortBy;
