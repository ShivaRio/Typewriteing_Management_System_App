import React, {useState } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight,TouchableOpacity, StyleSheet,PermissionsAndroid  } from 'react-native';
import { launchImageLibrary, launchCamera, Asset, ImageLibraryOptions, CameraOptions  } from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message';
import axios from 'axios';
import ImageCropPicker from 'react-native-image-crop-picker';

 
const SERVER_URL = 'https://pjoptechnologies.com/Type/Backend';

 


const App = () => {
  const [photo, setPhoto] = useState<Asset | null>(null);
  const [ticks, setticks] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [tempID, setTempID] = useState('');
  const [TempIdError, setTempIdError] = useState('');
  const [institution, setinstitution] = useState('');
  const [InstitutionError, setInstitutionError] = useState('');

  const [error, seterror] = useState(null);
  const placeholderImage = require('./img/placeholder.png');  
  const tick = require('./img/tick.png');  



  const validateForm = () => {
    let isValid = true;

    if (!tempID) {
      setTempIdError('TempID is required');
      isValid = false;
    } else {
      setTempIdError('');
    }

    
    if (!institution) {
      setInstitutionError('Institution No. is required');
      isValid = false;
    } else {
      setInstitutionError('');
    }

    

    return isValid;
  };





  const handleChoosePhoto = () => {
    const aspectRatioWidth = 3.5;
    const aspectRatioHeight = 4.5;
    const desiredWidth = 300;
    const calculatedHeight = (desiredWidth * aspectRatioHeight) / aspectRatioWidth;
  
    ImageCropPicker.openPicker({
      mediaType: 'photo',
      includeBase64: false,
      width: desiredWidth,
      height: calculatedHeight,
      cropping: true,
      cropperToolbarTitle: 'Crop Image',
    })
      .then((image) => {
        console.log('Selected image:', image); // Check the value of image
        
        if (image) {
          setPhoto(image);
          console.log('Setting photo:', image);

        } else {
          console.log('Image is null or undefined.'); // Log an error message if image is null
        }
      })
      .catch((error) => {
        console.log('Error:', error); // Handle the error appropriately
      });
  };0
  

 
  

  const handleTakePhoto = () => {
    const aspectRatioWidth = 8.27;
    const aspectRatioHeight = 11.69;
    const desiredWidth = 300;
    const calculatedHeight = (desiredWidth * aspectRatioHeight) / aspectRatioWidth;
  
    const options: CameraOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: calculatedHeight,
      maxWidth: desiredWidth,
    };

    launchCamera(options, (response) => {
      if (response?.assets?.length) {
        setPhoto(response.assets[0]);
      }
    });
  }; 
  
    const handleUploadPhoto = () => {
      
      if (validateForm()) {
      const formData = new FormData();
      formData.append('Tempno', tempID);
      formData.append('institution_no', institution);
      
      // if (tempID && institution) {
        formData.append('photo', {
          uri: (photo as any).path,
          type: 'image/jpeg',
          name: 'photo.jpg',
        });
        const xhr = new XMLHttpRequest();
  
        xhr.upload.addEventListener('progress', (event) => {
          if (event.lengthComputable) {
            const progress = Math.round((event.loaded / event.total) * 100);
            // Update the progress bar with the current progress value
            // Example: setUploadProgress(progress);
            console.log('Upload Progress:', progress);
          }
        });
    
        xhr.addEventListener('load', () => {
          // Image upload completed
          showMessage({
            message: 'Your Photo Uploaded Successfully',
            type: 'success',
            duration: 3000,
            autoHide: true,
          });
          setticks(true);
        });
    
        xhr.addEventListener('error', (error) => {
          // Image upload error
          console.log('Upload Error:', error);
        });
    
        xhr.open('POST', `${SERVER_URL}/photo_upload.php`);
        xhr.send(formData);
    
        
      
    console.log('Form is valid');
  }

       
  };
  
  


const handleRemovePhoto = () => {
  setPhoto(null);
};
return (


<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


      
      <View style={styles.intel}>
    <TextInput style={styles.TextInput}
  placeholderTextColor={'#ebb134'}
  
  value={tempID}
  onChangeText={(text) => {setTempID(text); setTempIdError(""); }}
  placeholder="Enter Temp ID"
/>
</View>
<Text style={{color:'red',}}>{TempIdError}</Text>





      <View style={styles.intel1}>
    <TextInput  style={styles.TextInput}
  placeholderTextColor={'#ebb134'}
  
  value={institution}
  onChangeText={(text) => {setinstitution(text); setInstitutionError(""); }}
  placeholder="Enter Institution No."
/>
</View>
<Text style={{color:'red',}}>{InstitutionError}</Text>



  <Text style={styles.title}>Upload Your Photo Here</Text>

  <View style={styles.imageContainer}>
  {photo ? (
    <Image source={{ uri: (photo as any).path }} style={styles.image} />
    ) : (
    <Image source={placeholderImage} style={styles.placeholderImage} />
  )}
  {photo && ticks && (
    <Image source={tick} style={styles.tick} />
  )}
</View>

      <FlashMessage position="center" />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
          <Text style={styles.buttonText}>Choose Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
          <Text style={styles.buttonText}>Take Photo</Text>
        </TouchableOpacity>
      </View>

      {photo && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.removeButton]}
            onPress={handleRemovePhoto}
          >
            <Text style={styles.buttonText}>Remove Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleUploadPhoto}
          >
            <Text style={styles.buttonText}>Upload Photo</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  
  
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    color: 'black', // Set text color to black
  },
  placeholderText: {
    color: 'black', // Set placeholder text color to black
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"#ebb134",
    marginTop:20,
    marginBottom: 20,
  },
  imageContainer: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  tick: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    
  },

  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#ebb134',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: '#ebb134',
  },

  intel: {
marginRight: 170,
marginTop:30,
marginBottom:10,

  },

  intel1: {
    marginLeft: 150,
    marginTop:-79,
    marginBottom:10,
    
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


  
});
export default App;
