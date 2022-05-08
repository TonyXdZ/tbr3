from django.db import models
from django.db.models.deletion import PROTECT
from django.utils import timezone
import math

class Person (models.Model):
    name = models.CharField(max_length=200,default='فاعل خير')    
    phone = models.CharField(max_length=10)    
    wilaya = models.CharField(max_length=200)
    commun = models.CharField(max_length=200)
    zomra = models.CharField(max_length=3,default='الزمرة')
    
    pub_date = models.DateTimeField(auto_now_add= True)
    def whenpublished(self):
        now = timezone.now()
        
        diff= now - self.pub_date

        if diff.days == 0 and diff.seconds >= 0 and diff.seconds < 60:
            seconds= diff.seconds
            
            if seconds == 1:
                return 'ثانية' + str(seconds) +  "منذ"
            
            else:
                return str(seconds) + "  ثا"

            

        if diff.days == 0 and diff.seconds >= 60 and diff.seconds < 3600:
            minutes= math.floor(diff.seconds/60)

            if minutes == 1:
                return  'منذ   '+ str(minutes) + " د "
            
            else:
                return ' منذ '+ str(minutes) + " د "



        if diff.days == 0 and diff.seconds >= 3600 and diff.seconds < 86400:
            hours= math.floor(diff.seconds/3600)

            if hours == 1:
                return str(hours) + "  سا "

            else:
                return ' منذ '+ str(hours) + " سا  "

        # 1 day to 30 days
        if diff.days >= 1 and diff.days < 30:
            days= diff.days
        
            if days == 1:
                return str(days) + " يوم "

            else:
                return str(days) + "  يوم "

        if diff.days >= 30 and diff.days < 365:
            months= math.floor(diff.days/30)
            

            if months == 1:
                return str(months) + "  شهر"

            else:
                return str(months) + "  شهر"


        if diff.days >= 365:
            years= math.floor(diff.days/365)

            if years == 1:
                return str(years) + " year ago"

            else:
                return str(years) + " years ago"
            

    
    def __str__(self):
        return str(self.phone)