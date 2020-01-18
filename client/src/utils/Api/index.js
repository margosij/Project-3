import axios from 'axios'

export default {
  // get all admins
  getAdmins: async () => {
    let res = await axios.get('/api/admins')
    return res.data || []
  },
  // save an admin
  saveAdmin: async adminData => {
    let res = await axios.post('/api/admins', adminData)
    return res.data || []
  },
  // delete an admin
  deleteAdmin: async id => {
    let res = await axios.delete(`/api/admin/${id}`)
    return res.data || []
  },
  // get all families
  getFamilies: async () => {
    let res = await axios.get('/api/families')
    return res.data || []
  },
  // save a family
  saveFamily: async familyData => {
    let res = await axios.post('/api/families', adminData)
    return res.data || []
  },
  // delete a family
  deleteFamily: async id => {
    let res = await axios.delete(`/api/families/${id}`)
    return res.data || []
  }
}
