import { useEffect, useState } from 'react';
const useDoctor = () => {
    const [doctors, setDoctors] = useState([]);
    const baseUrl = "http://localhost:3000";
    // const baseUrl = "https://aysha-dental-care.web.app";
    useEffect(() => {
        fetch(`${baseUrl}/fakeData/doctors.json`)
            .then(response => response.json())
            .then(data => setDoctors(data))
    }, [])

    return [doctors]

}
export default useDoctor