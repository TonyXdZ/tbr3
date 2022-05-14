from django.db import models
from django.db.models.deletion import PROTECT
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
import math

class Person(models.Model):
    BLOODTYPE_CHOICES=(
            ('a+', 'A+'),
            ('a-', 'A-'),
            ('b+', 'B+'),
            ('b-', 'B-'),
            ('o+', 'O+'),
            ('o-', 'O-'),
            ('ab+', 'AB+'),
            ('ab-', 'AB-'),
    )

    name = models.CharField(_('Name'), max_length=200, blank=True, null=True)    
    phone = models.CharField(_('Phone number'), max_length=10)    
    wilaya = models.CharField(_('Wilaya'), max_length=200)
    commune = models.CharField(_('Commune'), max_length=200)
    blood_type = models.CharField(_('Blood type'), choices=BLOODTYPE_CHOICES, max_length=3)
    pub_date = models.DateTimeField(_('Publishing date'), auto_now_add=True)
    
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