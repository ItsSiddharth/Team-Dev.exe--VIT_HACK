import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:vit_hack_final/bottom_navbar.dart';
import 'package:vit_hack_final/api-calls/notification_api.dart';
import 'package:url_launcher/url_launcher.dart';

var v1;
var storingResponse = Notifications();
bool isData=false;

class NotificationScreen extends StatefulWidget {
  static String id = 'notification';
  @override
  _NotificationScreenState createState() => _NotificationScreenState();
}

class _NotificationScreenState extends State<NotificationScreen> {

  @override
  void initState(){
    super.initState();
    infoGetter();
  }
  void infoGetter() async{
    await storingResponse.getData();
    //print(storingResponse.primary.number);
    v1=storingResponse.notificationList[0].link.toString();
    print(v1);
    setState(() {
      isData=true;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: NewBottomBar(
          widget: Column(
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.all(12.0),
                child: Container(
                  width: double.infinity,
                  height: 50.0,
                  child: Text("Notifications", style:TextStyle(fontSize: 30.0)),
                ),
              ),
              Flexible(
                child: isData==false?Container():Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: ListView.builder(
                      itemCount: storingResponse.notificationLength,//storingResponse.notificationLength,
                      itemBuilder: (context,i){
                        return ListTile(
                          title: Text(storingResponse.notificationList[i].title.toString()),
                          subtitle: new RichText(text: TextSpan(
                            text: storingResponse.notificationList[i].link.toString(),
                            style: new TextStyle(color: Colors.blue),
                            recognizer: new TapGestureRecognizer()
                              ..onTap = () { launch(storingResponse.notificationList[i].link.toString());
                              },
                          )),
                        );
//
                      }
                  ),
                ),
              ),
            ],
          ),
      ),
    );
  }
}


/*return ListTile(
                        title: Text(storingResponse.regionalList[i].loc.toString(), style: TextStyle(color: Colors.white),),
                        subtitle: Text(storingResponse.regionalList[i].number.toString()),

                      );*/

/*Center(child: Text('hello', style: TextStyle(color: Colors.white),),),*/