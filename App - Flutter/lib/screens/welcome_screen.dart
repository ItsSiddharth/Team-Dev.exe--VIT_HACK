import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:vit_hack_final/screens/home_screen.dart';
import 'package:flutter/animation.dart';


class WelcomeScreen extends StatelessWidget {
  static String id = 'welcome';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0xff0F1E35),
      body: Container(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            SizedBox(
              height: 200,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text(
                      "PROTEkT",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 55.0,
                        fontWeight: FontWeight.w700,
                        fontFamily: 'Roboto',
                      ),
                    ),
                ],
              ),
            SizedBox(
              height: 200,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Container(
                  height: 50,
                  width: 200,
                  child: RaisedButton(
                      shape: RoundedRectangleBorder(borderRadius: new BorderRadius.circular(30.0)),
                    color: Colors.white,
                    child: Text('Get Started', style: TextStyle(color: Colors.black),),
                    onPressed: (){
                      Navigator.pushNamed(context, HomeScreen.id);
                    },
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
