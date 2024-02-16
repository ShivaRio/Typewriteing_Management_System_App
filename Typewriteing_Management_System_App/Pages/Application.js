import React, { Component } from 'react';
 
import { StyleSheet, TextInput, View, Alert, Text, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
 

class ApplicationForm extends Component {
    
 
constructor(props) {
 
    super(props)
 
    this.state = {
 
      name: '',
      initial: '',
      dob:'',
      fmname:'',
      gender:'',
      addri:'',
      addr2:'',
      addr3:'',
      district:'',
      state:'',
      pincode:'',
      mobile:'',
        
       
      aadhmr_number:'',
 
    }
 
  }
 
  ApplicationServer = () =>{
 
    fetch('http://192.168.1.7/react/Add_form.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      
      
      NAME : this.state.name,     
      INITIAL:this.state.initial,
      DOB:this.state.dob,
      FMNAME:this.state.fmname,
      GENDER:this.state.gender,
      ADDRi:this.state.addri,
      ADDR2:this.state.addr2,
      ADDR3:this.state.addr3,
      DISTRICT:this.state.district,      
      STATE:this.state.state,
      PINCODE:this.state.pincode,
      MOBILE:this.state.mobile,
      MOBILE2:this.state.mobile2,
      EMAIL:this.state.email,
      GENLQUAL:this.state.genlqual,
      PASS_DETAILS_SSLC:this.state.pass_details_sslc,
      TYPEWRITING_ENGLISH:this.state.typewriting_english,
      PASS_DETAILS_TWE:this.state.pass_details_twe,
      TYPEWRITING_TAMIL:this.state.typewriting_tamil,
      PASS_DETAILS_TWT:this.state.pass_details_twt,
      REGISTER_TYPEWRITING_ENGLISH:this.state.register_typewriting_english,
      BATCH_TWE:this.state.batch_twe,
      REGISTER_TYPEWRING_TAMIL:this.state.register_typewring_tamil,
      BATCH_TWT:this.state.batch_twt,
      TWME_MAKE:this.state.twme_make,
      TWME_SERIALNO:this.state.twme_serialno,
      TWMT_MAKE:this.state.twmt_make,
      TWMT_SERIALNO:this.state.twmt_serialno,
      AADHMR_NUMBER:this.state.aadhmr_number
    })

    
  }).then((response) => response.json())
  .then((responseJson) => {

       
      Alert.alert(responseJson);
      

  }).catch((error) => {
    console.error(error);
  });


 };
 

 
  render() {

    const {INSTITUTION_NO} = this.props.route.params;

    
    return (
      <SafeAreaView style={styles.scroll}>
      <ScrollView>
      
<View style={styles.container}>

<Text  style= {styles.TextComponentStyle1}>INSTITUTION NUMBER: {INSTITUTION_NO} </Text>
  

        <Text style= {styles.TextComponentStyle}>APPLICATION FORM</Text>

        
        
        <View style={styles.inputView}>
        
        <TextInput style={styles.TextInput}
          
          placeholder="NAME"
          placeholderTextColor= "#000000"
          onChangeText={name => this.setState({name})}          
          underlineColorAndroid='transparent'          
        />
        </View>
        <View style={styles.inputView1}>
 
 
        <TextInput          
          placeholder="INITIAL" 
          onChangeText={initial => this.setState({initial})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        
        <TextInput          
          placeholder="DD-MM-YYYY" 
          onChangeText={dob => this.setState({dob})} 
          placeholderTextColor= "#000000"
        
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        
        <TextInput          
          placeholder="FMNAME" 
          onChangeText={fmname => this.setState({fmname})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        <TextInput          
          placeholder="GENDER" 
          onChangeText={gender => this.setState({gender})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        
        <TextInput          
          placeholder="ADDRi"  
          onChangeText={addri => this.setState({addri})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        
        <TextInput          
          placeholder="ADDR2"  
          onChangeText={addr2 => this.setState({addr2})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        
        <TextInput          
          placeholder="ADDR3"  
          onChangeText={addr3 => this.setState({addr3})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        
        <TextInput          
          placeholder="DISTRICT"  
          onChangeText={district => this.setState({district})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
                <TextInput          
          placeholder="STATE"  
          onChangeText={state => this.setState({state})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        
        <TextInput          
          placeholder="PINCODE"  
          onChangeText={pincode => this.setState({pincode})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        <TextInput          
          placeholder="MOBILE"  
          onChangeText={mobile => this.setState({mobile})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        <TextInput          
          placeholder="MOBILE2"  
          onChangeText={mobile2 => this.setState({mobile2})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        
        <TextInput          
          placeholder="EMAIL"  
          onChangeText={email => this.setState({email})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        
        <TextInput          
          placeholder="GENLQUAL"  
          onChangeText={genlqual => this.setState({genlqual})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        <TextInput          
          placeholder="PASS_DETAILS_SSLC"  
          onChangeText={pass_details_sslc => this.setState({pass_details_sslc})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
       </View>
        <View style={styles.inputView1}>
        <TextInput          
          placeholder="TYPEWRITING_ENGLISH"  
          onChangeText={typewriting_english => this.setState({typewriting_english})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        
        <TextInput          
          placeholder="PASS_DETAILS_TWE"  
          onChangeText={pass_details_twe => this.setState({pass_details_twe})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />

<TextInput
        style={styles.input}
        placeholder="Type Here Institution No"
        value={institutionNo}
        placeholderTextColor="black"
        onChangeText={setInstitutionNo}
      />
        </View>
        <View style={styles.inputView1}>
       
        <TextInput          
          placeholder="TYPEWRITING_TAMIL"  
          onChangeText={typewriting_tamil => this.setState({typewriting_tamil})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
       
        <TextInput          
          placeholder="PASS_DETAILS_TWT"  
          onChangeText={pass_details_twt => this.setState({pass_details_twt})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        
        <TextInput          
          placeholder="REGISTER_TYPEWRITING_ENGLISH"  
          onChangeText={register_typewriting_english => this.setState({register_typewriting_english})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        <TextInput          
          placeholder="BATCH_TWE"  
          onChangeText={batch_twe => this.setState({batch_twe})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        
        <TextInput          
          placeholder="REGISTER_TYPEWRING_TAMIL"  
          onChangeText={register_typewring_tamil => this.setState({register_typewring_tamil})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
       
        <TextInput          
          placeholder="BATCH_TWT"  
          onChangeText={batch_twt => this.setState({batch_twt})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        
        <TextInput          
          placeholder="TWME_MAKE"  
          onChangeText={twme_make => this.setState({twme_make})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        
        <TextInput          
          placeholder="TWME_SERIALNO"  
          onChangeText={twme_serialno => this.setState({twme_serialno})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>
        <View style={styles.inputView1}>
        
        <TextInput          
          placeholder="TWMT_MAKE"  
          onChangeText={twmt_make => this.setState({twmt_make})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View> 

        <View style={styles.inputView1}>
        
        <TextInput          
          placeholder="TWMT_SERIALNO"  
          onChangeText={twmt_serialno => this.setState({twmt_serialno})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View> 


        <View style={styles.inputView1}>
        
        <TextInput          
          placeholder="AADHMR_NUMBER"  
          onChangeText={aadhmr_number => this.setState({aadhmr_number})} 
          placeholderTextColor= "#000000"
          style={styles.TextInput} 
          
        />
        </View>       


<TouchableOpacity   onPress={this.ApplicationServer} style={styles.loginBtn}><Text style={styles.loginBtn1}>Click Here To Apply</Text> 
      </TouchableOpacity>


      <TouchableOpacity activeOpacity = { .4 }  onPress={() => this.props.navigation.navigate('Show')}  > 
        <Text style={styles.text1}> Admin Here</Text> 
</TouchableOpacity>


   
      
</View> 
</ScrollView>
</SafeAreaView>    
      

    );
  }
};
 

 
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    width:"100%",
    height: "300%",
    backgroundColor: "#f59b42",
    
  },

  scroll:{


    marginHorizontal: 2,


  },

  inputView: {
    backgroundColor: "#ffe0b3",
    borderRadius: 24,
    width: "80%",
   height: "-10%",
    marginBottom: 10,
    marginLeft:30
    
  },

  inputView1: {
    backgroundColor: "#ffe0b3",
    borderRadius: 24,
    width: "80%",
   height: "-10%",
    marginBottom: 10,
    marginLeft:30
    
    
  },


 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 16,
    textAlign: 'center', 
    color:"#000000"
    

  },
 
 TextComponentStyle: {
   fontSize: 24,
  color: "#000",
  textAlign: 'center', 
  marginTop:20,
  marginBottom:50,
  fontWeight:'bold',
 },

 TextComponentStyle1: {
  fontSize: 20,
 color: "#000",
 textAlign: 'center', 
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


});

export default ApplicationForm;