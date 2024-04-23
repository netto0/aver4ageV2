import axios from "axios";
import { baseUrl } from "../axios.ts";

const getSubjectsService = async () => {
    try {
        const response = await axios.get(`${baseUrl}/subject`);
        return response
      } catch (error) {
        console.log(error)
        return(error);
      }
};

export { getSubjectsService };
