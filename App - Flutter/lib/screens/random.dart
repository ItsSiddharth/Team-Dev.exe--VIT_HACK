import 'package:flutter/material.dart';
import 'dart:convert';

class NotificationList{
  final List<Notification> notifications;
  NotificationList({this.notifications});

  factory NotificationList.fromJson(List<dynamic> parsedJson){
    List<Notification> notifications =new List<Notification>();
    notifications = parsedJson.map((i)=>Notification.fromJson(i)).toList();
    return new NotificationList(
        notifications: notifications
    );
  }
}
class Notification{
  final String title;
  final String link;
  Notification({this.title, this.link});

  factory Notification.fromJson(Map<String , dynamic> parsedJson){
    return new Notification(
      title: parsedJson['data']['notifications']['title'].toString(),
      link: parsedJson['data']['notifications']['link'].toString(),
    );
  }

}