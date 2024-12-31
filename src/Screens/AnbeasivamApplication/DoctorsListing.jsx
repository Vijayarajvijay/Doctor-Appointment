import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const doctors = [
    {
        name: 'Dr. Ahmed Altaf Latiwala Latiwala',
        qualification: 'MBBS',
        specialization: 'General Physician',
        clinic: 'Dr Ahmed Latiwala Clinic',
        address: '3A Gopal Terrace, Bardoli Petha, Salwatpura, Surat',
        experience: '9 yrs exp',
        fee: '₹ 200',
        rating: 89,
        ratingsCount: 29,
        image : (require('../../assets/images/inpersonDoctor.jpg'))
    },
    {
        name: 'Dr. Narasimharao Vasireddy',
        qualification: 'Certification in Food And Nutrition, C.C.E.B.D...',
        specialization: 'General Physician',
        clinic: 'MEDCARE CLINIC',
        address: 'Nizampet, Hyderabad',
        experience: '42 yrs exp',
        fee: '₹ 150',
        rating: 85,
        ratingsCount: 10,
        image : (require('../../assets/images/doctorlogo.jpg'))
    },
    {
        name: 'Dr. Mohammed Faisal',
        qualification: 'MBBS Bachelor of Medicine and Bachelor of...',
        specialization: 'General Physician',
        clinic: 'Trucare Chest Clinic',
        address: 'Vijay Nagar Colony Rd, Hyderabad',
        experience: '16 yrs exp',
        fee: '₹ 350',
        rating: 90,
        ratingsCount: 31,
    },
    {
        name: 'Dr. Santosh Bansal',
        qualification: 'MBBS, MTP Training, Ultrasound',
        specialization: 'General Physician',
        clinic: 'Dr. Santosh Bansal\'s Clinic',
        address: 'Sushant Lok I, Gurgaon',
        experience: '45 yrs exp',
        fee: '₹ 200',
        rating: 91,
        ratingsCount: 104,
    },
    {
        name: 'Dr. Rubi Bhola',
        qualification: 'MBBS, MD - Medicine',
        specialization: 'General Physician',
        clinic: 'Mukti Women Welfare Clinic',
        address: '30 Lajpat Nagar, Maldahiya, Varanasi',
        experience: '8 yrs exp',
        fee: '₹ 150',
        rating: 92,
        ratingsCount: 57,
    },
];

const DoctorsListing = () => {
    return (
        <ScrollView style={styles.container}>
            {doctors.map((doctor, index) => (
                <View key={index} style={styles.card}>
                    <View style={styles.row}>
                        <Image source={doctor.image} style={styles.avatar} />
                        <View style={styles.info}>
                            <Text style={styles.name}>{doctor.name}</Text>
                            <Text style={styles.details}>{doctor.qualification}</Text>
                            <Text style={styles.details}>{doctor.specialization}</Text>
                            <Text style={styles.details}>{doctor.clinic}</Text>
                            <Text style={styles.details}>{doctor.address}</Text>
                            <Text style={styles.experience}>{doctor.experience} • {doctor.fee}</Text>
                        </View>
                        
                    </View>
                    <View style={styles.ButtonContainer} >
                    <TouchableOpacity style={[styles.button,{backgroundColor:"none",borderWidth:2,borderColor: "#0196A3"
                    }
                    ]}>
                        <Text style={[styles.buttonText,{color: "#0196A3"}]}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>CONSULT</Text>
                    </TouchableOpacity>
                    </View>
                    
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    info: {
        flex: 1,
        marginLeft: 16,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    details: {
        fontSize: 14,
        color: '#555',
    },
    experience: {
        fontSize: 14,
        color: '#333',
        marginTop: 4,
    },
    ratingContainer: {
        alignItems: 'center',
    },
    rating: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e74c3c',
    },
    ratingsCount: {
        fontSize: 12,
        color: '#555',
    },
    button: {
        backgroundColor:  "#0196A3",
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
        marginTop:8,
        width:"40%"
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    ButtonContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly"
    }
});

export default DoctorsListing;
