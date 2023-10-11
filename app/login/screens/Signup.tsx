import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
  Keyboard
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import { Feather } from "@expo/vector-icons";
import { auth, db } from "../firebase/firebase";
import { Entypo } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import  DateTimePicker  from '@react-native-community/datetimepicker';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Loader from '../components/Loader';


const { width, height } = Dimensions.get("window");
let top;
if (Platform.OS === "ios") {
  top = height * 0.02;
} else {
  top = 0;
}

export default function Signup({ navigation }: { navigation: any }) {
  const [ email, setEmail] = useState<string>("");
  const [ password, setPassword] = useState<any>("");
  const [ username, setUsername] = useState<string>("");
  const [ loading, setLoading] = useState<boolean>(false);
  const [ hospitalname, setHospitalname] = useState<string>("");
  const [ departmentname, setDepartmentname] = useState<string>("");
  const [ dateofBirth, setDateofBirth] = useState<any> ("");
  const [ date, setDate ] = useState <any> (new Date());
  const [ showPicker, setShowPicker ] = useState <any> (false);
  const [ infoEmpty, setInfoEmpty] = useState(false);
  const [ hidePassword, setHidePassword] = useState(true);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!username) {
      setInfoEmpty(true);
      isValid = false;
    } 
    if (!dateofBirth) {
      setInfoEmpty(true);
      isValid = false;
    } 
    if (!email) {
      setInfoEmpty(true);
      isValid = false;
    } 
    if (!hospitalname) {
      setInfoEmpty(true);
      isValid = false;
    } 
    if (!departmentname) {
      setInfoEmpty(true);
      isValid = false;
    } 
    if (infoEmpty == true) {
      alert ("please fill in all information");
      setInfoEmpty(false);
    }
    if (isValid) {
      handleSignup();
    }
    
  };

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({type}: {type: string}, selectdDate: any) => {
    if (type === "set") {
      const currentDate: any = selectdDate;
      setDate(currentDate);

      if (Platform.OS === "android"){
        toggleDatepicker();
        setDateofBirth(currentDate.toDateString());
      }

    } else {
      toggleDatepicker();
    }
  };

  const handleSignup = async () => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email.trim(), password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoading(false);
        setDoc(doc(db, "users", user.uid), {
          Name: username,
          Email: email,
          HospitalName: hospitalname,
          DepartmentName: departmentname,
          Birthday: dateofBirth,
          CreatedAt: new Date().toUTCString(),
        });
      })
      .then(() => alert("account created successfully 🎉"))
      .catch((err: any) => {

        if (err.message == 'Firebase: Error (auth/invalid-email).')
        {
          alert('invalid email address');
          console.log(err.message);
        }
        else if (err.message == 'Firebase: Error (auth/email-already-in-use).')
        {
          alert('this email address already in use');
          console.log(err.message);
        }
        else if (err.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).')
        {
          alert('Password should be at least 6 characters');
          console.log(err.message);
        }
        else 

        {
          alert('error');
          console.log(err.message);
        }
        setLoading(false);
      });
  };

  return (
   
  
    <View style={styles.container}> 
    
      <View style={styles.loginHeader}>
        <Text style={styles.loginHeaderText}>Register now 🎉</Text>
      </View>
      <Loader visible = {loading} />
      <ScrollView showsVerticalScrollIndicator = {false} >
      <KeyboardAvoidingView behavior="padding" style={styles.loginContainer}>
      

        {/* Username */}
        <View style={styles.emailContainer}>

          <Text style={styles.emailText}>Username</Text>

          <View style={styles.inputContainer}>

          <Icon
          name="account-outline"
          style={{color: Colors.darkBlue, fontSize: 22, marginRight: 3, marginTop: 23}}
          />

          <TextInput
            style={styles.emailInput}
            placeholder="Enter your name ( As per IC )"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          </View>
        </View>

        {/* Birthday */}
        <View style={styles.emailContainer}>

          <Text style={styles.emailText}>Birthday</Text>

          <View style={styles.inputContainer}>

          <Icon
          name="calendar"
          style={{color: Colors.darkBlue, fontSize: 22, marginRight: 3, marginTop: 23}}
          />

          {showPicker && (
            <DateTimePicker 
              mode="date"
              display="spinner"
              value={date}
              onChange={onChange}
              //maximumDate={new Date('2010-1-1')}
              //minimumDate={new Date('1955-1-1')}
            />
          )} 

            <Pressable onPress={toggleDatepicker}> 
              <TextInput
                style={styles.emailInput}
                placeholder="Enter your birthday"
                value={dateofBirth}
                editable={false}
                onChangeText={(text) => setDateofBirth(text)}
              />
            </Pressable>
            </View>
        </View>

        {/* Email */}
        <View style={styles.emailContainer}>
          <Text style={styles.emailText}>Email</Text>

          <View style={styles.inputContainer}>

          <Icon
          name="email-outline"
          style={{color: Colors.darkBlue, fontSize: 22, marginRight: 3, marginTop: 23}}
          />

          <TextInput
            style={styles.emailInput}
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          </View>
        </View>

        {/* Hospital Name */}
        <View style={styles.emailContainer}>
          <Text style={styles.emailText}>Hospital</Text>

          <View style={styles.inputContainer}>

          <Icon
          name="hospital-building"
          style={{color: Colors.darkBlue, fontSize: 22, marginRight: 3, marginTop: 23}}
          />

          <TextInput
            style={styles.emailInput}
            placeholder="Enter the hospital you're working at"
            value={hospitalname}
            onChangeText={(text) => setHospitalname(text)}
          />
          </View>
        </View>

        {/* Department Name */}
        <View style={styles.emailContainer}>
          <Text style={styles.emailText}>Department/Unit</Text>

          <View style={styles.inputContainer}>

          <Icon
          name="file-account"
          style={{color: Colors.darkBlue, fontSize: 22, marginRight: 3, marginTop: 23}}
          />

          <TextInput
            style={styles.emailInput}
            placeholder="Enter your unit (eg; Coronary Care Unit)"
            value={departmentname}
            onChangeText={(text) => setDepartmentname(text)}
          />
          </View>
        </View>


        {/* Password */}
        <View style={styles.emailContainer}>
          <Text style={styles.passwordText}>Password</Text>

          <View style={styles.inputContainer}>

          <Icon
          name="onepassword"
          style={{color: Colors.darkBlue, fontSize: 22, marginRight: 3, marginTop: 23}}
          />

          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password"
            value={password}
            secureTextEntry={hidePassword}
            onChangeText={(text) => setPassword(text)}
          />

          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: Colors.darkBlue, fontSize: 22, marginTop: 20}}
          />

          </View>
        </View>

        {/* Login Button */}
        <View style={styles.loginButton}>
          <TouchableOpacity onPress={validate}>
            <Text style={styles.loginButtonText}>
              {loading ? "Creating account..." : "Create Account"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupGroup}>
          <Text style={styles.new}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.push("Login")}>
            <Text style={styles.signup}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginHorizontal: 15,
    marginTop: height * 0.05,
  },
  arrowContainer: {
    width: 40,
    height: 40,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  loginHeader: {
    marginTop: 20,
    marginHorizontal: 15,
  },
  loginHeaderText: {
    fontSize: 36,
    fontWeight: "bold",
  },
  loginContainer: {
    marginTop: 20,
  },
  emailContainer: {
    marginBottom: 20,
    marginHorizontal: 15,
  },
  emailText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  emailInput: {
    marginTop: 10,
    width: "100%",
    height: 50,
    backgroundColor: Colors.light,
    borderWidth: 1,
    borderColor: Colors.light,
    borderRadius: 8,
    paddingLeft: 10,
    color : 'black',
  },
  passwordContainer: {
    marginTop: 20,
  },
  passwordText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  passwordInput: {
    marginTop: 10,
    width: "80%",
    height: 50,
    backgroundColor: Colors.light,
    borderRadius: 8,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: Colors.light,
  },
  forgotContainer: {
    marginTop: 20,
    alignItems: "flex-end",
  },
  forgotText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
  },
  loginButton: {
    marginTop: 20,
    width: "90%",
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
  },
  signupGroup: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  signup: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  new: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 5,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: Colors.grey,
  },
  inputContainer: {
    //height: 55,
    backgroundColor: Colors.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    //borderWidth: 0.5,
  },
});
