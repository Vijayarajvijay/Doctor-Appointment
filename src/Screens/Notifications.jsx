import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../Constant';

const Notifications = () => {
  const notifications = [
    {
      type: 'comment',
      user: 'Divya',
      action: 'commented on your post:',
      message: 'Good work! Keep it going',
      time: '21 mins ago',
    },
    {
      type: 'comment',
      user: 'Guillaume',
      action: 'commented on your post:',
      message: 'I like the angle you took on this.',
      time: '50 mins ago',
    },
    {
      type: 'comment',
      user: 'Anupam',
      action: 'commented on your post:',
      message: 'Overthinking and its dangerous effects',
      time: '1 hour ago',
    },
    {
      type: 'comment',
      user: 'Ontario',
      action: 'commented on your post:',
      message: 'Great consistency!',
      time: '2 hours ago',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={styles.headerBadge}>
          <Text style={styles.headerBadgeText}>{notifications.length}</Text>
        </View>
      </View>
      {notifications.length === 0 ? (
        <View style={styles.noNotifications}>
            <Image style={{width:250,height:330}} source={require("../assets/images/notifications.png")}/>

          {/* <Text style={styles.noNotificationsText}>No notifications found</Text> */}
        </View>
      ) : (
        <>
          <View style={styles.subHeader}>
            <Text style={styles.sectionTitle}>RECENT</Text>
          </View>
          {notifications.slice(0, 2).map((notification, index) => (
            <NotificationItem key={index} notification={notification} />
          ))}
          <View style={styles.subHeader}>
            <Text style={styles.sectionTitle}>EARLIER</Text>
          </View>
          {notifications.slice(2).map((notification, index) => (
            <NotificationItem key={index} notification={notification} />
          ))}
        </>
      )}
    </ScrollView>
  );
};

const NotificationItem = ({ notification }) => {
  return (
    <View style={styles.notificationItem}>
      <Icon name="chatbubble-ellipses" size={30} color={Colors.secondary} style={styles.notificationIcon} />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationText}>
          <Text style={styles.notificationUser}>{notification.user} </Text>
          {notification.action}
          <Text style={styles.notificationMessage}>{notification.message}</Text>
        </Text>
        <Text style={styles.notificationTime}>{notification.time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerBadge: {
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginLeft: 10,
  },
  headerBadgeText: {
    color: '#fff',
    fontSize: 14,
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#D6D9DA",
  },
  sectionTitle: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderDarl,
  },
  notificationIcon: {
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 14,
    color: '#333',
  },
  notificationUser: {
    fontWeight: 'bold',
  },
  notificationMessage: {
    fontWeight: 'normal',
  },
  notificationTime: {
    color: '#999',
    fontSize: 12,
    marginTop: 5,
  },
  noNotifications: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop:100
  },
  noNotificationsText: {
    fontSize: 18,
    color: '#999',
  },
});

export default Notifications;
