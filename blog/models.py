from django.db import models
from datetime import datetime

# Create your models here.
class ImagensJogos(models.Model):
    OPCOES_PLATAFORMA = [
         ("WINDOWS", "Windows"),
         ("MAC", "Mac"),
         ("LINUX", "Linux"),
         ("PLAYSTATION", "Playstation"),
         ("XBOX", "Xbox"),
         ("NINTENDO", "Nintendo"),
         ("TABULEIRO", "Jogo de Tabuleiro"),
    ]
    
    OPCOES_GENEROS = [
        ("HACKNSLASH", "Hack & Slash"),
        ("PLATAFORMA", "Plataforma"),
        ("ARCADE", "Arcade"),
        ("CORRIDA", "Corrida"),
        ("ESTRATEGIA", "Estratégia"),
        ("TIRO", "Tiro"),
        ("RPG", "RPG"),
        ("TABULEIRO", "Tabuleiro"),
        ("MUNDO ABERTO", "Mundo aberto"),
        ("STEALTH", "Stealth"),
        ("LUTA", "Luta"),
        ("QUEBRACABECA", "Quebra-Cabeça"),
        ("ROGUELIKE", "RogueLike"),
        ("SIMULACAO", "Simulação"),
    ]

    nome = models.CharField(max_length=100, null=False, blank=False)
    legenda = models.CharField(max_length=300, null=False, blank=False)
    genero = models.CharField(max_length=50,choices=OPCOES_GENEROS , default='')
    Plataforma = models.CharField(max_length=50,choices=OPCOES_PLATAFORMA , default='')
    artigo = models.TextField(null=False, blank=False)
    imagem = models.ImageField(upload_to="imagens/%Y/%m/%d/", blank=True)
    publicada = models.BooleanField(default=False)
    data_artigo = models.DateTimeField(default=datetime.now, blank=False)

    def __str__(self):
        return self.nome