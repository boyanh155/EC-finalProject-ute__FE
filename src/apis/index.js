import axios from "axios";

//Region list function
export const getRegion = async() =>
    await axios.get("https://vapi.vnappmob.com/api/province");

export const getRegionDistrict = async(province_id) =>
    await axios.get(
        `https://vapi.vnappmob.com/api/province/district/${province_id}`
    );

//Booking function
export const postAvailability = async(data, headers) => {
    alert("Availability");
    console.log(data, headers);
    return await axios.post(`http://localhost:5000/api/book/availability`, data, {
        headers,
    });
};
export const postReserver = async(data, headers) => {
    alert("Reserved");
    console.log(data, headers);
    return await axios.post(
        `http://localhost:5000/api/book/availability/reserve`,
        data, {
            headers,
        }
    );
};