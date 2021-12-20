import axios from "axios";

export const getRegion = async() =>
    await axios.get("https://vapi.vnappmob.com/api/province");

export const getRegionDistrict = async(province_id) =>
    await axios.get(
        `https://vapi.vnappmob.com/api/province/district/${province_id}`
    );