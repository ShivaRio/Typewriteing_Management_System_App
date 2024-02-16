import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Button, TextInput, ActivityIndicator , TouchableHighlight, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { showMessage } from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message';
import MyComponent from './Photo_upload'
import Sign from './Sign_upload'
import SSLC from './Sslc_upload';
import Show from './Show_user';
import Lower from './Lower_upload'
import axios from 'axios';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


const App = ( ) => {
  const [showSplash, setShowSplash] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Login, setLogin] = useState(false);
  const [application, setapplication] = useState(false);
  const [showuser, setshowuser] = useState(false);
  const [photo, setphoto] = useState(false);
  const [error, seterror] = useState(false);
  const [signature, setsignature] = useState(false);
   const [appsucess, setappsucess] = useState(false);
  const [lastInsertedID, setlastInsertedID] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [institution, setinstitution] = useState('');
  const [InstitutionError, setInstitutionError] = useState('');
  const [tempid, setTempId] = useState('');
  const [TempIdError, setTempIdError] = useState('');
  const [initial, setInitial] = useState('');
  const [initialError, setInitialError] = useState('');
  const [dob, setDOB] = useState(null);
  const [DOBError, setDobError] = useState('');
  const [fmname, setFmname] = useState('');
  const [FmnameError, setFmnameError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState(null);
  const [addr1, setAddr1] = useState('');
  const [Addr1Error, setAddr1Error] = useState('');
  const [addr2, setAddr2] = useState('');
  const [Addr2Error, setAddr2Error] = useState('');
  const [addr3, setAddr3] = useState('');
  const [Addr3Error, setAddr3Error] = useState('');
  const [district, setDistrict] = useState(null);
  const [state, setState] = useState(null);
  const [pincode, setPincode] = useState('');
  const [PincodeError, setPincodeError] = useState('');
  const [mobile, setMobile] = useState('');
  const [MobileError, setMobileError] = useState('');
  const [mobile2, setMobile2] = useState('');
  const [Mobile2Error, setMobile2Error] = useState('');
  const [email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [genlqual, setGenlqual] = useState(null);
  const [passDetailsSslc, setPassDetailsSslc] = useState('');
  const [typewritingEnglish, setTypewritingEnglish] = useState(null);
  const [passDetailsTwe, setPassDetailsTwe] = useState('');
  const [typewritingTamil, setTypewritingTamil] = useState(null);
  const [passDetailsTwt, setPassDetailsTwt] = useState('');
  const [registerTypewritingEnglish, setRegisterTypewritingEnglish] = useState(null);
  const [batchTwe, setBatchTwe] = useState('');
  const [registerTypewringTamil, setRegisterTypewringTamil] = useState(null);
  const [batchTwt, setBatchTwt] = useState('');
  const [twmeMake, setTwmeMake] = useState('');
  const [twmeSerialNo, setTwmeSerialNo] = useState('');
  const [twmtMake, setTwmtMake] = useState('');
  const [twmtSerialNo, setTwmtSerialNo] = useState('');
  const [aadhmrNumber, setAadhmrNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);  
    
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      const originalDate = date.toISOString().split('T')[0];

    const [year, month, day] = originalDate.split('-');
    const formattedDate = `${day}-${month}-${year}`;

       setDOB(formattedDate);
      hideDatePicker();
    };

    
  
  const validateForm = () => {
    let isValid = true;
    
    if (!name) {
      setNameError('Name is required');
      
      isValid = false;
    } else {
      setNameError('');
    }  
    
    if (!institution) {
      setInstitutionError('Institution is required');
      
      isValid = false;
    } else {
      setInstitutionError('');
    }  
    
    if (!tempid) {
      setTempIdError('Tempid is required');
      
      isValid = false;
    } else {
      setTempIdError('');
    }  

    if (!initial) {
      setInitialError('Initial is required');
      
      isValid = false;
    } else {
      setInitialError('');
    }  

    if (!dob) {
      setDobError('DOB is required');
      
      isValid = false;
    } else {
      setDobError('');
    }  

    if (!fmname) {
      setFmnameError('FM name is required');
      
      isValid = false;
    } else {
      setFmnameError('');
    }  

    if (!addr1) {
      setAddr1Error('Address 1 is required');
      
      isValid = false;
    } else {
      setAddr1Error('');
    }  

    if (!addr2) {
      setAddr2Error('Address 2 is required');
      
      isValid = false;
    } else {
      setAddr2Error('');
    }  

    if (!addr3) {
      setAddr3Error('Address 3 is required');
      
      isValid = false;
    } else {
      setAddr3Error('');
    }  

    if (!pincode) {
      setPincodeError('Pincode is required');
      
      isValid = false;
    } else {
      setPincodeError('');
    }  

    if (!mobile) {
      setMobileError('Mobile is required');
      
      isValid = false;
    } else {
      setMobileError('');
    }  

    if (!mobile2) {
      setMobile2Error('Mobile 2 is required');
      
      isValid = false;
    } else {
      setMobile2Error('');
    } 

    if (!email) {
      setEmailError('Email is required');
      
      isValid = false;
    } else {
      setEmailError('');
    }    


    return isValid;
  };
  



  

   

  const saveDetails = () => {
        
    if (validateForm()) {
       
    setIsLoading(true)
    axios
      .post('https://pjoptechnologies.com/Type/Backend/Add_form.php', {
        TEMPID: tempid,
        NAME: name,
        INSTITUTION_NO: institution,
        INITIAL: initial,
        DOB: dob,
        
        FMNAME: fmname,
        GENDER: gender,
        ADDR1: addr1,
        ADDR2: addr2,
        ADDR3: addr3,
        DISTRICT: district,
        STATE: state,
        PINCODE: pincode,
        MOBILE: mobile,
        MOBILE2: mobile2,
        EMAIL: email,
        GENLQUAL: genlqual,
        PASSDETAILS_SSLC: passDetailsSslc,
        TECHQUAL_TWE: typewritingEnglish,
        PASSDETAILS_TWE: passDetailsTwe,
        TECHQUAL_TWT: typewritingTamil,
        PASSDETAILS_TWT: passDetailsTwt,
        REGD_TWE: registerTypewritingEnglish,
        BATCH_TWE: batchTwe,
        REGD_TWT: registerTypewringTamil,
        BATCH_TWT: batchTwt,
        TWME_MAKE: twmeMake,
        TWME_SERIALNO: twmeSerialNo,
        TWMT_MAKE: twmtMake,
        TWMT_SERIALNO: twmtSerialNo,
        AADHAAR_NUMBER: aadhmrNumber,
      })
      
      .then((response) => {
        const responseJson = response.data;
        
        // Check the response from the server
        if (responseJson.message === 'Added Successfully') {
          console.log('Success: Application submitted successfully!');
          setappsucess(true);
          setGender(null);
          setDistrict(null);
          setState(null);
          setGenlqual(null);
          setTypewritingEnglish(null);
          setTypewritingTamil(null);
          setRegisterTypewritingEnglish(null);
          setRegisterTypewringTamil(null);
          setlastInsertedID(responseJson.id); // Retrieve the last inserted ID
          console.log('Last Inserted ID:', lastInsertedID);
          // You can perform additional actions here if needed
          setIsLoading(false); // Set loading state to false after the request is completed

          showMessage({
            message: 'Success: Application submitted successfully!',
            type: 'success',
            duration: 3000,
            autoHide: true,
          });
        } else {
          setIsLoading(false); // Set loading state to false after the request is completed

          console.log('Error: Something went wrong. Please try again.');
          
        }
      })        
      .catch((error) => {

        setIsLoading(false); // Set loading state to false after the request is completed

        console.error('Error:', error);
        console.log('Error: An error occurred. Please try again later.');
      });

      console.log('Form is valid');
    }
    
  };



  


  
  
  const handleNavigation = () => {
    navigation.navigate('Upload');
  };

  const handleshow = () => {
    navigation.navigate('Show');
  };
 


  const handleBackButton = () => {
    // Perform your desired action, such as navigating back
    navigation.goBack(); // Assuming you're using React Navigation
  
    return true; // Return true to indicate that you've handled the back button press
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setLogin(true)
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {

    if(username =="Siva2002" && password =="Siva2002")
    {
      setLogin(false);
      setapplication(true)
    }
    else
    {

      seterror(true)
      showMessage({
        message: 'Login Falied',
        type: 'failed',
        duration: 3000,
        autoHide: true,
      });
    }
   
   };
   const enablephoto = () => {

    setappsucess(false)
    

      setphoto(true)
      setsignature(false)
      setapplication(false)
    
   
   };

   const showenable = () => {

    setappsucess(false)   
    setapplication(false)
    setshowuser(true)      
   

    
   
   };


   const enableapplication = () => {

    setappsucess(false)
    setsignature(false)
    setphoto(false)
    setapplication(true)
    setshowuser(false)
  


 
 }; 


 const enablelogin = () => {

  setLogin(true);
  setapplication(false)
  setshowuser(false)  
  
 
 };


 const dropdown8 = [
  { label: 'VI Pass', value: 'VI Pass', color:'red' },
  { label: 'VIII Pass', value: 'VIII Pass', color:'red'},
  { label: 'SSLC Fail', value: 'SSLC Fail', color:'red'},
  { label: 'SSLC Pass', value: 'SSLC Pass', color:'red'},
  { label: 'HSC Pass', value: 'HSC Pass', color:'red'},
  { label: 'UG Pass', value: 'UG Pass', color:'red'},
  { label: 'PG Pass', value: 'PG Pass', color:'red'},
];

const dropdown1 = [
  { label: 'Typewriting English Pre-Junior', value: 'Typewriting English Pre-Junior' },
  { label: 'Typewriting English Junior', value: 'Typewriting English Junior' },
  { label: 'Typewriting English Senior', value: 'Typewriting English Senior' },
  ];


  const dropdown2 = [
    { label: 'Typewriting Tamil Pre-Junior', value: 'Typewriting Tamil Pre-Junior' },
    { label: 'Typewriting Tamil Junior', value: 'Typewriting Tamil Junior' },
    { label: 'Typewriting Tamil Senior', value: 'Typewriting Tamil Senior' },
    ];

    const dropdown3 = [    
      { label: 'Typewriting English Junior', value: 'Typewriting English Junior' },
      { label: 'Typewriting English Senior', value: 'Typewriting English Senior' },
      { label: 'Typewriting English High Speed', value: 'Typewriting English High Speed' },
      ];

      const dropdown4 = [      
        { label: 'Typewriting Tamil Junior', value: 'Typewriting Tamil Junior' },
        { label: 'Typewriting Tamil Senior', value: 'Typewriting Tamil Senior' },
        { label: 'Typewriting Tamil High Speed', value: 'Typewriting Tamil High Speed' },
        ];


        const dropdown5 = [                     
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Transgender', value: 'Transgender' },
        
        ];

        

          const dropdown6 = [
            { label: 'Puducherry', value: 'Puducherry' },
                      
            ];

            const dropdown7 = [
              { label: 'Puducherry', value: 'Puducherry' },         
              ]; 




 

  if (showSplash) {
    return (
      
      <View style={styles.container}>
        <Text style={{ color:"#ebb134", fontWeight:'bold', textAlign:'center',fontSize:25, marginTop:20,   }}>Typewriting Institution</Text>
        <Image source={require('./img/splash.jpg')} style={styles.splashImage} />
      </View>
    );
  }
  if (Login) {

  return ( 
     

    <View style={styles.container}>
      <Text style={{ color:"#ebb134", fontWeight:'bold', textAlign:'center',fontSize:25, marginTop:20,   }}>Welcome Back!</Text>
      <Image source={require('./img/type1.jpg')} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Enter Your Username"
        value={username}
        placeholderTextColor="black"
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Password"
        secureTextEntry={true}
        value={password}
        placeholderTextColor="black"
        onChangeText={setPassword}
      />
     
      <TouchableHighlight style={styles.button} underlayColor="lightblue" onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableHighlight>

      {error &&  <Text style={{ color: 'red'}}>Invalid Credentials</Text>}

    </View>
  );
  }

 
  if (photo) {
    

    return (

    

      <SafeAreaView style={styles.scroll}>
      <ScrollView>

      <Text style={{ color:"#ebb134", fontWeight:'bold', textAlign:'center',fontSize:25, marginTop:20,   }}>UPLOAD DETAILS</Text>
        
      <TouchableHighlight onPress={enableapplication} style={{ width:50, color:"white", marginTop:-30, marginLeft:-10, 
   }} underlayColor="transparent">
      <Image source={require('./img/arrow.jpg')}  style={{ width: 80, height: 30, resizeMode: 'contain' }} />
       </TouchableHighlight>
       
       

      {photo && <MyComponent onPressNavigation={handleNavigation} />}
      {photo && <Sign onPressNavigation={handleNavigation} />}
      {photo && <SSLC onPressNavigation={handleNavigation} />}
      {photo && <Lower onPressNavigation={handleNavigation} />}

      </ScrollView>
      </SafeAreaView>
    )
  }


  if (showuser) {

    return ( 
       
  
      <SafeAreaView style={styles.scroll}>
      <ScrollView>

       


      <Text style={{ color:"#ebb134", fontWeight:'bold', textAlign:'center',fontSize:25, marginTop:20,   }}>STUDENT DETAILS</Text>
        
      <TouchableHighlight onPress={enableapplication} style={{ width:50, color:"white", marginTop:-30, marginLeft:-10 }} underlayColor="transparent">
      <Image source={require('./img/arrow.jpg')}  style={{ width: 80, height: 30, resizeMode: 'contain' }} />
       </TouchableHighlight>

       <View >
       {showuser && <Show onPressNavigation={handleshow} />}
       </View>
       </ScrollView>
      </SafeAreaView>
      
    );
    }




  if (application) {
    

    return (

      


      <SafeAreaView style={styles.scroll}>
      <ScrollView>
        
      <Text style={{ color:"#ebb134", fontWeight:'bold', textAlign:'center',fontSize:25, marginTop:20,   }}>APPLICATION FORM</Text>
 
      <View style={styles.container}>

      <TouchableHighlight onPress={enablelogin} style={{ width:50, color:"white", marginTop:-30, marginRight:360 }} underlayColor="transparent">
      <Image source={require('./img/arrow.jpg')}  style={{ width: 80, height: 30, resizeMode: 'contain' }} />
       </TouchableHighlight>

       
      


       <TouchableHighlight style={styles.buttonText2} underlayColor="lightblue" onPress={showenable}>
    <Text style={styles.buttonText}>Show User</Text>
  </TouchableHighlight>

  <TouchableHighlight style={styles.buttonText1} underlayColor="lightblue" onPress={enablephoto}>
    <Text style={styles.buttonText}>Upload Image</Text>
  </TouchableHighlight>

 


  <View style={styles.inputView}>
    <TextInput  
      placeholder="Enter the TEMP ID"
      style={styles.inputText}
      placeholderTextColor="#000000"
      onChangeText={(text) => {setTempId(text); setTempIdError(""); }}
    />
  </View>
  <Text style={{color:'red', marginBottom:10,}}>{TempIdError}</Text>

  <View style={styles.inputView}>
    <TextInput  
      placeholder="Institution no"
      style={styles.inputText}
      placeholderTextColor="#000000"
      onChangeText={(text) => {setinstitution(text); setInstitutionError(""); }}
    />
  </View>
  <Text style={{color:'red', marginBottom:10,}}>{InstitutionError}</Text>

  
  <View style={styles.inputView}>
    <TextInput  
      placeholder="Name of the Candidate"
      style={styles.inputText}
      placeholderTextColor="#000000"
      onChangeText={(text) => {setName(text); setNameError(""); }}    
      
    />
  </View>
  <Text style={{color:'red', marginBottom:10,}}>{nameError}</Text>

  <FlashMessage position="center" />

  <View style={styles.inputView1}>
    <TextInput
        style={styles.inputText}

      placeholder="Initial of the Candidate" 
      placeholderTextColor="#000000"
      onChangeText={(text) => {setInitial(text); setInitialError(""); }}
    />
  </View>
  <Text style={{color:'red', marginBottom:10,}}>{initialError}</Text>


  <View style={styles.inputView1}> 
 
      <TouchableOpacity onPress={showDatePicker}>
        <Text style={styles.datePickerText}>
          {dob ? dob : 'Select DOB'}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
  </View>
  <Text style={{color:'red', marginBottom:10,}}>{DOBError}</Text>

  <View style={styles.inputView1}>
    <TextInput
        style={styles.inputText}

      placeholder="Name of Father/Mother" 
      placeholderTextColor="#000000"
      onChangeText={(text) => {setFmname(text); setFmnameError(""); }}
    />
  </View>
  <Text style={{color:'red', marginBottom:10,}}>{FmnameError}</Text>
  
    
  <View style={styles.inputView1}>
    <TextInput
        style={styles.inputText}

      placeholder="Address Line #1"  
      placeholderTextColor="#000000"
      onChangeText={(text) => {setAddr1(text); setAddr1Error(""); }}
    />
  </View>
  <Text style={{color:'red', marginBottom:10,}}>{Addr1Error}</Text>

  <View style={styles.inputView1}>
    <TextInput
        style={styles.inputText}

      placeholder="Address Line #2"  
      placeholderTextColor="#000000"
      onChangeText={(text) => {setAddr2(text); setAddr2Error(""); }}
    />
  </View>
  <Text style={{color:'red', marginBottom:10,}}>{Addr2Error}</Text>

  <View style={styles.inputView1}>
    <TextInput
        style={styles.inputText}

      placeholder="Address Line #3"  
      placeholderTextColor="#000000"
      onChangeText={(text) => {setAddr3(text); setAddr3Error(""); }}
    />
  </View>
  <Text style={{color:'red', marginBottom:10,}}>{Addr3Error}</Text>
  

  <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={dropdown6}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select District"
      searchPlaceholder="Search..."
     value={district}
      onChange={item => {
        setDistrict(item.value);
      }}        
    />
   

    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={dropdown7}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select State"
      searchPlaceholder="Search..."  
      value={state}
      onChange={item => {
        setState(item.value);
      }}        
    />
 




  <View style={styles.inputView1}>
    <TextInput
        style={styles.inputText}

      placeholder="Pin Code"  
      placeholderTextColor="#000000"
      onChangeText={(text) => {setPincode(text); setPincodeError(""); }}
    />
  </View>
  <Text style={{color:'red', marginBottom:10,}}>{PincodeError}</Text>

  <View style={styles.inputView1}>
    <TextInput
        style={styles.inputText}
        keyboardType="numeric"
      placeholder="Mobile Number #1"  
      placeholderTextColor="#000000"
      onChangeText={(text) => {setMobile(text); setMobileError(""); }}
    />
  </View>
  <Text style={{color:'red', marginBottom:10,}}>{MobileError}</Text>

  <View style={styles.inputView1}>
    <TextInput
        style={styles.inputText}
        keyboardType="numeric"
      placeholder="Alernate Mobile Number"  
      placeholderTextColor="#000000"
      onChangeText={(text) => {setMobile2(text); setMobile2Error(""); }}
    />
  </View>
  <Text style={{color:'red', marginBottom:10,}}>{Mobile2Error}</Text>

  <View style={styles.inputView1}>
    <TextInput
      placeholder="Email ID"  
      style={styles.inputText}

      placeholderTextColor="#000000"
      onChangeText={(text) => {setEmail(text); setEmailError(""); }}
    />
  </View>
  <Text style={{color:'red',marginBottom:10, }}>{EmailError}</Text>

  

  <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={dropdown8}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="General Qualification"
      searchPlaceholder="Search..."
      value={genlqual}
      onChange={item => {
        setGenlqual(item.value);
      }}        
    />
    

  

  
   <View style={styles.inputView1}>
    <TextInput
        style={styles.inputText}
        

      placeholder="SSLC Pass Details (Enter RegNo/Month & Year)"  
      placeholderTextColor="#000000"
      onChangeText={setPassDetailsSslc}
    />
  </View>

  
  <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={dropdown1}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Typewriting English"
      searchPlaceholder="Search..."
      value={typewritingEnglish}
      onChange={item => {
        setTypewritingEnglish(item.value);
      }}        
    />
    


  
    <View style={styles.inputView1}>
    <TextInput
        style={styles.inputText}

      placeholder="Typewriting English (Enter RegNo/Month & Year)"  
      placeholderTextColor="#000000"
      onChangeText={setPassDetailsTwe}
    />
  </View>


  

  <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={dropdown2}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Typewriting Tamil"
      searchPlaceholder="Search..."
      value={typewritingTamil}
      onChange={item => {
        setTypewritingTamil(item.value);
      }}        
    />
    

   
  
  
  <View style={styles.inputView1}>
    <TextInput
      placeholder="Typewriting Tamil (Enter RegNo/Month & Year)"  
      style={styles.inputText}

      placeholderTextColor="#000000"
      onChangeText={setPassDetailsTwt}
    />
  </View>
  
  
  <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={dropdown3}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Registered-Typewriting English"
      searchPlaceholder="Search..."
      value={registerTypewritingEnglish}
       onChange={item => {
        setRegisterTypewritingEnglish(item.value);
      }}        
    />
    

  <View style={styles.inputView1}>
    <TextInput
        style={styles.inputText}

      placeholder=" (Enter Batch) Registered-Typewriting English"  
      placeholderTextColor="#000000"
      onChangeText={setBatchTwe}
    />
  </View>
  

  <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={dropdown4}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Registered-Typewriting Tamil"
      searchPlaceholder="Search..."   
      value={registerTypewringTamil}   
      onChange={item => {
        setRegisterTypewringTamil(item.value);
      }}        
    />
    

    

  <View style={styles.inputView1}>
    <TextInput
      placeholder=" (Enter Batch) Registered-Typewriting Tamil "  
      style={styles.inputText}

      placeholderTextColor="#000000"
      onChangeText={setBatchTwt}
    />
  </View>

  <View style={styles.inputView1}>
    <TextInput
        style={styles.inputText}

      placeholder="Typewriting Machine Make (English)"  
      placeholderTextColor="#000000"
      onChangeText={setTwmeMake}
    />
  </View>

  <View style={styles.inputView1}>
    <TextInput
        style={styles.inputText}
        keyboardType="numeric"
      placeholder="Typewriting Machine Serial (English)"  
      placeholderTextColor="#000000"
      onChangeText={setTwmeSerialNo}
    />
  </View>

  <View style={styles.inputView1}>
    <TextInput
        style={styles.inputText}

      placeholder="Typewriting Machine Make (Tamil)"  
      placeholderTextColor="#000000"
      onChangeText={setTwmtMake}
    />
  </View>

  <View style={styles.inputView1}>
    <TextInput
        style={styles.inputText}
        keyboardType="numeric"
      placeholder="Typewriting Machine Serial (Tamil)"  
      placeholderTextColor="#000000"
      onChangeText={setTwmtSerialNo}
    />
  </View>

  <View style={styles.inputView1}>
    <TextInput
        style={styles.inputText}
        keyboardType="numeric"
      placeholder="Enter Aadhaar Number of the Applicant"  
      placeholderTextColor="#000000"
      onChangeText={setAadhmrNumber}
    />

    
  </View>    
      


  

    <View>
      {/* Render the error message container if errorMessage is not empty */}
      {errorMessage ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      ) : null}

      {/* Your other JSX components... */}

      {/* Your save button or form submit trigger */}
    </View>

    <View>
      {/* Render the loading indicator when isLoading is true */}
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#ebb134" />
          <Text style={styles.loadingText}>Please wait, loading...</Text>
        </View>
      )}

      {/* Your other JSX components */}
    </View>
  {appsucess &&  <Text style={{ color: '#ebb134'}}>Success: Application submitted successfully Kindly upload your photo using Your Temp No {lastInsertedID}</Text>}
  

  

    <TouchableHighlight style={styles.button} underlayColor="lightblue" onPress={saveDetails}>
    
    <Text style={styles.buttonText}>Submit Application</Text>
  </TouchableHighlight>

  

  
 
</View>
        </ScrollView>
        </SafeAreaView>    
    
    
    );
    }
   
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#ebb134',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    justifyContent: 'center',

    width:"80%"
  },

  button1: {
    backgroundColor: '#ebb134',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom:20,
    justifyContent: 'center',

    width:"20%"
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    margin:5,
    
  
  },

  buttonText1: {
    backgroundColor: '#ebb134',
    borderRadius: 10,

    padding: 10,
    marginTop: -50,
    marginLeft:180,
    justifyContent: 'center',
    marginBottom:20,

    width:"32%"
  },


  buttonText2: {
    backgroundColor: '#ebb134',
    borderRadius: 10,

    padding: 10,
    marginTop: 20,
    marginRight:180,
    justifyContent: 'center',
    

    width:"32%"
  },
  splashImage: {
    width: '90%',
    height: '80%',
  },
  logo: {
    width: '80%',
    height: '40%',
    margin: 5,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  
  inputText: {
    color: 'black', // Set text color to black
  },
  placeholderText: {
    color: 'black', // Set placeholder text color to black
  },
  scroll:{


    marginHorizontal: 3,
 backgroundColor:'white'

  },

  inputView: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
    marginBottom: 10,
    paddingHorizontal: 10,
    
  },

  inputView1: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    color: 'black', // Set text color to black
    marginBottom: 20,
    paddingHorizontal: 10,
    
  },
  

  


 
  TextInput: {
     
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
    marginBottom: 10,
    paddingHorizontal: 10,
    

  },
 
 TextComponentStyle: {
  fontSize: 24,
  color: "#000",
  textAlign: 'center', 
  marginTop:20, color: 'black',
  marginBottom:50,
  fontWeight:'bold',
 },
 errorContainer: {
  marginTop: 10,
  paddingHorizontal: 10,
  paddingVertical: 5,
  backgroundColor: '#ffcccc',
},
errorText: {
  color: 'red',
},
 TextComponentStyle1: {
  fontSize: 20,
 color: "#000",
 textAlign: 'center',  color: 'black',
 marginTop:10,
 marginBottom:10,
  fontWeight:'bold',
},



 loginBtn: {
  width: "100%",
  borderRadius: 25,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 30,
  marginBottom:60,
  backgroundColor: "#804d00",
  
},


loginBtn1: {
  fontSize:20,
  
},

 text2: {    
    textAlign: 'center',  
    fontSize: 20,    
    
  },

  text1: {

    marginBottom:80,
    marginTop:20,
    textAlign: 'center',  
    fontSize: 20,
    marginLeft:-10
    
    },



    drop: {
      paddingVertical: 12,

      // paddingHorizontal: 6,
      paddingTop: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',   
     },

     dropdown: {
      margin: 16,
      height: 30,
      width:300,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
      borderRadius: 5, color: "red",

    },
    
    placeholderStyle: {
      fontSize: 16,
      color: "#000000",
 
    },
    selectedTextStyle: {
      fontSize: 16,
      color: "#000000",
    },
    
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      color: "#000000",
    },
arrow:{

marginTop:-10,
marginRight:290,

marginBottom:-20,


},

arrow1:{

  marginTop:-5,
  marginRight:280,
  
  marginBottom:-10,
  
  
  },

  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  datePickerText: {
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    
    borderColor: '#ccc',
    
  },
    
    
  
});

export default App;
