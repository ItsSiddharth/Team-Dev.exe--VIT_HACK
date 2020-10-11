import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:async';

class Notifications{
  List<NotificationData> notificationList=[];
  int notificationLength=0;
  Future getData()async{
    http.Response response= await http.get("https://api.rootnet.in/covid19-in/notifications");
    var decode = jsonDecode(response.body);


    notificationLength = decode['data']['notifications'].length;
    var notificationInfo = decode['data']['notifications'];

    for (int i=0;i<notificationLength; i++){

      var notificationData=NotificationData();
      notificationData.assigner(notificationInfo[i]);
      print(notificationData);
      notificationList.add(notificationData);
    }
  }

}


class NotificationData{
  String title;
  String link;
  void assigner(var decode){
    title = decode['title'];
    link = decode['link'];
  }

}