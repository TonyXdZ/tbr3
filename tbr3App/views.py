import json
import requests
from django.shortcuts import redirect, render
from django.core.paginator import Paginator
from django.core.exceptions import SuspiciousOperation
from django.contrib import messages
from django.shortcuts import HttpResponse
from .models import *
from .forms import *
from django.http import JsonResponse, response
from django.conf import settings


def search_person(request):
    if request.method =='POST':
        search_str = json.loads(request.body).get('searchText')
        searchFilter =Person.objects.filter(
            commune__icontains = search_str)| Person.objects.filter(
            wilaya__icontains = search_str)| Person.objects.filter(
            blood_type__icontains = search_str) 
        data = searchFilter.values()
        return JsonResponse(list(data),safe=False)
    else:
        raise SuspiciousOperation('Invalid JSON')
            

def index(request):
    return render(request, 'pages/home.html')


def search(request):
    result = Person.objects.all()
    result_paginator = Paginator(result,20)
    page_num = request.GET.get('page')
    page = result_paginator.get_page(page_num)
    context = {
    ' count':result_paginator.count,
    'result': Person.objects.all(),
    'page': page
    }
    
    return render(request, 'pages/search.html', context)

def create(request):
    userName = request.POST.get('username')
    userPhone = request.POST.get('phone')
    userWilaya = request.POST.get('wilaya', None)
    userCommune = request.POST.get('commune', None)
    userBloodtype = request.POST.get('blood_type', None)
    data = Person(name=userName, phone=userPhone,
                  wilaya=userWilaya, commune=userCommune, blood_type=userBloodtype)
    
    if request.method == 'POST':
     capatcha_token = request.POST.get('g-recaptcha-response')
     cap_data = {'secret': settings.CAPTCHA_SECRET, "response": capatcha_token}
     cap_server_response = requests.post(url=settings.CAPTCHA_URL, data=cap_data)
     cap_json=json.loads(cap_server_response.text)
     if cap_json['success']==False:
         messages.error(request,' الرجاء التحقق من  reCAPTCHA ')
     else :
      data.save()
      messages.success(request,'   تم نشر إعلانك بنجاح ,بارك الله فيك   ') 
   
    return render(request, 'pages/create.html')
