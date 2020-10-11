import 'package:flutter/material.dart';
import 'package:vit_hack_final/screens/welcome_screen.dart';
import 'package:vit_hack_final/screens/home_screen.dart';
import 'package:vit_hack_final/screens/contact_screen.dart';
import 'package:vit_hack_final/screens/hospital_screen.dart';
import 'package:vit_hack_final/screens/notification_screen.dart';
import 'package:vit_hack_final/screens/about_screen.dart';
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(

        theme: ThemeData.dark().copyWith(backgroundColor: Color(0xff0F1E35)),

      initialRoute: WelcomeScreen.id,
      routes:
      {
        HomeScreen.id: (context)=>HomeScreen(),
        WelcomeScreen.id: (context)=> WelcomeScreen(),
        ContactScreen.id: (context)=> ContactScreen(),
        HospitalScreen.id: (context)=> HospitalScreen(),
        NotificationScreen.id: (context)=>NotificationScreen(),
        AboutScreen.id:(context)=>AboutScreen(),
      },
    );
  }
}

