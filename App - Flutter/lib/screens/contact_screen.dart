import 'package:flutter/material.dart';
import 'package:eva_icons_flutter/eva_icons_flutter.dart';
import 'package:vit_hack_final/api-calls/contact_api.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:vit_hack_final/bottom_navbar.dart';


var v1,v2,v3,v4,v5;
bool isData=false;
var storingResponse = Contact();
class ContactScreen extends StatefulWidget {
  static String id = 'contact-helpline';
  @override
  _ContactScreenState createState() => _ContactScreenState();
}

class _ContactScreenState extends State<ContactScreen> {

  @override
  void initState(){
    super.initState();
    infoGetter();
  }
  void infoGetter() async{
    await storingResponse.getData();
    print(storingResponse.primary.number);
    v1=storingResponse.primary.number.toString();
    v2=storingResponse.primary.tollFree.toString();
    v3=storingResponse.primary.email.toString();
    v4=storingResponse.primary.facebook;
    v5=storingResponse.primary.twitter;
    setState(() {
      isData=true;
    });
  }



  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: NewBottomBar(
          widget: Column(
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.all(12.0),
                child: Container(
                  decoration: BoxDecoration(
                      color: Colors.redAccent,
                      borderRadius: BorderRadius.all(Radius.circular(20))
                  ),

                  width: double.infinity,
                  child: Column(
                    children: <Widget>[
                      SizedBox(
                        height: 20,
                      ),
                      Text('Helpline number: $v1'),
                      SizedBox(height: 7.0,),
                      Text('Toll Free helpline number:$v2'),
                      SizedBox(height: 7.0,),
                      Text('Email id: $v3'),
                      SizedBox(height: 7.0,),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: <Widget>[
                          IconButton(
                            icon: Icon(EvaIcons.twitter, color: Color(0xff0F1E35), size: 30,),
                            onPressed: ()async {
                              var url=storingResponse.primary.twitter;
                              if (await canLaunch(url)){
                                await launch(url);
                              }
                              else
                                throw 'error';
                            },
                          ),
                          Text("Social media helplines"),

                          IconButton(
                            icon: Icon(EvaIcons.facebook, color: Color(0xff0F1E35), size: 30,),
                            onPressed: ()async {
                              var url=storingResponse.primary.facebook;
                              if (await canLaunch(url)){
                                await launch(url);
                              }
                              else
                                throw 'error';
                            },
                          ),

                        ],
                      )
                    ],
                  ),
                ),
                ),

              Flexible(
                child: isData==false ? Container():ListView.builder(
                    itemCount: storingResponse.regionalLength,
                    itemBuilder: (context,i){
                      return Padding(
                        padding: const EdgeInsets.all(10.0),
                        child: Padding(
                          padding: const EdgeInsets.only(left: 10, right:10),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,

                            children: <Widget>[
                              Container(
                                child: Text(storingResponse.regionalList[i].loc.toString(),),
                              ),
                              SizedBox(width:30.0),
                              Container(
                                child: Text(storingResponse.regionalList[i].number.toString(),),
                              ),
                            ],
                          ),
                        ),
                      );

                    }
                ),
              ),
            ],
          )
        ),
      ),

    );
  }

}

