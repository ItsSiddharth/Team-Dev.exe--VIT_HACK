import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:vit_hack_final/bottom_navbar.dart';
import 'package:eva_icons_flutter/eva_icons_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

class AboutScreen extends StatefulWidget {
  static String id = 'about';
  @override
  _AboutScreenState createState() => _AboutScreenState();
}

class _AboutScreenState extends State<AboutScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: NewBottomBar(
        widget: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.all(12.0),
              child: Container(
                width: double.infinity,
                height: 50.0,
                child: Text("About Us", style:TextStyle(fontSize: 30.0)),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(12.0),
              child: Container(
                child: Column(
                  children: <Widget>[
                    Text("Made By: ", style: TextStyle(fontSize: 20.0),),
                    SizedBox(height: 20.0,),
                    Text("1. Sakshi Gupta",style: TextStyle(fontSize: 20.0),),
                    Text("2. Siddharth Menon",style: TextStyle(fontSize: 20.0),),
                  ],
                ),
              ),
            ),
            Padding(
              padding: EdgeInsets.all(12.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  IconButton(
                    icon: Icon(EvaIcons.github, color: Colors.white, size: 30,),
                    onPressed: ()async {
                      var url='https://github.com/ItsSiddharth/Team-Dev.exe-VIT_HACK';
                      if (await canLaunch(url)){
                        await launch(url);
                      }
                      else
                        throw 'error';
                    },
                  ),
                  Text("Link to Github Repository"),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
