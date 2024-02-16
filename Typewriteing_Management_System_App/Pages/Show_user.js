import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, Image, Button, ScrollView } from 'react-native';
import axios from 'axios';
import { DataTable } from 'react-native-paper';

import ModalDropdown from 'react-native-modal-dropdown';



const App = () => {
  
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [filterdata,setFilterdata]=useState([]);
  const [expandedItems, setExpandedItems] = useState([]);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const ImageURL ="https://pjoptechnologies.com/Type/Backend/"
  
  
  
  const uniqueInstitutionNumbers = [...new Set(data.map((s) => s.INSTITUTION_NO))];



  

  useEffect(() => {
    fetchData();
    
  }, []);

  const fetchData = async () => {
    try {
    const response = await axios.get('https://pjoptechnologies.com/Type/Backend/View.php');
      
    setData(response.data.datas);
    setFilterdata(response.data.datas)
   
    
    } 
    
    catch (error) {
      console.error(error);
    }
  };
  

  const handleValueChange = (value) => {
    setSelectedValue(value);
    filtered(value);
    
  };

  
  const filtered =(value)=>{
    const unidata= data.filter((item)=>item.INSTITUTION_NO===value)
   setFilterdata(unidata);
   
   setExpandedItems([]); 
   
   
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = filterdata.slice(startIndex, endIndex);
 

  const totalPages = Math.ceil(filterdata.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const goToPage = (page) => {
    setCurrentPage(page);
    
  };
  
  


  return (
    

<View style={styles.container1}>


      
      
<ModalDropdown
        style={{ borderColor: '#9c9a9a', color:"#ebb134", width:'80%',  borderWidth: 4, padding: 13, marginTop:20, marginLeft:40, }}
        dropdownStyle={{ width: '75%' , color:"#ebb134", fontSize:'50', fontWeight:"bold" }}
        options={uniqueInstitutionNumbers}
        defaultValue="Select Institution Number"
        onSelect={(index, value) => handleValueChange(value)}
      />
      {/* <Text style={{ color: 'green', alignContent:"center", justifyContent:"center", marginLeft:80,  fontWeight:"bold", marginTop:20, fontSize:18 }}>Institution Number: {selectedValue}</Text> */}
      

      {selectedValue === "" ? null : displayedData.map((it, index) => (
  <View key={index} style={styles.shadow}>

    
    
    <DataTable style={styles.container}>
      
    <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title numeric style={{flex: 3}}  sortDirection='descending'>STUDENT_INFORMATION</DataTable.Title>
        <DataTable.Title></DataTable.Title>
        <DataTable.Title  style={{flex: 4}} sortDirection='descending'>DETAILS</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell style={{flex: 4}} >NAME</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
        <DataTable.Cell style={{flex: 5}}>{it?.NAME}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>INITIAL</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
        <DataTable.Cell  style={{flex: 5}} >{it?.INITIAL}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>INSTITUTION_NO</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
        <DataTable.Cell style={{flex: 5}}>{it?. INSTITUTION_NO}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>EMAIL</DataTable.Cell>
        <DataTable.Title></DataTable.Title>        
        <DataTable.Cell style={{flex: 5}}>{it?.EMAIL}</DataTable.Cell>
      </DataTable.Row>     
      
  {expandedItems.includes(index) && (
  <><DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>DOB</DataTable.Cell>
        <DataTable.Title></DataTable.Title>        
        <DataTable.Cell style={{flex: 5}}>{it?.DOB}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>FMNAME</DataTable.Cell> 
        <DataTable.Title></DataTable.Title>   
    <DataTable.Cell style={{flex: 5}}>{it?.FMNAME}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
    <DataTable.Cell style={{flex: 4}}>ADD1</DataTable.Cell>
    <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.ADDR1}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>ADDR2</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
       <DataTable.Cell style={{flex: 5}}>{it?.ADDR2}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>ADD3</DataTable.Cell>
        <DataTable.Title></DataTable.Title>    
    <DataTable.Cell style={{flex: 5}}>{it?.ADDR3}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>DISTRICT</DataTable.Cell>  
        <DataTable.Title></DataTable.Title>  
    <DataTable.Cell style={{flex: 5}}>{it?.DISTRICT}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>STATE</DataTable.Cell>  
        <DataTable.Title></DataTable.Title>  
    <DataTable.Cell style={{flex: 5}}>{it?.STATE}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>PINCODE</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.PINCODE}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>MOBILE</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.MOBILE}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>MOBILE2</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.MOBILE2}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>GENLQUAL</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.GENLQUAL}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>PASSDETAILS_SSLC</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.PASSDETAILS_SSLC}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>TECHQUAL_TWE</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.TECHQUAL_TWE}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}} >PASSDETAILS_TWE</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.PASSDETAILS_TWE}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>TECHQUAL_TWT</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.TECHQUAL_TWT}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>PASSDETAILS_TWT</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.PASSDETAILS_TWT}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>REGD_TWE</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.REGD_TWE}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>BATCH_TWE</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.BATCH_TWE}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>REGD_TWT</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.REGD_TWT}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>BATCH_TWT</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.BATCH_TWT}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>TWME_MAKE</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.TWME_MAKE}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>TWME_SERIALNO</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.TWME_SERIALNO}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>TWMT_MAKE</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.TWMT_MAKE}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>TWMT_SERIALNO</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.TWMT_SERIALNO}</DataTable.Cell>
    </DataTable.Row>
  <DataTable.Row>
        <DataTable.Cell style={{flex: 4}}>AADHAAR_NUMBER</DataTable.Cell>
        <DataTable.Title></DataTable.Title>
    <DataTable.Cell style={{flex: 5}}>{it?.AADHAAR_NUMBER}</DataTable.Cell>
    </DataTable.Row>
    <View style={{width: 130, height: 140, borderWidth:5, borderColor:'#ebb134', marginLeft:18,   }}>
    {it?.PHOTO ? (<View>
        
        <Image source={{ uri: ImageURL+it.PHOTO}} style={{width: 100, height: 100, marginTop:10, marginLeft:10,  }}  resizeMode='contain'/>
        <Text style={{width: 100, height: 100,  marginLeft:35, fontWeight:'bold', color:'#ebb134'  }}>PHOTO</Text>
        </View>
      )  : (
        <Text style={{color:'red', marginTop:50, marginLeft:2, fontSize:15, textAlign:'center'}}>No photo found</Text>
      )}  
    
    
    </View>

    <View style={{width: 130, height: 140, borderWidth:5, marginLeft:170, marginTop:-140, marginBottom:140, borderColor:'#ebb134'}}>
    {it?.SIGN ? (<View>
        <Image source={{ uri: ImageURL+it.SIGN}} style={{width: 100, height: 100, marginTop:10, marginLeft:10 }}  resizeMode='center'/>
        <Text style={{width: 100, height: 100,   fontWeight:'bold', color:'#ebb134', textAlign:'center'}}>SIGNATURE</Text></View>
      ) : (
        <Text style={{color:'red', marginTop:50, marginLeft:2, fontSize:15, textAlign:'center'}}>No Signature found</Text>
      )}    
    
    </View>
    <View style={{width: 130, height: 140, borderWidth:5, marginLeft:18, marginTop:-110, marginBottom:100, borderColor:'#ebb134'}}>
    {it?.SSLC  ? (<View>
        <Image source={{ uri: ImageURL+it.SSLC}} style={{width: 100, height: 100, marginLeft:10, marginTop:10  }}  resizeMode='center'/>
        <Text style={{width: 100, height: 100,  marginLeft:45, fontWeight:'bold', color:'#ebb134'}}>SSLC</Text></View>
      ) : (
        <Text style={{color:'red', marginTop:50, marginLeft:2, fontSize:15, textAlign:'center'}}>No SSLC Certificate found</Text>
      )}  
    
    
    </View>
    <View style={{width: 130, height: 140, borderWidth:5, marginLeft:170, marginTop:-240, marginBottom:140, borderColor:'#ebb134'}}>
    {it?.LOWER  ? (<View>
       <Image source={{ uri: ImageURL+it.LOWER}} style={{width: 100, height: 100, marginTop:10, marginLeft:10 }}  resizeMode='center'/>  
       <Text style={{width: 100, height: 100,  marginLeft:35, fontWeight:'bold', color:'#ebb134'}}>LOWER</Text> </View>
      ) : (
        <Text style={{color:'red', marginTop:50, marginLeft:2, fontSize:15, textAlign:'center'}}>No Lower Certificate found</Text>
      )}   
  
   </View>   
          <TouchableHighlight
                  style={{ backgroundColor: '#ebb134', borderRadius: 10,  padding: 3, width: '25%' }}
                  onPress={() => setExpandedItems((prevExpanded) => prevExpanded.filter((item) => item !== index))} underlayColor="transparent"
                >
                  <Text style={{ color: 'white', fontSize: 16, marginLeft: 2 }}>View Less</Text>
                </TouchableHighlight>
              </>
            )}
            {!expandedItems.includes(index) && (
              <TouchableHighlight
                style={{ backgroundColor: '#ebb134', borderRadius: 10, marginTop:50, padding: 3, width: '25%' }} underlayColor="transparent"
                onPress={() => setExpandedItems((prevExpanded) => [...prevExpanded, index])}
              >
                <Text style={{ color: 'white', fontSize: 16, marginLeft: 2 }}>View More</Text>
              </TouchableHighlight>
            )}

            
 
 </DataTable> 
          
        </View>

      ))}
      


