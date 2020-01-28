/* eslint-disable quotes */
import React, { useState, useEffect } from "react";
// import Jumbotron from '../components/Jumbotron'
import { Row, Column } from "../components/Grid";
import FamilyContainer from "../components/FamilyContainer";
import API from "../utils/Api";
import Geolocated from "../components/Geolocated/Geolocated";
import Container from "../components/Container";
import { useSelector } from "react-redux";

const FamilyDashboard = props => {
  console.log("props:", props);
  const user = useSelector(state => state.auth.user);
  const [familyId, setFamilyId] = useState(user.familyId);
  const [allFamilies, setAllFamilies] = useState([]);
  console.log("allFamilies:", allFamilies);
  const [singleFamilyData, setSingleFamilyData] = useState({});
  console.log("singleFamilyData:", singleFamilyData);
  console.log("user!!!!!!:", user);

  // const [parents, setParents] = useState([])
  // const [students, setStudents] = useState([])
  // const [singleParent, setSingleParents] = useState({})

  useEffect(() => {
    API.getAllFamilies()
      .then(res => {
        console.log(res);
        setAllFamilies(res);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (user) {
      API.getFamilyById(familyId)
        .then(res => {
          console.log(res);
          setSingleFamilyData(res);
        })
        .catch(err => console.log(err));
    }
  }, [user]);

  // ===========================================================================
  //  Uncomment this to pull a single family
  // ===========================================================================
  // const getParent = () => {
  //   API.getFamilyById(familyId)
  //     .then(res => {
  //       console.log(res)
  //       setSingleParents(res)
  //     })
  //     .catch(err => console.log(err))
  // }

  // ===========================================================================
  // Uncomment this to pull all families
  // ===========================================================================
  // const getAllParents = () => {
  //   API.getAllFamilies()
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => console.log(err))
  // }

  return (
    <>
      <Container styling="align-self-center">
        <h1 className="text-center">Family Dashboard</h1>
        <Geolocated />
        <Row styling="align-items-center justify-content-center my-5">
          <Column
            size="sm-4 md-6 lg-8 xl-10"
            styling="align-self-center no-gutters"
          >

            <FamilyContainer familyData={singleFamilyData} />
          </Column>
        </Row>
      </Container>
    </>
  );
};


export default FamilyDashboard;
