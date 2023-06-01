# Generated by Django 4.2.1 on 2023-06-01 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_imagensjogos_genero'),
    ]

    operations = [
        migrations.AddField(
            model_name='imagensjogos',
            name='Plataforma',
            field=models.CharField(choices=[('WINDOWS', 'Windows'), ('MAC', 'Mac'), ('LINUX', 'Linux'), ('PLAYSTATION', 'Playstation'), ('XBOX', 'Xbox'), ('NINTENDO', 'Nintendo'), ('TABULEIRO', 'Jogo de Tabuleiro')], default='', max_length=50),
        ),
    ]
