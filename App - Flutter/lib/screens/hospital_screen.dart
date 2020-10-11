import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:vit_hack_final/bottom_navbar.dart';


class Hospital{
  String state;
  int ruralHospital;
  int ruralBeds;
  int urbanHospital;
  int urbanBeds;
  int totalHospital;
  int totalBeds;
  String asOn;
  void assign(var decode) {
    state = decode['state'];
    ruralHospital = decode['ruralHospitals'];
    ruralBeds = decode['ruralBeds'];
    urbanHospital = decode['urbanHospitals'];
    urbanBeds = decode['urbanBeds'];
    totalHospital = decode['totalHospitals'];
    totalBeds = decode['totalBeds'];
    asOn = decode['asOn'];
  }
}
var storingResponse = Hospital();
var v1;
var l;
bool isData=false;
List<String> hospitalList=[];
List<Text> tempList=[];
List<Hospital> tempList1=[];



class HospitalScreen extends StatefulWidget {
  static String id = 'hospital';

  @override
  _HospitalScreenState createState() => _HospitalScreenState();
}

class _HospitalScreenState extends State<HospitalScreen> {

  getData() async{
    var Response= await http.get("https://api.rootnet.in/covid19-in/hospitals/beds");
    if(Response.statusCode==200){
      var decode =json.decode(Response.body);
      l=decode['data']['regional'].length;
      print(l);
      var hospital_decoder = decode['data']['regional'];
      for(int i=0;i<l;i++)
        {
          String temp=decode['data']['regional'][i]['state'].toString();
          hospitalList.add(temp);
          tempList.add(Text(hospitalList[i]));
          Hospital obj= Hospital();
          obj.assign(hospital_decoder[i]);
          tempList1.add(obj);

        }
      setState(() {
        isData=true;
      });

    }
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    getData();
  }

  Widget newWidget(){
    return Container(
        padding:EdgeInsets.all(12.0),
      child: isData==false?Container():ListView.builder(
        itemCount: tempList1.length,
        itemBuilder: (context,index){
          return Container(
            decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.all(Radius.circular(20))
            ),
            margin: EdgeInsets.all(12.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                SizedBox(
                  height: 10,
                ),
                Text(tempList1[index].state.toString(), style: TextStyle(color: Colors.black),),
                SizedBox(
                  height: 5,
                ),
                Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: <Widget>[
                      Column(
                        children: <Widget>[
                          Text('HOSPITALS', style: TextStyle(color: Colors.black),),
                          SizedBox(
                            height: 7,
                          ),
                          Row(
                            children: <Widget>[
                              Text("Urban Hospitals : ", style: TextStyle(color: Colors.black),),
                              Text(tempList1[index].urbanHospital.toString(), style: TextStyle(color: Colors.black),),
                            ],
                          ),
                          Row(
                            children: <Widget>[
                              Text("Rurual Hospitals : ", style: TextStyle(color: Colors.black),),
                              Text(tempList1[index].ruralHospital.toString(), style: TextStyle(color: Colors.black),),
                            ],
                          ),
                          Row(
                            children: <Widget>[
                              Text("Total Hospitals : ", style: TextStyle(color: Colors.black),),
                              Text(tempList1[index].totalHospital.toString(), style: TextStyle(color: Colors.black),),
                            ],
                          ),
                        ],
                      ),
                      Column(
                        children: <Widget>[
                          Text('BEDS', style: TextStyle(color: Colors.black),),
                          SizedBox(
                            height: 7,
                          ),
                          Row(
                            children: <Widget>[
                              Text("Urban Beds : ", style: TextStyle(color: Colors.black),),
                              Text(tempList1[index].urbanBeds.toString(), style: TextStyle(color: Colors.black),),
                            ],
                          ),
                          Row(
                            children: <Widget>[
                              Text("Rural Beds : ", style: TextStyle(color: Colors.black),),
                              Text(tempList1[index].ruralBeds.toString(), style: TextStyle(color: Colors.black),),
                            ],
                          ),
                          Row(
                            children: <Widget>[
                              Text("Total Beds : ", style: TextStyle(color: Colors.black),),
                              Text(tempList1[index].totalBeds.toString(), style: TextStyle(color: Colors.black),),
                            ],
                          ),
                        ],
                      ),
                    ],
                  ),
                )

              ],
            ),
          );
        },

      ),
    );
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: NewBottomBar(
        widget: isData?newWidget():Center(child: CircularProgressIndicator(),),
      ),
    );
  }
}

