import axios from "axios";

axios.defaults.baseURL = "https://contact.mediusware.com/api";

class ApiConfig {
  constructor() {
    // this.post = async (endpoint, data) => {
    //   try {
    //     const res = await axios.post(
    //       endpoint,
    //       {
    //         ...data,
    //       },
    //     );
    //     return res.data;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    this.get = async (endpoint, params) => {
      try {
        const res = await axios.get(
          endpoint,
          {
            params,
          },
          {}
        );
        return res.data;
      } catch (error) {}
    };
    // this.put = async (endpoint, id, data) => {
    //   try {
    //     const res = await axios.put(
    //       endpoint + id,
    //       { ...data },
    //       {}
    //     );
    //     return res.data;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // this.delete = async (endpoint, id) => {
    //   try {
    //     const res = await axios.delete(
    //       endpoint + id,
    //       {
    //         headers: {
    //           Authorization: token ? `Bearer ` + token : "",
    //         },
    //       },
    //       {}
    //     );
    //     return res.data;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

  }
}

export const api = new ApiConfig();
