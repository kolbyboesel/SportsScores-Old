// See https://aka.ms/new-console-template for more information
using System;
using RestSharp;

namespace Sports
{
    static class Program
    {
        static async Task Main(){
            var response = await getData();
            Console.Write(response.Content);
        }

        static async Task<RestResponse> getData(){
            var client = new RestClient("https://eastus2.azure.data.mongodb-api.com/app/data-sdfbt/endpoint/data/v1/action/findOne");
            var request = new RestRequest();
            request.AddHeader("Content-Type", "application/json");
            request.AddHeader("Access-Control-Request-Headers", "*");
            request.AddHeader("api-key", "KjIhB7ZvgPZ9i0DfnrU27gsf7uiWOdq91F8MIacza4y3mg80PI7Vw4xzzGm5B4rp");
            var body = @"{" + "" +
            @" ""collection"":""Login_Info""," + "" +
            @" ""database"":""Login_Data""," + "" +
            @" ""dataSource"":""SportsScores""," + "" +
            @" ""projection"":{""_id"": 1}" + "" +
            @"" + "" +
            @"}";
            request.AddStringBody(body, DataFormat.Json);
            RestResponse response = await client.PostAsync(request);
            return response;

        }

    }
}