import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class Shop extends StatefulWidget {
  @override
  _ShopState createState() => _ShopState();
}

class _ShopState extends State<Shop> {
  Future<List<dynamic>> fetchitems() async {
    var url = "http://192.168.0.5:5000/items";
    var result = await http.get(url);
    print(result);

    return json.decode(result.body);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('SHOP'),
      ),
      body: FutureBuilder(
        future: fetchitems(),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          if (snapshot.hasData) {
            return ListView.builder(
              itemCount: snapshot.data.length,
              itemBuilder: (BuildContext context, int index) {
                return ListTile(
                  leading:
                      Image.network(snapshot.data[index]['image'].toString()),
                  title: Text(snapshot.data[index]['title']),
                  subtitle: Text(snapshot.data[index]['price'].toString()),
                );
              },
            );
          }
        },
      ),
    );
  }
}
