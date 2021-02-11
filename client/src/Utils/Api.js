import axios from "axios";

export default {
    getAuthor: function(author){
        return axios.get("/api/content/", {
        headers: {
            Authorization: props.token,
          }, {author})

    }

}