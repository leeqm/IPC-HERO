import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  Dimensions,
  Alert,
  Image,
  StatusBar
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import { Feather } from "@expo/vector-icons";
import { auth, db } from "../firebase/firebase";
import { Entypo } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import Loader from "../components/Loader";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get("window");
console.log(height);
let top;
if (Platform.OS === "ios") {
  top = height * 0.02;
} else {
  top = 0;
}

export default function Login({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [ hidePassword, setHidePassword] = useState(true);

  const handleSignin = async () => {
    setLoading(true);
    await
    signInWithEmailAndPassword(auth, email.trim(), password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoading(false);
        alert("login successful 🎉");
      })
      .catch((err: any) => {
        //alert(err.meassage);
        alert('Please try again with correct password and email');
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar 
        hidden = {true}
        backgroundColor="white"
      />
      <View style={styles.loginHeader}>
      <Image
          style={styles.topImage}
          source={require('../components/nurse_login.png')}
        />
        <Text style={styles.loginHeaderText}>Let's get started, </Text>
        <Text style={styles.loginHeaderText}>IPC Hero </Text>
      </View>
      <Loader visible = {loading} />
      
      <View style={styles.loginContainer}>
        {/* Email */}
        <View style={styles.emailContainer}>
          <Text style={styles.emailText}>Email</Text>
          <TextInput
            style={styles.emailInput}
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        {/* Password */}
        <View style={styles.passwordContainer}>

          <Text style={styles.passwordText}>Password</Text> 

          <View style={styles.inputContainer}>

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
            style={{color: Colors.darkBlue, fontSize: 22, marginTop: 20, paddingRight:20}}
          />

          </View>
        </View>
        {/* Forgot Password */}
        <View style={styles.forgotContainer}>
          <TouchableOpacity onPress={() => navigation.push("Forgot")}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        {/* Login Button */}
        <View style={styles.loginButton}>
          <TouchableOpacity onPress={handleSignin}>
            <Text style={styles.loginButtonText}>
              {
                loading ? "Loading" : "Login"
              }
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupGroup}>
          <Text style={styles.new}>New here?</Text>
          <TouchableOpacity onPress={() => navigation.push("Signup")}>
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: height * 0.1,
    //marginTop: 20,
    justifyContent: "center",
    alignContent: "center"
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
    flex: 1,
    width: "100%",
    flexDirection: "column",
    marginTop: 20,
    marginHorizontal: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  loginHeaderText: {
    //height: "100%",
    fontSize: 36,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center"
  },
  loginContainer: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 15,
  },
  emailContainer: {
    flex:1,
    //marginTop: 20,
    
  },
  emailText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  emailInput: {
    marginTop: 10,
    width: "100%",
    aspectRatio: 6,
    //height: "80%",
    backgroundColor: Colors.light,
    borderWidth: 1,
    borderColor: Colors.light,
    borderRadius: 8,
    paddingLeft: 10,
  },
  passwordContainer: {
    flex:1,
    marginTop: 20,
  },
  passwordText: {
    marginTop:10,
    fontSize: 16,
    fontWeight: "bold",
  },
  passwordInput: {
    marginTop: 10,
    width: "90%",
    aspectRatio: 6,
    backgroundColor: Colors.light,
    borderRadius: 8,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: Colors.light,
  },
  forgotContainer: {
    flex:0.5,
    marginTop: 20,
    alignItems: "flex-end",
  },
  forgotText: {
    marginTop:10,
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
  },
  loginButton: {
    flex:0.8,
    marginTop: 10,
    width: "100%",
    height: "100%",
    backgroundColor: Colors.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
  },
  signupGroup: {
    flex:0.5,
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
  inputContainer: {
    backgroundColor: Colors.light,
    flexDirection: 'row',
  },
  topImage:{
    //width:156,
    //height: 300,
    height:'80%',
    aspectRatio: 0.5,
    marginRight: 50,
    resizeMode: 'contain',
  }
});
