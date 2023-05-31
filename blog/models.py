from django.db import models

# Create your models here.
class ImagensJogos(models.Model):
    nome = models.CharField(max_length=100, null=False, blank=False)
    legenda = models.CharField(max_length=300, null=False, blank=False)
    artigo = models.TextField(null=False, blank=False)
    imagem = models.CharField(max_length=500, null=False, blank=False)

    def __str__(self):
        return f"Imagem [nome={self.nome}]"