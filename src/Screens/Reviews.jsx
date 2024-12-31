import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../Constant';

const Reviews= () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const submitReview = () => {
    if (rating > 0 && review.trim()) {
      setReviews([...reviews, { rating, review }]);
      setRating(0);
      setReview('');
    }
  };

  return (
    <View style={styles.container}>
        <Image style={{width:350,height:220}} source={require("../assets/images/reviews1.png")}/>
      <Text style={styles.title}>Rate and Review Your Experience</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <Icon
              name={star <= rating ? 'star' : 'star-outline'}
              size={30}
              color="gold"
            />
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Write your review..."
        value={review}
        onChangeText={setReview}
        multiline
      />
      <TouchableOpacity style={styles.submitButton} onPress={submitReview}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <FlatList
        data={reviews}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.reviewItem}>
            <View style={styles.ratingContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon
                  key={star}
                  name={star <= item.rating ? 'star' : 'star-outline'}
                  size={20}
                  color="gold"
                />
              ))}
            </View>
            <Text style={styles.reviewText}>{item.review}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.secondary,
    textAlign: 'center',
    marginBottom: 20,
    marginTop:10
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.borderDarl,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: Colors.secondary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  reviewItem: {
    borderWidth: 1,
    borderColor: Colors.borderDarl,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  reviewText: {
    fontSize: 16,
    color: '#555',
  },
});

export default Reviews;
