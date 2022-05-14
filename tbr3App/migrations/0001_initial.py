# Generated by Django 4.0 on 2022-05-12 23:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True, verbose_name='Name')),
                ('phone', models.CharField(max_length=10, verbose_name='Phone number')),
                ('wilaya', models.CharField(max_length=200, verbose_name='Wilaya')),
                ('commune', models.CharField(max_length=200, verbose_name='Commune')),
                ('blood_type', models.CharField(choices=[('a+', 'A+'), ('a-', 'A-'), ('b+', 'B+'), ('b-', 'B-'), ('o+', 'O+'), ('o-', 'O-'), ('ab+', 'AB+'), ('ab-', 'AB-')], max_length=3, verbose_name='Blood type')),
                ('pub_date', models.DateTimeField(auto_now_add=True, verbose_name='Publishing date')),
            ],
        ),
    ]
