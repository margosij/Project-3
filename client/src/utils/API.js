import axios from "axios";

export default {
  // Gets all books
  searchDatabase: function(search) {
    const queryURL = "" + search
    return axios.get(queryURL)
  },
  // Gets the family with the given id
  getFamily: async () => {
    let res = await axios.get("/api/family");
    return res.data || []
  },
  // Deletes the book with the given id
  deleteStudent: id => {
    return axios.delete("/api/family/" + id)
  },
  // Saves updated family or child information to the database
  updateStudent: studentData => {
    return axios.post("/api/family/", studentData)
  }
};