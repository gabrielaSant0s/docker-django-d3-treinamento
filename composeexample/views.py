from django.http import HttpResponse
from django.shortcuts import render
import random
import os
import json

def graph_scatter(request):
    
    serie_x = []
    serie_y = []

    for cont in range(0,50):
        x = random.randint(0,10)
        y = random.randint(0,10)
        serie_x.append(int(x))
        serie_y.append(int(y))


    #html = "<html><body>%s.</body></html>" % data
    
    return render(request,"graph_scatter.html",{'serie_x':serie_x, 'serie_y':serie_y}) 
    #return HttpResponse(html)
    #render(request, 'composeexample/graph_scatter.html',data)
