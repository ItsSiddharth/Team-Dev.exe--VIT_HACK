import 'package:flutter/material.dart';
import 'package:vit_hack_final/screens/about_screen.dart';
import 'package:vit_hack_final/screens/contact_screen.dart';
import 'package:spincircle_bottom_bar/modals.dart';
import 'package:vit_hack_final/screens/hospital_screen.dart';
import 'package:spincircle_bottom_bar/spincircle_bottom_bar.dart';
import 'package:vit_hack_final/screens/notification_screen.dart';


class NewBottomBar extends StatelessWidget {
  final Widget widget;
  NewBottomBar({this.widget});
  @override
  Widget build(BuildContext context) {
    return SpinCircleBottomBarHolder(
      bottomNavigationBar: SCBottomBarDetails(
          circleColors: [Colors.white, Colors.orange, Colors.redAccent],
          iconTheme: IconThemeData(color: Colors.grey),
          activeIconTheme: IconThemeData(color: Colors.redAccent),
          backgroundColor: Color(0xff0F1E35),
          titleStyle: TextStyle(color: Colors.grey, fontSize: 12),
          activeTitleStyle: TextStyle(
              color: Colors.white, fontSize: 12, fontWeight: FontWeight.bold),
          actionButtonDetails: SCActionButtonDetails(
              color: Colors.redAccent,
              icon: Icon(
                Icons.expand_less,
                color: Colors.white,
              ),
              elevation: 2),
          elevation: 2.0,
          items: [
            // Suggested count : 4
            SCBottomBarItem(
                icon: Icons.supervised_user_circle, title: "Contacts", onPressed: () {
              Navigator.pushNamed(context, ContactScreen.id);
            }),
            SCBottomBarItem(
                icon: Icons.local_hospital,
                title: "Details",
                onPressed: () {
                  Navigator.pushNamed(context, HospitalScreen.id);

                }),
            SCBottomBarItem(
                icon: Icons.notifications,
                title: "Notification",
                onPressed: () {
                  Navigator.pushNamed(context, NotificationScreen.id);
                }),
            SCBottomBarItem(
                icon: Icons.details, title: "About us", onPressed: () {
              Navigator.pushNamed(context, AboutScreen.id);
            }),
          ],
          circleItems: [
            //Suggested Count: 3
            SCItem(icon: Icon(Icons.add), onPressed: () {}),
            SCItem(icon: Icon(Icons.print), onPressed: () {}),
            SCItem(icon: Icon(Icons.map), onPressed: () {}),
          ],
          bnbHeight: 80 // Suggested Height 80
      ),
      child: SafeArea(
        child: widget,
      ),
    );
  }
}
