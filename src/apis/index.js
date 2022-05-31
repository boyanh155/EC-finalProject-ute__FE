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
    await axios.post(`http://localhost:5000/api/book/availability`, data, {
        headers,
    });
};
export const postReserver = async(data, headers) => {
    await axios.post(
        `http://localhost:5000/api/book/availability/reserve`,
        data, {
            headers,
        }
    );
};
export const getUsers = async() => {
    await axios.get("http://localhost:5000/api/user");
};