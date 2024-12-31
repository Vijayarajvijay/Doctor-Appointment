import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/Screens/Home';
import Menus from './src/Screens/Menus';
import BottomTabbarMenu from './src/components/BottomTabbarMenu';
import Appointments from './src/Screens/Appointments';
import Records from './src/Screens/Records';
import DoctorDetailsPage from './src/Screens/DoctorDetailsPage';
import BookingAppointment from './src/Screens/BookingAppointment';
import BookingSammary from './src/Screens/BookingSammary';
import SplashScreen from './src/Screens/SplashScreen';
import LoginScreen from './src/Screens/LoginScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import ForgotPassword from './src/Screens/ForgotPassword';
import ResetPassword from './src/Screens/ResetPassword';
import { Colors } from './src/Constant';
import MyProfile from './src/Screens/MyProfile';
import ProfileEdit from './src/Screens/ProfileEdit';
import Notifications from './src/Screens/Notifications';
import HelpCenter from './src/Screens/HelpCenter';
import AboutUs from './src/Screens/AboutUs';
import Reviews from './src/Screens/Reviews';
import DirectAppointmentDetails from './src/Screens/DirectAppointmentDetails';
import OnlineAppointmentDetails from './src/Screens/OnlineAppointmentDetails';
import RecordTopbar from './src/components/RecordTopbar';
import RecDirectAppDetails from './src/Screens/RecDirectAppDetails';
import ChatSupport from './src/Screens/ChatSupport';
import Bookings from './src/Screens/AnbeasivamApplication/Bookings';
import Topbar from './src/Screens/AnbeasivamApplication/Topbar';
import Profile from './src/Screens/AnbeasivamApplication/Profile';
import Support from './src/Screens/AnbeasivamApplication/Support';
import DoctorsListing from './src/Screens/AnbeasivamApplication/DoctorsListing';

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash Screen' screenOptions={{
        headerStatusBarHeight:25,
        
    
      }} >
        <Stack.Screen name='Splash Screen' component={SplashScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Sign Up' component={SignUpScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Forgot Password' component={ForgotPassword}/>
      <Stack.Screen name='Reset Password' component={ResetPassword}/>
        <Stack.Screen  name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='Menu' component={Menus} options={{headerShown:false}}/>
        <Stack.Screen name='Bottom' options={{headerShown:false}} component={BottomTabbarMenu}/>
        {/* <Stack.Screen name='Appointments' component={Appointments}/> */}
        {/* <Stack.Screen name='Records' component={RecordTopbar}/> */}
        <Stack.Screen name='Doctor Details' component={DoctorDetailsPage}/>
        <Stack.Screen name='Book an Appointment' component={BookingAppointment}/>
        <Stack.Screen name='Booking Sammary' component={BookingSammary}/>
        <Stack.Screen name='My Profile' component={MyProfile}/>
        <Stack.Screen name='Edit Profile' component={ProfileEdit}/>
        <Stack.Screen name='Notifications' component={Notifications}/>
        <Stack.Screen name='Help and Support' component={HelpCenter}/>
        <Stack.Screen name='About Us' component={AboutUs}/>
        <Stack.Screen name='Reviews' component={Reviews}/>
        <Stack.Screen name='Inperson Details' component={DirectAppointmentDetails}/>
        <Stack.Screen name='Online Details' component={OnlineAppointmentDetails}/>
        <Stack.Screen name='Record Details' component={RecDirectAppDetails}/>
        <Stack.Screen name='Chat Support' component={ChatSupport}/>
        <Stack.Screen name='Bookings' component={Topbar}/>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='Support' component={Support}/>
        <Stack.Screen name='DoctorsList' component={DoctorsListing}/>


      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App
 