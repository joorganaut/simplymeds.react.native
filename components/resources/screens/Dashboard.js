import React, { memo, useState } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import PatientImage from '../components/PatientImage';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import MiddlewareManager from '../../master/MiddlewareManager'
const manager = new MiddlewareManager();
const GetPatientDetails= async (id, callback)=>{
  var data = {
    UserID : id
  }
  await manager.PostData(data, '/api/RetrievePatientDetails', x=>{
    callback(x)   
  })
}

const Dashboard = ({ navigation }) => {
  const id = navigation.getParam('ID', 0)
  const [userID, setUserID] = useState({ value: id})
  const [patient, setPatient] = useState({value : null})
  const [image, setImage] = useState({value : ''})
  var Patient;
  debugger
  GetPatientDetails(userID.value, x => {
    debugger
    if (x.data.Code == '00') {
      Patient = x.data.record
      setPatient({
        value: Patient
      })
      setImage({value:x.data.image})
      alert('success ' + Patient.FirstName)
    } else {
      alert('Unable to get patients details')
    }
  }).done()
  return (
  <Background>
   <PatientImage source={image.value}/>
    {/* <Logo /> */}
    <Header>Let’s start</Header>
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('Home')}>
      Logout
    </Button>
  </Background>)
};

export default memo(Dashboard);
