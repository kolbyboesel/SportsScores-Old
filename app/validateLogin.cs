using System;
using RestSharp;

      var client = new RestClient("https://eastus2.azure.data.mongodb-api.com/app/data-sdfbt/endpoint/data/v1/action/findOne");
      var request = new RestRequest();
      request.AddHeader("Content-Type", "application/json");
      request.AddHeader("Access-Control-Request-Headers", "*");
      request.AddHeader("api-key", r4IkBj1sxRqmZKveUPaZR1naoQupVb1VPFcLXrcLhQxmeKrNwa3Sa3f7Gm54BxUb);
      var body = @"{" + "" + 
      @" ""collection"":""Login_Info""," + "" +
      @" ""database"":""Login_Data""," + "" +
      @" ""dataSource"":""SportsScores""," + "" +
      @" ""projection"":{""_id"": 1}" + "" +
      @"" + "" + 
      @"}";
request.AddStringBody(body, DataFormat.Json);
RestResponse response = await client.PostAsync(request);
Console.WriteLine(response.Content);