<View >

<ScrollView style={{width:700, height:90, marginBottom:40, marginTop:-20,  }} horizontal={true} underlayColor="transparent">

{selectedValue && (
        <View style={styles.paginationContainer}>
          {pageNumbers.map((page) => (
            <TouchableOpacity
              key={page}
              style={[
                styles.paginationItem,
                currentPage === page ? styles.paginationItemSelected : null,
              ]}
              onPress={() => goToPage(page)}
            >
              <Text style={styles.paginationText}>{page}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}


</ScrollView>
</View>

      
    </View>
  );
};

const styles = StyleSheet.create({  
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#ebb134',
    borderRadius:7,
    
    
  },
  tableTitle: {
fontSize:30,

  },
  
  shadow: {
    shadowColor: '#2E0755',
    shadowOpacity: 0.17,
    shadowRadius: 10.54,
    elevation: 10,
    shadowOffset: { width: 0, height: 2 },
    color: '#ebb134',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 15,
    flex: 0.3,
    backgroundColor: 'beige',
    width: '90%',
    lineHeight: 27,
    borderRadius: 8,
    marginBottom: 50,
    marginLeft:20,
  },

  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  paginationItem: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#9c9a9a',
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  paginationItemSelected: {
    backgroundColor: '#ebb134',
  },

  paginationText: {
    color: 'white',
  },

  container1:{
width:'100%',
height:'100%',



  }


  
});

export default App;
