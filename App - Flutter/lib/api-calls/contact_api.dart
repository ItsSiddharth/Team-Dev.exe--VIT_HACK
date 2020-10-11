import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:async';

class Contact{
  var primary = Primary();
  List<Regional> regionalList = [];
  int regionalLength = 0;
  bool isData=false;

  Future getData()async{
    http.Response response= await http.get("https://api.rootnet.in/covid19-in/contacts");
    final decode = jsonDecode(response.body);

    primary.assigner(decode['data']['contacts']['primary']);
    print(primary.email);
    regionalLength = decode['data']['contacts']['regional'].length;
    var regionalInfo = decode['data']['contacts']['regional'];

    for (int i=0;i<regionalLength; i++){
      var regionalElement = Regional();
      regionalElement.assigner(regionalInfo[i]);
      regionalList.add(regionalElement);
//      print(regionalList[i].loc);
    }
    isData=true;
  }
}

class Primary{
  String number;
  String tollFree;
  String email;
  String twitter;
  String facebook;
  String media;

  void assigner(var decode) {
    number = decode['number'];
    tollFree = decode['number-tollfree'];
    email = decode['email'];
    twitter = decode['twitter'];
    facebook = decode['facebook'];
    media = decode['media'][0];
  }
}

class Regional{
  String loc;
  String number;

  void assigner(var decode){
    loc = decode['loc'];
    number = decode['number'];
  }
}