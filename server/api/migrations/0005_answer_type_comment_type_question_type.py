# Generated by Django 4.2.1 on 2023-06-24 05:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_answer_question_alter_comment_answer_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='answer',
            name='type',
            field=models.CharField(default='answer'),
        ),
        migrations.AddField(
            model_name='comment',
            name='type',
            field=models.CharField(default='comment'),
        ),
        migrations.AddField(
            model_name='question',
            name='type',
            field=models.CharField(default='question'),
        ),
    ]
